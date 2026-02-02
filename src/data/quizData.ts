export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  emoji: string;
  color: 'green' | 'blue' | 'orange' | 'purple';
  questions: Question[];
}

export const quizzes: Quiz[] = [
  {
    id: 'maths',
    title: 'Maths',
    emoji: '🔢',
    color: 'green',
    questions: [
      {
        id: 1,
        question: 'What is 5 + 3?',
        options: ['6', '7', '8', '9'],
        correctAnswer: 2,
        explanation: '5 plus 3 equals 8!'
      },
      {
        id: 2,
        question: 'What is 12 - 4?',
        options: ['6', '7', '8', '9'],
        correctAnswer: 2,
        explanation: '12 minus 4 equals 8!'
      },
      {
        id: 3,
        question: 'What is 3 × 4?',
        options: ['10', '11', '12', '13'],
        correctAnswer: 2,
        explanation: '3 times 4 equals 12!'
      },
      {
        id: 4,
        question: 'What is 20 ÷ 5?',
        options: ['3', '4', '5', '6'],
        correctAnswer: 1,
        explanation: '20 divided by 5 equals 4!'
      },
      {
        id: 5,
        question: 'What is 7 + 8?',
        options: ['13', '14', '15', '16'],
        correctAnswer: 2,
        explanation: '7 plus 8 equals 15!'
      }
    ]
  },
  {
    id: 'english',
    title: 'English',
    emoji: '📚',
    color: 'blue',
    questions: [
      {
        id: 1,
        question: 'Which word is a noun?',
        options: ['Run', 'Happy', 'Cat', 'Quickly'],
        correctAnswer: 2,
        explanation: 'Cat is a noun - it names a thing!'
      },
      {
        id: 2,
        question: 'What is the opposite of "big"?',
        options: ['Large', 'Small', 'Huge', 'Tall'],
        correctAnswer: 1,
        explanation: 'Small is the opposite of big!'
      },
      {
        id: 3,
        question: 'Which sentence is correct?',
        options: ['She run fast.', 'She runs fast.', 'She running fast.', 'She runned fast.'],
        correctAnswer: 1,
        explanation: '"She runs fast" uses the correct verb form!'
      },
      {
        id: 4,
        question: 'What rhymes with "cat"?',
        options: ['Dog', 'Hat', 'Cup', 'Bird'],
        correctAnswer: 1,
        explanation: 'Hat rhymes with cat - they both end in "at"!'
      },
      {
        id: 5,
        question: 'Which is a verb?',
        options: ['Beautiful', 'Jump', 'Table', 'Blue'],
        correctAnswer: 1,
        explanation: 'Jump is a verb - it shows action!'
      }
    ]
  },
  {
    id: 'science',
    title: 'Science',
    emoji: '🔬',
    color: 'orange',
    questions: [
      {
        id: 1,
        question: 'What do plants need to make food?',
        options: ['Sunlight', 'Pizza', 'Toys', 'Books'],
        correctAnswer: 0,
        explanation: 'Plants use sunlight for photosynthesis!'
      },
      {
        id: 2,
        question: 'Which planet is closest to the Sun?',
        options: ['Earth', 'Mars', 'Mercury', 'Venus'],
        correctAnswer: 2,
        explanation: 'Mercury is the closest planet to the Sun!'
      },
      {
        id: 3,
        question: 'What is H₂O?',
        options: ['Oxygen', 'Hydrogen', 'Water', 'Carbon'],
        correctAnswer: 2,
        explanation: 'H₂O is the chemical formula for water!'
      },
      {
        id: 4,
        question: 'How many legs does a spider have?',
        options: ['6', '8', '10', '4'],
        correctAnswer: 1,
        explanation: 'Spiders have 8 legs!'
      },
      {
        id: 5,
        question: 'What is the largest organ in the human body?',
        options: ['Heart', 'Brain', 'Skin', 'Liver'],
        correctAnswer: 2,
        explanation: 'Skin is the largest organ in our body!'
      }
    ]
  }
];
