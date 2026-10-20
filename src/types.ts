export type MoveId =
  | 'check_in_privately'
  | 'speak_up_kindly'
  | 'redirect'
  | 'get_backup'
  | 'wait_and_watch';

export interface MoveDefinition {
  id: MoveId;
  number: number;
  name: string;
  shortAction: string;
  description: string;
  whenThisHelps: string;
  whatToWatchOutFor: string;
  iconName: string;
  accentColor: string;
}

export interface Character {
  id: string;
  name: string;
  avatarColor: string;
  initials: string;
  isViewer?: boolean;
}

export interface ChatMessage {
  id: string;
  senderId: string;
  text: string;
  timestamp: string;
  isDeleted?: boolean;
  isSystemNotice?: boolean;
  thoughtBubble?: string; // For Scenario 4 thought bubble peek
  isPrivateDM?: boolean;
  recipientId?: string;
}

export interface WordingOption {
  id: string;
  label: string; // e.g., "Gentle", "Direct", "Lighthearted"
  text: string;
  explanation?: string;
}

export interface MoveChoice {
  moveId: MoveId;
  title: string;
  description: string;
  wordingOptions?: WordingOption[]; // For active moves
  branchMessages: ChatMessage[];
  outcomeSummary: string;
  isWaitAndWatch?: boolean;
  followUpPrompt?: string; // e.g. "It's not too late. What could Noor do now?"
}

export interface Scenario {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  groupName: string;
  viewerRole: string; // e.g., "Noor"
  viewerId: string;
  summary: string;
  estimatedMinutes: number;
  characters: Character[];
  noticePrompt: {
    heading: string;
    body: string;
    reflectionPrompt: string;
  };
  initialMessages: ChatMessage[];
  pauseQuestion: string; // e.g., "Noor wasn't laughing. What does Noor do?"
  choices: MoveChoice[];
  twoThingsCanBeTrue: string[];
  discussionQuestions: string[];
  teacherNote: {
    listenFor: string;
    followUpQuestion: string;
  };
  isFullyImplemented?: boolean;
}
