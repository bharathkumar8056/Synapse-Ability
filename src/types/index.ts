export interface Game {
  id: string;
  title: string;
  description: string;
  category: 'daily-living' | 'cognitive' | 'social';
  difficulty: 'easy' | 'medium' | 'hard';
  icon: string;
  rewards: {
    completion: number;
    perfect: number;
  };
}

export interface UserProgress {
  gameId: string;
  score: number;
  completedAt: Date;
  level?: number;
}

export interface UserProfile {
  id: string;
  balance: number;
  money: number;
  completedGames: UserProgress[];
  currentLevel: {
    quiz: number;
    puzzle: number;
  };
}

export interface GameReward {
  amount: number;
  message: string;
  type: 'completion' | 'perfect' | 'achievement';
  moneyReward?: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  difficulty: 'easy' | 'medium' | 'hard';
  explanation: string;
  coins: number;
  moneyReward?: number;
}

export interface HintOption {
  id: string;
  type: 'skip' | '50-50' | 'hint';
  cost: number;
  description: string;
}