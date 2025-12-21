
export enum SlideType {
  COVER = 'COVER',
  OBJECTIVES = 'OBJECTIVES',
  GRAMMAR_STRUCTURE = 'GRAMMAR_STRUCTURE',
  VERB_GRID = 'VERB_GRID',
  V2_SENTENCE_BUILDER = 'V2_SENTENCE_BUILDER',
  GAME_INTRO = 'GAME_INTRO',
  IFRAME = 'IFRAME',
  NEGATIVES_QUESTIONS = 'NEGATIVES_QUESTIONS',
  PRACTICE_DRILLS = 'PRACTICE_DRILLS',
  READING_COMPREHENSION = 'READING_COMPREHENSION',
  SPEAKING_HUB = 'SPEAKING_HUB',
  APOLOGY_RESPONSE = 'APOLOGY_RESPONSE',
  WRITTEN_QUIZ = 'WRITTEN_QUIZ',
  TIME_DRILL = 'TIME_DRILL',
  DEBRIEF = 'DEBRIEF'
}

export interface Vocabulary {
  word: string;
  definition: string;
}

export interface KeyPoint {
  id: number;
  text: string;
  subtext: string;
}

export interface SentencePart {
  label: string;
  value: string;
  color: string;
  isMissing?: boolean;
}

export interface FlipCardData {
  id: number;
  v1: string;
  v2: string;
  pronunciation: string;
  shortDescription: string;
  context: string;
  isRegular?: boolean;
  icon: string;
}

export interface SlideData {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  content: any;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
