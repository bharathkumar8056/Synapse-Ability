import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  // Easy Questions (Level 1-10)
  {
    id: '1',
    question: 'What color is commonly used for stop signs?',
    options: ['Red', 'Green', 'Blue', 'Yellow'],
    correctAnswer: 0,
    difficulty: 'easy',
    explanation: 'Stop signs are red to make them highly visible and recognizable.',
    coins: 20
  },
  {
    id: '2',
    question: 'Which meal is typically eaten in the morning?',
    options: ['Dinner', 'Lunch', 'Breakfast', 'Snack'],
    correctAnswer: 2,
    difficulty: 'easy',
    explanation: 'Breakfast is the first meal of the day, eaten in the morning.',
    coins: 20
  },
  {
    id: '3',
    question: 'What is the capital of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
    correctAnswer: 2,
    difficulty: 'easy',
    explanation: 'Canberra is the capital of Australia, chosen as a compromise between Sydney and Melbourne.',
    coins: 30
  },
  {
    id: '4',
    question: 'Which gas is most abundant in Earth’s atmosphere?',
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Argon'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'Nitrogen makes up about 78% of Earth’s atmosphere, making it the most abundant gas.',
    coins: 30
  },
  {
    id: '5',
    question: 'Who wrote the novel "1984"?',
    options: ['George Orwell', 'Aldous Huxley', 'Ray Bradbury', 'Jules Verne'],
    correctAnswer: 0,
    difficulty: 'easy',
    explanation: 'George Orwell wrote "1984," a dystopian novel about a totalitarian regime.',
    coins: 30
  },
  {
    id: '6',
    question: 'Which planet in our solar system has the most moons?',
    options: ['Earth', 'Jupiter', 'Saturn', 'Neptune'],
    correctAnswer: 2,
    difficulty: 'easy',
    explanation: 'Saturn has the most moons, with 83 confirmed natural satellites as of recent discoveries.',
    coins: 30
  },
  {
    id: '7',
    question: 'What is the smallest unit of life?',
    options: ['Atom', 'Molecule', 'Cell', 'Organ'],
    correctAnswer: 2,
    difficulty: 'easy',
    explanation: 'The cell is the basic structural and functional unit of all living organisms.',
    coins: 30
  },
  {
    id: '8',
    question: 'Which is the largest organ in the human body?',
    options: ['Heart', 'Liver', 'Skin', 'Brain'],
    correctAnswer: 2,
    difficulty: 'easy',
    explanation: 'The skin is the largest organ in the human body, covering the entire body surface.',
    coins: 30
  },
  {
    id: '9',
    question: 'What is the chemical symbol for gold?',
    options: ['Go', 'Au', 'Ag', 'Fe'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'The chemical symbol for gold is "Au," derived from its Latin name "Aurum."',
    coins: 30
  },
  {
    id: '10',
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Mercury'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'Mars is called the Red Planet because of its reddish appearance due to iron oxide on its surface.',
    coins: 30
  },
  {
    id: '11',
    question: 'Who painted the Mona Lisa?',
    options: ['Leonardo da Vinci', 'Vincent van Gogh', 'Michelangelo', 'Pablo Picasso'],
    correctAnswer: 0,
    difficulty: 'easy',
    explanation: 'The Mona Lisa was painted by Leonardo da Vinci, one of the most renowned artists of the Renaissance.',
    coins: 30
  },
  {
    id: '12',
    question: 'Which is the smallest continent by land area?',
    options: ['Antarctica', 'Australia', 'Europe', 'South America'],
    correctAnswer: 1,
    difficulty: 'easy',
    explanation: 'Australia is the smallest continent by land area, often referred to as an "island continent."',
    coins: 30
  },
  
  // Medium Questions (Level 11-20)
  {
    id: '13',
    question: 'How much change would you receive from $10 if you spent $7.50?',
    options: ['$2.50', '$3.50', '$1.50', '$2.00'],
    correctAnswer: 0,
    difficulty: 'medium',
    explanation: '$10.00 - $7.50 = $2.50',
    coins: 35,
    moneyReward: 1
  }
];