import { Game } from '../types';

export const games: Game[] = [
  {
    id: 'memory-match',
    title: 'Memory Match',
    description: 'Match pairs of cards to improve memory and concentration',
    category: 'cognitive',
    difficulty: 'easy',
    icon: 'Brain',
    rewards: {
      completion: 50,
      perfect: 100
    }
  },
  {
    id: 'quiz-master',
    title: 'Quiz Master',
    description: 'Test your knowledge and earn rewards',
    category: 'cognitive',
    difficulty: 'easy',
    icon: 'GraduationCap',
    rewards: {
      completion: 75,
      perfect: 150
    }
  },
  {
    id: 'word-puzzle',
    title: 'Word Puzzle',
    description: 'Unscramble letters to discover hidden words',
    category: 'cognitive',
    difficulty: 'medium',
    icon: 'Brain',
    rewards: {
      completion: 50,
      perfect: 100
    }
  },
  {
    id: 'number-puzzle',
    title: 'Sudoku Challenge',
    description: 'Fill the grid with numbers following Sudoku rules',
    category: 'cognitive',
    difficulty: 'hard',
    icon: 'Brain',
    rewards: {
      completion: 100,
      perfect: 200
    }
  },
  {
    id: 'daily-routine',
    title: 'Daily Routine Planner',
    description: 'Learn to organize daily activities in the correct order',
    category: 'daily-living',
    difficulty: 'medium',
    icon: 'CalendarCheck',
    rewards: {
      completion: 75,
      perfect: 150
    }
  },
  {
    id: 'social-scenarios',
    title: 'Social Scenarios',
    description: 'Practice appropriate responses in various social situations',
    category: 'social',
    difficulty: 'medium',
    icon: 'Users',
    rewards: {
      completion: 75,
      perfect: 150
    }
  }
];