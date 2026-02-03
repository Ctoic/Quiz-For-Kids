export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export const difficultyMeta = {
  easy: {
    title: 'Easy',
    description: 'Great for getting started and building confidence.'
  },
  medium: {
    title: 'Medium',
    description: 'A little trickier with bigger numbers and deeper thinking.'
  },
  hard: {
    title: 'Hard',
    description: 'For quiz champs who love a challenge.'
  }
} as const;

export type Difficulty = keyof typeof difficultyMeta;

export interface Quiz {
  id: string;
  title: string;
  emoji: string;
  color: 'green' | 'blue' | 'orange' | 'purple';
  levels: Record<Difficulty, Question[]>;
}

export const quizzes: Quiz[] = [
  {
    id: 'maths',
    title: 'Maths',
    emoji: '🔢',
    color: 'green',
    levels: {
      easy: [
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
        },
        {
          id: 6,
          question: 'What is 9 + 6?',
          options: ['14', '15', '16', '17'],
          correctAnswer: 1,
          explanation: '9 plus 6 equals 15!'
        },
        {
          id: 7,
          question: 'What is 14 - 7?',
          options: ['5', '6', '7', '8'],
          correctAnswer: 2,
          explanation: '14 minus 7 equals 7!'
        },
        {
          id: 8,
          question: 'What is 6 × 3?',
          options: ['12', '15', '18', '21'],
          correctAnswer: 2,
          explanation: '6 times 3 equals 18!'
        },
        {
          id: 9,
          question: 'What is 24 ÷ 6?',
          options: ['3', '4', '5', '6'],
          correctAnswer: 1,
          explanation: '24 divided by 6 equals 4!'
        },
        {
          id: 10,
          question: 'Which number is even?',
          options: ['7', '9', '12', '15'],
          correctAnswer: 2,
          explanation: '12 is even because it can be divided by 2.'
        },
        {
          id: 11,
          question: 'What is 10 + 5?',
          options: ['12', '13', '14', '15'],
          correctAnswer: 3,
          explanation: '10 plus 5 equals 15!'
        },
        {
          id: 12,
          question: 'What is 18 - 9?',
          options: ['7', '8', '9', '10'],
          correctAnswer: 2,
          explanation: '18 minus 9 equals 9!'
        },
        {
          id: 13,
          question: 'What is 7 × 2?',
          options: ['12', '13', '14', '15'],
          correctAnswer: 2,
          explanation: '7 times 2 equals 14!'
        },
        {
          id: 14,
          question: 'What is 30 ÷ 5?',
          options: ['4', '5', '6', '7'],
          correctAnswer: 2,
          explanation: '30 divided by 5 equals 6!'
        },
        {
          id: 15,
          question: 'Which number is greater?',
          options: ['12', '14', '17', '19'],
          correctAnswer: 3,
          explanation: '19 is the greatest number listed.'
        }
      ],
      medium: [
        {
          id: 1,
          question: 'What is 25 + 17?',
          options: ['41', '42', '43', '44'],
          correctAnswer: 1,
          explanation: '25 plus 17 equals 42.'
        },
        {
          id: 2,
          question: 'What is 60 - 18?',
          options: ['40', '42', '44', '48'],
          correctAnswer: 1,
          explanation: '60 minus 18 equals 42.'
        },
        {
          id: 3,
          question: 'What is 9 × 7?',
          options: ['56', '63', '70', '72'],
          correctAnswer: 1,
          explanation: '9 times 7 equals 63.'
        },
        {
          id: 4,
          question: 'What is 56 ÷ 7?',
          options: ['6', '7', '8', '9'],
          correctAnswer: 2,
          explanation: '56 divided by 7 equals 8.'
        },
        {
          id: 5,
          question: 'What number has 3 tens and 4 ones?',
          options: ['34', '43', '304', '13'],
          correctAnswer: 0,
          explanation: '3 tens (30) plus 4 ones equals 34.'
        },
        {
          id: 6,
          question: 'Which fraction equals 1/2?',
          options: ['2/4', '3/4', '1/3', '4/5'],
          correctAnswer: 0,
          explanation: '2/4 is the same as 1/2.'
        },
        {
          id: 7,
          question: 'What is 45 + 30?',
          options: ['65', '70', '75', '80'],
          correctAnswer: 2,
          explanation: '45 plus 30 equals 75.'
        },
        {
          id: 8,
          question: 'What is 90 ÷ 10?',
          options: ['8', '9', '10', '11'],
          correctAnswer: 1,
          explanation: '90 divided by 10 equals 9.'
        },
        {
          id: 9,
          question: 'If you have 3 groups of 5, how many altogether?',
          options: ['8', '10', '15', '20'],
          correctAnswer: 2,
          explanation: '3 groups of 5 equals 15.'
        },
        {
          id: 10,
          question: 'Which number is a multiple of 5?',
          options: ['14', '20', '23', '27'],
          correctAnswer: 1,
          explanation: 'Multiples of 5 end in 0 or 5.'
        }
      ],
      hard: [
        {
          id: 1,
          question: 'What is 125 - 47?',
          options: ['68', '78', '72', '88'],
          correctAnswer: 1,
          explanation: '125 minus 47 equals 78.'
        },
        {
          id: 2,
          question: 'What is 36 × 4?',
          options: ['124', '132', '144', '146'],
          correctAnswer: 2,
          explanation: '36 times 4 equals 144.'
        },
        {
          id: 3,
          question: 'What is 144 ÷ 12?',
          options: ['10', '11', '12', '14'],
          correctAnswer: 2,
          explanation: '144 divided by 12 equals 12.'
        },
        {
          id: 4,
          question: 'What is 3/4 of 20?',
          options: ['12', '15', '16', '18'],
          correctAnswer: 1,
          explanation: 'One quarter of 20 is 5, so three quarters is 15.'
        },
        {
          id: 5,
          question: 'What is the perimeter of a rectangle that is 5 units by 3 units?',
          options: ['8', '15', '16', '20'],
          correctAnswer: 2,
          explanation: 'Perimeter is 2 × (5 + 3) = 16.'
        },
        {
          id: 6,
          question: 'What is 7 × 8 - 10?',
          options: ['46', '48', '54', '66'],
          correctAnswer: 0,
          explanation: '7 times 8 is 56, and 56 minus 10 is 46.'
        },
        {
          id: 7,
          question: 'What is 6 + 4 × 2?',
          options: ['20', '14', '16', '12'],
          correctAnswer: 1,
          explanation: 'Multiply first: 4 × 2 = 8, then 6 + 8 = 14.'
        },
        {
          id: 8,
          question: 'If 2 pencils cost $6, how much do 5 pencils cost?',
          options: ['$10', '$12', '$15', '$18'],
          correctAnswer: 2,
          explanation: 'Each pencil costs $3, so 5 cost $15.'
        },
        {
          id: 9,
          question: 'What is 3 × (9 + 1)?',
          options: ['27', '30', '33', '36'],
          correctAnswer: 1,
          explanation: '9 + 1 is 10, and 3 × 10 = 30.'
        },
        {
          id: 10,
          question: 'A clock shows 3:30. How many minutes until 4:00?',
          options: ['15', '20', '30', '45'],
          correctAnswer: 2,
          explanation: 'From 3:30 to 4:00 is 30 minutes.'
        }
      ]
    }
  },
  {
    id: 'english',
    title: 'English',
    emoji: '📚',
    color: 'blue',
    levels: {
      easy: [
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
        },
        {
          id: 6,
          question: 'Which word is an adjective?',
          options: ['Apple', 'Run', 'Blue', 'Quickly'],
          correctAnswer: 2,
          explanation: 'Blue describes a noun, so it is an adjective.'
        },
        {
          id: 7,
          question: 'Which word is a pronoun?',
          options: ['She', 'Jump', 'House', 'Happy'],
          correctAnswer: 0,
          explanation: 'She is a pronoun that can replace a name.'
        },
        {
          id: 8,
          question: 'What is the plural of "child"?',
          options: ['Childs', 'Children', 'Childes', 'Childrens'],
          correctAnswer: 1,
          explanation: 'Children is the correct plural of child.'
        },
        {
          id: 9,
          question: 'Which word completes the sentence: "I ____ to the park."',
          options: ['go', 'goes', 'going', 'gone'],
          correctAnswer: 0,
          explanation: 'With "I", we use "go".'
        },
        {
          id: 10,
          question: 'Which punctuation mark ends a question?',
          options: ['.', '!', '?', ','],
          correctAnswer: 2,
          explanation: 'Questions end with a question mark.'
        },
        {
          id: 11,
          question: 'Which word is a synonym for "fast"?',
          options: ['Quick', 'Slow', 'Late', 'Quiet'],
          correctAnswer: 0,
          explanation: 'Quick means the same as fast.'
        },
        {
          id: 12,
          question: 'Which word is an antonym for "hot"?',
          options: ['Warm', 'Cold', 'Boiling', 'Sunny'],
          correctAnswer: 1,
          explanation: 'Cold is the opposite of hot.'
        },
        {
          id: 13,
          question: 'Which sentence is written correctly?',
          options: ['the dog barked.', 'The dog barked.', 'the Dog barked.', 'The dog Barked.'],
          correctAnswer: 1,
          explanation: 'Sentences start with a capital letter.'
        },
        {
          id: 14,
          question: 'Which word is a verb?',
          options: ['Sleep', 'Pillow', 'Blue', 'Tall'],
          correctAnswer: 0,
          explanation: 'Sleep is an action word, so it is a verb.'
        },
        {
          id: 15,
          question: 'What rhymes with "tree"?',
          options: ['Car', 'Bee', 'Shoe', 'Star'],
          correctAnswer: 1,
          explanation: 'Bee rhymes with tree.'
        }
      ],
      medium: [
        {
          id: 1,
          question: 'Which word is the adjective in "The tall tree swayed"?',
          options: ['tall', 'tree', 'swayed', 'the'],
          correctAnswer: 0,
          explanation: 'Tall describes the tree.'
        },
        {
          id: 2,
          question: 'What is the contraction for "do not"?',
          options: ["don't", "doesn't", "didn't", "do'nt"],
          correctAnswer: 0,
          explanation: '"Do not" becomes "don\'t".'
        },
        {
          id: 3,
          question: 'Which word is a preposition?',
          options: ['under', 'quickly', 'happy', 'jump'],
          correctAnswer: 0,
          explanation: 'Under shows position, so it is a preposition.'
        },
        {
          id: 4,
          question: 'Which punctuation mark ends a statement?',
          options: ['.', '!', '?', ','],
          correctAnswer: 0,
          explanation: 'Statements end with a period.'
        },
        {
          id: 5,
          question: 'Choose the correct verb: "They ____ to school."',
          options: ['walk', 'walks', 'walking', 'walked'],
          correctAnswer: 0,
          explanation: 'With "they", we use "walk".'
        },
        {
          id: 6,
          question: 'Which word is a synonym for "begin"?',
          options: ['start', 'end', 'stop', 'sleep'],
          correctAnswer: 0,
          explanation: 'Start means the same as begin.'
        },
        {
          id: 7,
          question: 'Which word is an antonym for "bright"?',
          options: ['shiny', 'dull', 'light', 'glow'],
          correctAnswer: 1,
          explanation: 'Dull is the opposite of bright.'
        },
        {
          id: 8,
          question: 'Which word is a compound word?',
          options: ['toothbrush', 'brush', 'tooth', 'teeth'],
          correctAnswer: 0,
          explanation: 'Toothbrush combines two words into one.'
        },
        {
          id: 9,
          question: 'Which sentence uses correct capitalization?',
          options: ['we visited New York.', 'We visited new york.', 'We visited New York.', 'we visited new York.'],
          correctAnswer: 2,
          explanation: 'Proper nouns like New York are capitalized.'
        },
        {
          id: 10,
          question: 'Which word is an adverb?',
          options: ['slowly', 'slow', 'slowness', 'slower'],
          correctAnswer: 0,
          explanation: 'Slowly describes how something happens.'
        }
      ],
      hard: [
        {
          id: 1,
          question: 'What is the subject in "The puppy chased the ball"?',
          options: ['The puppy', 'chased', 'ball', 'the'],
          correctAnswer: 0,
          explanation: 'The subject is who does the action.'
        },
        {
          id: 2,
          question: 'What is the past tense of "go"?',
          options: ['goed', 'gone', 'went', 'goes'],
          correctAnswer: 2,
          explanation: 'The past tense of go is went.'
        },
        {
          id: 3,
          question: 'Which word has a prefix meaning "not"?',
          options: ['unhappy', 'happily', 'happiness', 'happy'],
          correctAnswer: 0,
          explanation: 'The prefix "un-" means "not".'
        },
        {
          id: 4,
          question: 'Choose the correct word: "___ going to the park."',
          options: ["They're", 'Their', 'There', 'Them'],
          correctAnswer: 0,
          explanation: '"They\'re" means "they are".'
        },
        {
          id: 5,
          question: 'Which sentence is a question?',
          options: ['Please close the door.', 'Can you help me?', 'We are reading.', 'The dog barked.'],
          correctAnswer: 1,
          explanation: 'Questions ask something and end with a question mark.'
        },
        {
          id: 6,
          question: 'Which word is a verb in "Birds fly high"?',
          options: ['Birds', 'fly', 'high', 'the'],
          correctAnswer: 1,
          explanation: 'Fly is the action word.'
        },
        {
          id: 7,
          question: 'Which word uses the suffix "-ful"?',
          options: ['helpful', 'help', 'helping', 'helps'],
          correctAnswer: 0,
          explanation: 'The suffix "-ful" means "full of".'
        },
        {
          id: 8,
          question: 'Choose the correct pronoun: "___ are going to the library."',
          options: ['We', 'Us', 'Me', 'Them'],
          correctAnswer: 0,
          explanation: 'We is the correct subject pronoun here.'
        },
        {
          id: 9,
          question: 'Which is a complete sentence?',
          options: ['Because it rained.', 'We stayed inside because it rained.', 'After the game.', 'Running fast.'],
          correctAnswer: 1,
          explanation: 'A complete sentence has a subject and a verb.'
        },
        {
          id: 10,
          question: 'Which word is a synonym for "quiet"?',
          options: ['silent', 'loud', 'noisy', 'busy'],
          correctAnswer: 0,
          explanation: 'Silent means the same as quiet.'
        }
      ]
    }
  },
  {
    id: 'science',
    title: 'Science',
    emoji: '🔬',
    color: 'orange',
    levels: {
      easy: [
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
        },
        {
          id: 6,
          question: 'What do humans breathe in to live?',
          options: ['Oxygen', 'Carbon dioxide', 'Water', 'Sand'],
          correctAnswer: 0,
          explanation: 'We need oxygen to breathe.'
        },
        {
          id: 7,
          question: 'Which season comes after spring?',
          options: ['Winter', 'Summer', 'Fall', 'Night'],
          correctAnswer: 1,
          explanation: 'Summer comes after spring.'
        },
        {
          id: 8,
          question: 'What is the solid form of water called?',
          options: ['Ice', 'Steam', 'Rain', 'Fog'],
          correctAnswer: 0,
          explanation: 'Water turns into ice when it freezes.'
        },
        {
          id: 9,
          question: 'Which animal is a mammal?',
          options: ['Frog', 'Shark', 'Dolphin', 'Eagle'],
          correctAnswer: 2,
          explanation: 'Dolphins are mammals.'
        },
        {
          id: 10,
          question: 'What force pulls things toward Earth?',
          options: ['Magnetism', 'Gravity', 'Wind', 'Light'],
          correctAnswer: 1,
          explanation: 'Gravity pulls objects toward Earth.'
        },
        {
          id: 11,
          question: 'How many planets are in our solar system?',
          options: ['7', '8', '9', '10'],
          correctAnswer: 1,
          explanation: 'There are 8 planets in our solar system.'
        },
        {
          id: 12,
          question: 'What do bees make?',
          options: ['Milk', 'Honey', 'Bread', 'Juice'],
          correctAnswer: 1,
          explanation: 'Bees make honey.'
        },
        {
          id: 13,
          question: 'Which part of a plant is usually underground?',
          options: ['Flower', 'Leaf', 'Root', 'Stem'],
          correctAnswer: 2,
          explanation: 'Roots grow underground.'
        },
        {
          id: 14,
          question: 'What do we use our ears for?',
          options: ['Seeing', 'Smelling', 'Hearing', 'Tasting'],
          correctAnswer: 2,
          explanation: 'Ears help us hear sounds.'
        },
        {
          id: 15,
          question: 'Which item is recyclable?',
          options: ['Paper', 'Used tissue', 'Food scraps', 'Dirt'],
          correctAnswer: 0,
          explanation: 'Paper can be recycled.'
        }
      ],
      medium: [
        {
          id: 1,
          question: 'Which gas do plants release during photosynthesis?',
          options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Helium'],
          correctAnswer: 0,
          explanation: 'Plants release oxygen during photosynthesis.'
        },
        {
          id: 2,
          question: "What is Earth's movement around the Sun called?",
          options: ['Rotation', 'Revolution', 'Reflection', 'Vibration'],
          correctAnswer: 1,
          explanation: 'Earth revolves around the Sun.'
        },
        {
          id: 3,
          question: 'Which organ pumps blood through the body?',
          options: ['Lungs', 'Heart', 'Stomach', 'Brain'],
          correctAnswer: 1,
          explanation: 'The heart pumps blood.'
        },
        {
          id: 4,
          question: 'Which material is attracted to a magnet?',
          options: ['Plastic', 'Wood', 'Iron', 'Glass'],
          correctAnswer: 2,
          explanation: 'Iron is magnetic.'
        },
        {
          id: 5,
          question: 'What is the process called when liquid turns into gas?',
          options: ['Melting', 'Freezing', 'Evaporation', 'Condensation'],
          correctAnswer: 2,
          explanation: 'Evaporation turns liquid into gas.'
        },
        {
          id: 6,
          question: 'Which landform is a large body of water surrounded by land?',
          options: ['Ocean', 'Lake', 'River', 'Pond'],
          correctAnswer: 1,
          explanation: 'A lake is surrounded by land.'
        },
        {
          id: 7,
          question: 'What do we call animals that eat both plants and animals?',
          options: ['Herbivores', 'Carnivores', 'Omnivores', 'Insects'],
          correctAnswer: 2,
          explanation: 'Omnivores eat both plants and animals.'
        },
        {
          id: 8,
          question: 'Which planet is known as the Red Planet?',
          options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
          correctAnswer: 1,
          explanation: 'Mars is called the Red Planet.'
        },
        {
          id: 9,
          question: 'What tool measures temperature?',
          options: ['Barometer', 'Thermometer', 'Ruler', 'Scale'],
          correctAnswer: 1,
          explanation: 'A thermometer measures temperature.'
        },
        {
          id: 10,
          question: 'What part of the plant makes food?',
          options: ['Roots', 'Stem', 'Leaves', 'Seeds'],
          correctAnswer: 2,
          explanation: 'Leaves make food using sunlight.'
        }
      ],
      hard: [
        {
          id: 1,
          question: 'What force keeps planets in orbit around the Sun?',
          options: ['Magnetism', 'Gravity', 'Friction', 'Electricity'],
          correctAnswer: 1,
          explanation: 'Gravity keeps planets in orbit.'
        },
        {
          id: 2,
          question: 'What are the three main states of matter?',
          options: ['Solid, liquid, gas', 'Solid, wet, dry', 'Hot, cold, warm', 'Light, sound, heat'],
          correctAnswer: 0,
          explanation: 'Matter exists as solids, liquids, and gases.'
        },
        {
          id: 3,
          question: 'Which part of a plant makes seeds?',
          options: ['Root', 'Flower', 'Leaf', 'Stem'],
          correctAnswer: 1,
          explanation: 'Flowers make seeds.'
        },
        {
          id: 4,
          question: 'What is the largest planet in our solar system?',
          options: ['Earth', 'Mars', 'Jupiter', 'Neptune'],
          correctAnswer: 2,
          explanation: 'Jupiter is the largest planet.'
        },
        {
          id: 5,
          question: 'Which organ helps us breathe by taking in oxygen?',
          options: ['Heart', 'Lungs', 'Stomach', 'Kidneys'],
          correctAnswer: 1,
          explanation: 'The lungs take in oxygen.'
        },
        {
          id: 6,
          question: 'What type of rock is formed from cooled lava?',
          options: ['Igneous', 'Sedimentary', 'Metamorphic', 'Fossil'],
          correctAnswer: 0,
          explanation: 'Igneous rock forms from cooled lava.'
        },
        {
          id: 7,
          question: 'What is the main source of energy for Earth?',
          options: ['The Moon', 'The Sun', 'Batteries', 'Volcanoes'],
          correctAnswer: 1,
          explanation: 'The Sun provides most of Earth\'s energy.'
        },
        {
          id: 8,
          question: 'What do we call a scientist who studies weather?',
          options: ['Biologist', 'Geologist', 'Meteorologist', 'Astronaut'],
          correctAnswer: 2,
          explanation: 'Meteorologists study weather.'
        },
        {
          id: 9,
          question: 'Which simple machine is a ramp?',
          options: ['Pulley', 'Lever', 'Inclined plane', 'Wheel and axle'],
          correctAnswer: 2,
          explanation: 'A ramp is an inclined plane.'
        },
        {
          id: 10,
          question: 'Which part of the body controls thinking and memory?',
          options: ['Brain', 'Heart', 'Liver', 'Muscles'],
          correctAnswer: 0,
          explanation: 'The brain controls thinking and memory.'
        }
      ]
    }
  }
];
