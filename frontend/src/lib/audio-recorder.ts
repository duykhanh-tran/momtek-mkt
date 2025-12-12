// src/lib/audio-recorder.ts
// Helper này xử lý việc ghi âm và chuyển đổi sang định dạng WAV 16kHz 16-bit mono

let audioContext: AudioContext;
let mediaStream: MediaStream;
let audioWorkletNode: AudioWorkletNode;
let audioBuffer: Float32Array[] = [];
const TARGET_SAMPLE_RATE = 16000;

// 1. Audio Worklet Processor
// Worklet này chạy ở một thread riêng để nhận dữ liệu âm thanh thô
const audioProcessor = `
class ResamplingProcessor extends AudioWorkletProcessor {
  constructor(options) {
    super();
    this.targetSampleRate = options.processorOptions.targetSampleRate;
    this.inputSampleRate = sampleRate;
    this.resampleRatio = this.inputSampleRate / this.targetSampleRate;
    this.buffer = [];
  }

  process(inputs, outputs, parameters) {
    const input = inputs[0];
    const inputChannelData = input[0]; // Chỉ lấy kênh mono

    if (inputChannelData) {
      this.buffer.push(...inputChannelData);
      
      let resampledData = [];
      while (this.buffer.length >= this.resampleRatio) {
        let index = Math.floor(this.resampleRatio);
        resampledData.push(this.buffer[index]);
        this.buffer.splice(0, index);
      }
      
      if (resampledData.length > 0) {
        this.port.postMessage(new Float32Array(resampledData));
      }
    }
    return true;
  }
}

registerProcessor('resampling-processor', ResamplingProcessor);
`;

// 2. Hàm bắt đầu ghi âm
export const startRecording = async (): Promise<void> => {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    throw new Error('Trình duyệt không hỗ trợ Media Devices API');
  }

  // Yêu cầu quyền truy cập micro
  mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
  
  // Tạo AudioContext MỚI mỗi lần ghi âm
  audioContext = new AudioContext();
  
  // Tải Worklet
  const blob = new Blob([audioProcessor], { type: 'application/javascript' });
  const url = URL.createObjectURL(blob);
  await audioContext.audioWorklet.addModule(url);

  // Tạo node xử lý
  // Lỗi ở đây: Thiếu 'audioContext' làm tham số đầu tiên
  // Dòng cũ: new AudioWorkletNode('resampling-processor', {
  // Sửa lại:
  audioWorkletNode = new AudioWorkletNode(audioContext, 'resampling-processor', {
    processorOptions: { targetSampleRate: TARGET_SAMPLE_RATE }
  });

  // Kết nối: Micro -> Worklet
  const source = audioContext.createMediaStreamSource(mediaStream);
  source.connect(audioWorkletNode);

  // Xóa buffer cũ và lắng nghe dữ liệu mới
  audioBuffer = [];
  audioWorkletNode.port.onmessage = (event) => {
    audioBuffer.push(event.data);
  };
};

// 3. Hàm dừng ghi âm và trả về File WAV
export const stopRecording = (): File => {
  // Dọn dẹp
  if (audioWorkletNode) {
    audioWorkletNode.disconnect();
  }
  if (mediaStream) {
    mediaStream.getTracks().forEach(track => track.stop());
  }
  if (audioContext && audioContext.state !== 'closed') {
    audioContext.close();
  }

  // Tạo file WAV từ buffer
  const wavBlob = createWavBlob(audioBuffer);
  return new File([wavBlob], 'recording.wav', { type: 'audio/wav' });
};

// 4. Hàm tạo Blob WAV (16kHz, 16-bit, 1 kênh)
const createWavBlob = (buffers: Float32Array[]): Blob => {
  const dataLength = buffers.reduce((acc, val) => acc + val.length, 0);
  const buffer = new Float32Array(dataLength);

  let offset = 0;
  for (const buf of buffers) {
    buffer.set(buf, offset);
    offset += buf.length;
  }

  // Chuyển từ Float32 sang PCM 16-bit
  const dataView = new DataView(new ArrayBuffer(dataLength * 2));
  for (let i = 0; i < dataLength; i++) {
    const s = Math.max(-1, Math.min(1, buffer[i]));
    dataView.setInt16(i * 2, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
  }

  // Tạo Header WAV
  const header = new DataView(new ArrayBuffer(44));
  writeString(header, 0, 'RIFF');
  header.setUint32(4, 36 + dataLength * 2, true);
  writeString(header, 8, 'WAVE');
  writeString(header, 12, 'fmt ');
  header.setUint32(16, 16, true);
  header.setUint16(20, 1, true); // 1 = PCM
  header.setUint16(22, 1, true); // 1 = Mono
  header.setUint32(24, TARGET_SAMPLE_RATE, true);
  header.setUint32(28, TARGET_SAMPLE_RATE * 2, true); // Byte rate
  header.setUint16(32, 2, true); // Block align
  header.setUint16(34, 16, true); // 16-bit
  writeString(header, 36, 'data');
  header.setUint32(40, dataLength * 2, true);

  return new Blob([header, dataView], { type: 'audio/wav' });
};

const writeString = (view: DataView, offset: number, string: string) => {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
};