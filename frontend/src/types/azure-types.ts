// Định nghĩa cấu trúc JSON trả về từ Azure Pronunciation Assessment

export interface AzurePronunciationResult {
  RecognitionStatus: string;
  Offset: number;
  Duration: number;
  NBest: NBest[];
}

export interface NBest {
  Confidence: number;
  Lexical: string;
  ITN: string;
  MaskedITN: string;
  Display: string;
  PronunciationAssessment: PronunciationAssessment;
  Words: Word[];
}

export interface PronunciationAssessment {
  AccuracyScore: number;
  FluencyScore: number;
  CompletenessScore: number;
  PronScore: number;
}

export interface Word {
  Word: string;
  Offset: number;
  Duration: number;
  PronunciationAssessment: WordAssessment;
}

export interface WordAssessment {
  AccuracyScore: number;
  ErrorType: string; // "None", "Mispronunciation", "Omission", "Insertion"
}