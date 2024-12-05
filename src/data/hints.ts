import { HintOption } from '../types';

export const hintOptions: HintOption[] = [
  {
    id: 'skip',
    type: 'skip',
    cost: 50,
    description: 'Skip this question without losing progress'
  },
  {
    id: '50-50',
    type: '50-50',
    cost: 30,
    description: 'Remove two incorrect answers'
  },
  {
    id: 'hint',
    type: 'hint',
    cost: 20,
    description: 'Get a helpful hint for this question'
  }
];