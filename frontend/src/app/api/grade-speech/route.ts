import { NextRequest, NextResponse } from 'next/server';
import * as sdk from 'microsoft-cognitiveservices-speech-sdk';

// Lấy key và region từ biến môi trường
const AZURE_SPEECH_KEY = process.env.AZURE_SPEECH_KEY;
const AZURE_SPEECH_REGION = process.env.AZURE_SPEECH_REGION;

/**
 * API Route để chấm điểm phát âm (Pronunciation Assessment)
 * Nhận FormData: { audio: Blob, referenceText: string }
 * Trả về JSON kết quả từ Azure
 */
export async function POST(request: NextRequest) {
  if (!AZURE_SPEECH_KEY || !AZURE_SPEECH_REGION) {
    return NextResponse.json(
      { error: 'Chưa cấu hình Azure Speech Key hoặc Region' },
      { status: 500 }
    );
  }

  try {
    // 1. Lấy FormData từ request
    const formData = await request.formData();
    const audioFile = formData.get('audio') as File;
    const referenceText = formData.get('referenceText') as string;

    if (!audioFile || !referenceText) {
      return NextResponse.json(
        { error: 'Thiếu file audio hoặc referenceText' },
        { status: 400 }
      );
    }

    // 2. Cấu hình Azure Speech SDK
    const speechConfig = sdk.SpeechConfig.fromSubscription(
      AZURE_SPEECH_KEY,
      AZURE_SPEECH_REGION
    );
    
    // Yêu cầu Azure trả về kết quả chi tiết
    speechConfig.speechRecognitionLanguage = 'en-US'; // (Thay đổi nếu cần)
    speechConfig.setProperty(
    sdk.PropertyId.SpeechServiceResponse_RequestDetailedResultTrueFalse, // ✅ Sửa thành cái này
    'true'
);

    // 3. Chuẩn bị Audio Input
    // Chuyển audio Blob (File) thành Buffer
    const audioBuffer = Buffer.from(await audioFile.arrayBuffer());

    // Tạo một PushAudioInputStream từ Buffer
    // Chúng ta giả định âm thanh là WAV, 16kHz, 16-bit, 1 kênh
    // (Chúng ta sẽ đảm bảo định dạng này ở Giai đoạn 4b)
    const audioFormat = sdk.AudioStreamFormat.getWaveFormatPCM(16000, 16, 1);
    const pushStream = sdk.AudioInputStream.createPushStream(audioFormat);
    pushStream.write(audioBuffer);
    pushStream.close();

    const audioConfig = sdk.AudioConfig.fromStreamInput(pushStream);

    // 4. Cấu hình Pronunciation Assessment
    const pronunciationConfig = new sdk.PronunciationAssessmentConfig(
      referenceText,
      sdk.PronunciationAssessmentGradingSystem.HundredMark, // Thang điểm 100
      sdk.PronunciationAssessmentGranularity.Phoneme, // Chấm đến âm vị
      true // Đánh giá cả từ sai và từ thừa
    );

    // 5. Tạo Recognizer và chạy
    const recognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);
    pronunciationConfig.applyTo(recognizer);

    // Sử dụng recognizeOnceAsync để nhận diện 1 lần duy nhất
    const result = await new Promise<sdk.SpeechRecognitionResult>((resolve, reject) => {
      recognizer.recognizeOnceAsync(
        (result) => resolve(result),
        (err) => reject(err)
      );
    });

    recognizer.close();

    // 6. Trích xuất và trả về kết quả
    if (result.reason === sdk.ResultReason.RecognizedSpeech) {
      const pronunciationResult = sdk.PronunciationAssessmentResult.fromResult(result);
      
      // Kết quả chi tiết nằm trong 'properties' dưới dạng JSON
      const resultJson = result.properties.getProperty(
        sdk.PropertyId.SpeechServiceResponse_JsonResult
      );
      
      if (!resultJson) {
         return NextResponse.json(
          { error: 'Không thể lấy kết quả JSON từ Azure' },
          { status: 500 }
        );
      }

      // Parse JSON và trả về cho client
      const finalResult = JSON.parse(resultJson);
      
      return NextResponse.json(finalResult, { status: 200 });
    } else {
      return NextResponse.json(
        { error: `Lỗi nhận diện: ${result.errorDetails}` },
        { status: 500 }
      );
    }

  } catch (error) {
    const errorMessage = (error instanceof Error) ? error.message : 'Lỗi không xác định';
    console.error('Lỗi trong API /api/grade-speech:', errorMessage);
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}