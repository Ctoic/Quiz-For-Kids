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
          question: 'What is 18 + 27?',
          options: ['35', '45', '46', '55'],
          correctAnswer: 1,
          explanation: '18 plus 27 equals 45.'
        },
        {
          id: 2,
          question: 'What is 52 - 19?',
          options: ['31', '33', '35', '39'],
          correctAnswer: 1,
          explanation: '52 minus 19 equals 33.'
        },
        {
          id: 3,
          question: 'What is 6 × 7?',
          options: ['36', '40', '42', '48'],
          correctAnswer: 2,
          explanation: '6 times 7 equals 42.'
        },
        {
          id: 4,
          question: 'What is 72 ÷ 8?',
          options: ['8', '9', '10', '12'],
          correctAnswer: 1,
          explanation: '72 divided by 8 equals 9.'
        },
        {
          id: 5,
          question: 'What is 15 + 9 - 6?',
          options: ['16', '18', '19', '20'],
          correctAnswer: 1,
          explanation: '15 + 9 = 24, and 24 - 6 = 18.'
        },
        {
          id: 6,
          question: 'Which number is a multiple of 4?',
          options: ['14', '16', '18', '22'],
          correctAnswer: 1,
          explanation: '16 is divisible by 4.'
        },
        {
          id: 7,
          question: 'What is 3/4 of 20?',
          options: ['10', '12', '15', '18'],
          correctAnswer: 2,
          explanation: '1/4 of 20 is 5, so 3/4 is 15.'
        },
        {
          id: 8,
          question: 'What is 100 - 37?',
          options: ['63', '67', '73', '83'],
          correctAnswer: 0,
          explanation: '100 minus 37 equals 63.'
        },
        {
          id: 9,
          question: 'What is 9 × 6?',
          options: ['45', '54', '56', '64'],
          correctAnswer: 1,
          explanation: '9 times 6 equals 54.'
        },
        {
          id: 10,
          question: 'What is 56 ÷ 7?',
          options: ['6', '7', '8', '9'],
          correctAnswer: 2,
          explanation: '56 divided by 7 equals 8.'
        },
        {
          id: 11,
          question: 'Which fraction is greater than 1/2?',
          options: ['1/3', '2/5', '3/5', '1/4'],
          correctAnswer: 2,
          explanation: '3/5 is greater than 1/2.'
        },
        {
          id: 12,
          question: 'What is 25 × 3?',
          options: ['65', '70', '75', '80'],
          correctAnswer: 2,
          explanation: '25 times 3 equals 75.'
        },
        {
          id: 13,
          question: 'What is 84 ÷ 6?',
          options: ['12', '14', '16', '18'],
          correctAnswer: 1,
          explanation: '84 divided by 6 equals 14.'
        },
        {
          id: 14,
          question: 'What number makes 9 + __ = 17?',
          options: ['7', '8', '9', '10'],
          correctAnswer: 1,
          explanation: '9 plus 8 equals 17.'
        },
        {
          id: 15,
          question: 'What is 12 × 5?',
          options: ['50', '55', '60', '65'],
          correctAnswer: 2,
          explanation: '12 times 5 equals 60.'
        }
      ],
      medium: [
        {
          id: 1,
          question: 'What is 48 + 36?',
          options: ['82', '83', '84', '86'],
          correctAnswer: 2,
          explanation: '48 plus 36 equals 84.'
        },
        {
          id: 2,
          question: 'What is 120 - 58?',
          options: ['60', '62', '64', '68'],
          correctAnswer: 1,
          explanation: '120 minus 58 equals 62.'
        },
        {
          id: 3,
          question: 'What is 14 × 6?',
          options: ['72', '80', '84', '90'],
          correctAnswer: 2,
          explanation: '14 times 6 equals 84.'
        },
        {
          id: 4,
          question: 'What is 144 ÷ 12?',
          options: ['10', '11', '12', '14'],
          correctAnswer: 2,
          explanation: '144 divided by 12 equals 12.'
        },
        {
          id: 5,
          question: 'What is 3/5 of 40?',
          options: ['18', '20', '24', '28'],
          correctAnswer: 2,
          explanation: '1/5 of 40 is 8, so 3/5 is 24.'
        },
        {
          id: 6,
          question: 'What is 2.5 + 3.7?',
          options: ['5.2', '6.2', '6.3', '7.2'],
          correctAnswer: 1,
          explanation: '2.5 plus 3.7 equals 6.2.'
        },
        {
          id: 7,
          question: 'What is 8 × (7 - 3)?',
          options: ['28', '30', '32', '36'],
          correctAnswer: 2,
          explanation: '7 - 3 = 4, and 8 × 4 = 32.'
        },
        {
          id: 8,
          question: 'What is 3 groups of 12 plus 5?',
          options: ['39', '40', '41', '42'],
          correctAnswer: 2,
          explanation: '3 × 12 = 36, and 36 + 5 = 41.'
        },
        {
          id: 9,
          question: 'Which fraction is equal to 25%?',
          options: ['1/5', '1/4', '1/3', '1/2'],
          correctAnswer: 1,
          explanation: '25% is the same as 1/4.'
        },
        {
          id: 10,
          question: 'A rectangle is 8 units by 5 units. What is its area?',
          options: ['26', '30', '40', '45'],
          correctAnswer: 2,
          explanation: 'Area = 8 × 5 = 40.'
        }
      ],
      hard: [
        {
          id: 1,
          question: 'What is 275 - 138?',
          options: ['127', '137', '147', '157'],
          correctAnswer: 1,
          explanation: '275 minus 138 equals 137.'
        },
        {
          id: 2,
          question: 'What is 24 × 18?',
          options: ['384', '416', '432', '448'],
          correctAnswer: 2,
          explanation: '24 times 18 equals 432.'
        },
        {
          id: 3,
          question: 'What is 360 ÷ 15?',
          options: ['20', '22', '24', '26'],
          correctAnswer: 2,
          explanation: '360 divided by 15 equals 24.'
        },
        {
          id: 4,
          question: 'What is 4/5 of 75?',
          options: ['55', '60', '65', '70'],
          correctAnswer: 1,
          explanation: '1/5 of 75 is 15, so 4/5 is 60.'
        },
        {
          id: 5,
          question: 'What is the perimeter of a rectangle 12 by 7?',
          options: ['31', '34', '38', '40'],
          correctAnswer: 2,
          explanation: 'Perimeter = 2 × (12 + 7) = 38.'
        },
        {
          id: 6,
          question: 'What is 9 × 8 + 6?',
          options: ['76', '78', '80', '84'],
          correctAnswer: 1,
          explanation: '9 × 8 = 72, and 72 + 6 = 78.'
        },
        {
          id: 7,
          question: 'What is 18 - (3 × 4)?',
          options: ['6', '8', '10', '12'],
          correctAnswer: 0,
          explanation: '3 × 4 = 12, and 18 - 12 = 6.'
        },
        {
          id: 8,
          question: 'A train travels 45 km per hour for 2 hours. How far does it go?',
          options: ['80', '90', '95', '100'],
          correctAnswer: 1,
          explanation: 'Distance = 45 × 2 = 90 km.'
        },
        {
          id: 9,
          question: 'Which number is prime?',
          options: ['21', '29', '33', '39'],
          correctAnswer: 1,
          explanation: '29 has only two factors: 1 and 29.'
        },
        {
          id: 10,
          question: 'Solve for x: 2x + 7 = 23',
          options: ['6', '7', '8', '9'],
          correctAnswer: 2,
          explanation: '2x = 16, so x = 8.'
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
          question: 'Which word is a verb?',
          options: ['swim', 'purple', 'slow', 'pencil'],
          correctAnswer: 0,
          explanation: 'Swim is an action word.'
        },
        {
          id: 2,
          question: 'What is the plural of "baby"?',
          options: ['babys', 'babies', 'babyes', "baby's"],
          correctAnswer: 1,
          explanation: 'Change y to ies: babies.'
        },
        {
          id: 3,
          question: 'Which sentence is punctuated correctly?',
          options: [
            'I like apples bananas and grapes.',
            'I like apples, bananas, and grapes.',
            'I like apples, bananas and grapes',
            'I like apples; bananas; and grapes.'
          ],
          correctAnswer: 1,
          explanation: 'Commas separate items in a list.'
        },
        {
          id: 4,
          question: 'What is the antonym of "ancient"?',
          options: ['old', 'modern', 'past', 'historic'],
          correctAnswer: 1,
          explanation: 'Modern means the opposite of ancient.'
        },
        {
          id: 5,
          question: 'Which word is a pronoun?',
          options: ['they', 'jump', 'table', 'beautiful'],
          correctAnswer: 0,
          explanation: 'They is a pronoun.'
        },
        {
          id: 6,
          question: 'Which word is an adverb?',
          options: ['quickly', 'quick', 'quickness', 'quicker'],
          correctAnswer: 0,
          explanation: 'Quickly tells how something happens.'
        },
        {
          id: 7,
          question: 'Which word has a prefix meaning "again"?',
          options: ['rewrite', 'preheat', 'dislike', 'unfair'],
          correctAnswer: 0,
          explanation: 'The prefix re- means again.'
        },
        {
          id: 8,
          question: 'What is the contraction for "she is"?',
          options: ['shes', "she's", 'shis', 'she is'],
          correctAnswer: 1,
          explanation: 'She is becomes she\'s.'
        },
        {
          id: 9,
          question: 'Which word is a synonym for "tiny"?',
          options: ['small', 'huge', 'tall', 'wide'],
          correctAnswer: 0,
          explanation: 'Small means the same as tiny.'
        },
        {
          id: 10,
          question: 'Which sentence uses "their" correctly?',
          options: ['There going home.', 'Their dog is friendly.', "They're house is big.", 'Them toys are new.'],
          correctAnswer: 1,
          explanation: 'Their shows possession.'
        },
        {
          id: 11,
          question: 'What is the comparative form of "happy"?',
          options: ['happyer', 'happiest', 'happier', 'happyest'],
          correctAnswer: 2,
          explanation: 'Happier compares two things.'
        },
        {
          id: 12,
          question: 'Which word is a noun?',
          options: ['teacher', 'run', 'softly', 'blue'],
          correctAnswer: 0,
          explanation: 'Teacher names a person.'
        },
        {
          id: 13,
          question: 'Which is a proper noun?',
          options: ['city', 'river', 'London', 'country'],
          correctAnswer: 2,
          explanation: 'London is a specific place name.'
        },
        {
          id: 14,
          question: 'Choose the correct verb: "He ___ to school every day."',
          options: ['walk', 'walks', 'walking', 'walked'],
          correctAnswer: 1,
          explanation: 'He walks is correct for present tense.'
        },
        {
          id: 15,
          question: 'Which sentence is a question?',
          options: ['Close the door.', 'Are you ready?', 'We are ready.', 'I like pizza.'],
          correctAnswer: 1,
          explanation: 'Questions end with a question mark.'
        }
      ],
      medium: [
        {
          id: 1,
          question: 'What is the subject in "The noisy puppies chased the ball"?',
          options: ['The noisy puppies', 'chased', 'the ball', 'noisy'],
          correctAnswer: 0,
          explanation: 'The subject is who does the action.'
        },
        {
          id: 2,
          question: 'Which sentence uses commas correctly?',
          options: [
            'We bought bread, milk and, eggs.',
            'We bought bread, milk, and eggs.',
            'We bought, bread milk and eggs.',
            'We bought bread milk, and eggs.'
          ],
          correctAnswer: 1,
          explanation: 'Use commas to separate items in a list.'
        },
        {
          id: 3,
          question: 'Choose the correct homophone: "I can ___ the music."',
          options: ['hear', 'here', 'hare', 'heer'],
          correctAnswer: 0,
          explanation: 'Hear means to listen.'
        },
        {
          id: 4,
          question: 'Which word is a conjunction?',
          options: ['because', 'tall', 'quickly', 'under'],
          correctAnswer: 0,
          explanation: 'Because connects ideas.'
        },
        {
          id: 5,
          question: 'Which sentence is in past tense?',
          options: [
            'She walks to school.',
            'She walked to school.',
            'She is walking to school.',
            'She will walk to school.'
          ],
          correctAnswer: 1,
          explanation: 'Walked is the past tense form.'
        },
        {
          id: 6,
          question: 'Choose the correct possessive: "The ___ tail wagged."',
          options: ["dog's", 'dogs', "dogs'", 'doges'],
          correctAnswer: 0,
          explanation: 'Dog\'s shows one dog owns the tail.'
        },
        {
          id: 7,
          question: 'Which word is a preposition?',
          options: ['between', 'eating', 'green', 'quietly'],
          correctAnswer: 0,
          explanation: 'Between shows position.'
        },
        {
          id: 8,
          question: 'What does the prefix "sub-" mean?',
          options: ['under', 'after', 'not', 'before'],
          correctAnswer: 0,
          explanation: 'Sub- means under or below.'
        },
        {
          id: 9,
          question: 'Which sentence has correct subject-verb agreement?',
          options: ['The dogs runs fast.', 'The dogs run fast.', 'The dogs running fast.', 'The dogs ran fasts.'],
          correctAnswer: 1,
          explanation: 'Plural subject needs plural verb: run.'
        },
        {
          id: 10,
          question: 'Choose the correct word: "We have ___ apples than yesterday."',
          options: ['few', 'fewer', 'less', 'fewest'],
          correctAnswer: 1,
          explanation: 'Fewer is used with countable nouns.'
        }
      ],
      hard: [
        {
          id: 1,
          question: 'Which part is the dependent clause? "Because it was raining, we stayed inside."',
          options: ['Because it was raining', 'we stayed inside', 'inside', 'raining'],
          correctAnswer: 0,
          explanation: 'The dependent clause cannot stand alone.'
        },
        {
          id: 2,
          question: 'Which sentence uses a semicolon correctly?',
          options: [
            'I finished my homework; then I watched TV.',
            'I finished my homework; and I watched TV.',
            'I finished my homework; because I watched TV.',
            'I finished my homework; but.'
          ],
          correctAnswer: 0,
          explanation: 'A semicolon joins two related complete sentences.'
        },
        {
          id: 3,
          question: 'Which word is NOT an adverb?',
          options: ['softly', 'politely', 'quickly', 'spoke'],
          correctAnswer: 3,
          explanation: 'Spoke is a verb, not an adverb.'
        },
        {
          id: 4,
          question: 'Which sentence uses quotation marks correctly?',
          options: [
            'She said, "I am ready."',
            'She said, "I am ready".',
            'She said, "I am ready"',
            'She said, I am ready.'
          ],
          correctAnswer: 0,
          explanation: 'The period goes inside the quotation marks.'
        },
        {
          id: 5,
          question: 'Choose the correct verb: "Neither of the answers ___ correct."',
          options: ['are', 'is', 'were', 'be'],
          correctAnswer: 1,
          explanation: 'Neither is singular, so use is.'
        },
        {
          id: 6,
          question: 'The classroom was a zoo. This is an example of:',
          options: ['simile', 'metaphor', 'personification', 'alliteration'],
          correctAnswer: 1,
          explanation: 'It compares two things without using like or as.'
        },
        {
          id: 7,
          question: 'Which sentence is in passive voice?',
          options: [
            'The cat chased the mouse.',
            'The mouse was chased by the cat.',
            'The cat is chasing the mouse.',
            'The mouse chased the cat.'
          ],
          correctAnswer: 1,
          explanation: 'Passive voice uses was/were plus a past participle.'
        },
        {
          id: 8,
          question: 'Choose the correct word: "___ raining, so bring a coat."',
          options: ['Its', "It's", "Its'", 'Its is'],
          correctAnswer: 1,
          explanation: "It's means it is."
        },
        {
          id: 9,
          question: 'Hot is to cold as day is to ___.',
          options: ['night', 'light', 'sun', 'bright'],
          correctAnswer: 0,
          explanation: 'Day and night are opposites.'
        },
        {
          id: 10,
          question: 'Which sentence uses a relative pronoun correctly?',
          options: [
            'The book that I borrowed is exciting.',
            'The book I borrowed is exciting, that.',
            'The book which I borrowed it is exciting.',
            'The book, that I borrowed, exciting.'
          ],
          correctAnswer: 0,
          explanation: 'That correctly connects the clause.'
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
          question: 'What do we call the change from liquid water to water vapor?',
          options: ['Condensation', 'Evaporation', 'Freezing', 'Melting'],
          correctAnswer: 1,
          explanation: 'Evaporation turns liquid into gas.'
        },
        {
          id: 2,
          question: 'Which planet is famous for its rings?',
          options: ['Mercury', 'Mars', 'Saturn', 'Venus'],
          correctAnswer: 2,
          explanation: 'Saturn has very large rings.'
        },
        {
          id: 3,
          question: 'Which organ pumps blood through the body?',
          options: ['Lungs', 'Heart', 'Liver', 'Stomach'],
          correctAnswer: 1,
          explanation: 'The heart pumps blood.'
        },
        {
          id: 4,
          question: 'What do we call animals that eat only plants?',
          options: ['Carnivores', 'Herbivores', 'Omnivores', 'Decomposers'],
          correctAnswer: 1,
          explanation: 'Herbivores eat plants.'
        },
        {
          id: 5,
          question: 'Which gas do humans breathe in?',
          options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Helium'],
          correctAnswer: 0,
          explanation: 'We need oxygen to live.'
        },
        {
          id: 6,
          question: 'What is the hardest natural substance?',
          options: ['Gold', 'Diamond', 'Iron', 'Glass'],
          correctAnswer: 1,
          explanation: 'Diamond is the hardest natural material.'
        },
        {
          id: 7,
          question: 'Which part of a plant makes food?',
          options: ['Roots', 'Stem', 'Leaves', 'Seeds'],
          correctAnswer: 2,
          explanation: 'Leaves make food using sunlight.'
        },
        {
          id: 8,
          question: 'What force keeps us on the ground?',
          options: ['Magnetism', 'Gravity', 'Friction', 'Electricity'],
          correctAnswer: 1,
          explanation: 'Gravity pulls objects toward Earth.'
        },
        {
          id: 9,
          question: 'Which state of matter has a definite shape?',
          options: ['Solid', 'Liquid', 'Gas', 'Plasma'],
          correctAnswer: 0,
          explanation: 'Solids keep their shape.'
        },
        {
          id: 10,
          question: 'What is the closest star to Earth?',
          options: ['Polaris', 'The Sun', 'Sirius', 'The Moon'],
          correctAnswer: 1,
          explanation: 'The Sun is the closest star.'
        },
        {
          id: 11,
          question: 'What do we call the path of a planet around the Sun?',
          options: ['Orbit', 'Rotation', 'Axis', 'Cycle'],
          correctAnswer: 0,
          explanation: 'An orbit is the path around another object.'
        },
        {
          id: 12,
          question: 'Which tool helps us see tiny objects?',
          options: ['Microscope', 'Telescope', 'Periscope', 'Thermometer'],
          correctAnswer: 0,
          explanation: 'A microscope makes small things look bigger.'
        },
        {
          id: 13,
          question: 'Which is a renewable energy source?',
          options: ['Wind', 'Coal', 'Oil', 'Natural gas'],
          correctAnswer: 0,
          explanation: 'Wind energy can be used again and again.'
        },
        {
          id: 14,
          question: "What is the most common gas in Earth's atmosphere?",
          options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
          correctAnswer: 1,
          explanation: 'Nitrogen makes up most of the air.'
        },
        {
          id: 15,
          question: 'Which planet is known as the Red Planet?',
          options: ['Earth', 'Mars', 'Jupiter', 'Neptune'],
          correctAnswer: 1,
          explanation: 'Mars looks red because of iron oxide.'
        }
      ],
      medium: [
        {
          id: 1,
          question: 'What process do plants use to make food?',
          options: ['Respiration', 'Photosynthesis', 'Digestion', 'Fermentation'],
          correctAnswer: 1,
          explanation: 'Plants make food using sunlight and carbon dioxide.'
        },
        {
          id: 2,
          question: "Earth's rotation causes:",
          options: ['Seasons', 'Day and night', 'Tides', 'Eclipses'],
          correctAnswer: 1,
          explanation: 'Rotation makes day and night.'
        },
        {
          id: 3,
          question: 'Which layer of Earth is the thickest?',
          options: ['Crust', 'Mantle', 'Outer core', 'Inner core'],
          correctAnswer: 1,
          explanation: 'The mantle is the thickest layer.'
        },
        {
          id: 4,
          question: 'What is the boiling point of water in Celsius?',
          options: ['0°C', '50°C', '100°C', '150°C'],
          correctAnswer: 2,
          explanation: 'Water boils at 100°C.'
        },
        {
          id: 5,
          question: 'Which type of rock forms from cooled magma or lava?',
          options: ['Igneous', 'Sedimentary', 'Metamorphic', 'Fossil'],
          correctAnswer: 0,
          explanation: 'Igneous rock forms from cooled magma or lava.'
        },
        {
          id: 6,
          question: 'What does a pulley help us do?',
          options: ['Measure temperature', 'Lift heavy objects more easily', 'Make electricity', 'See far away'],
          correctAnswer: 1,
          explanation: 'A pulley makes lifting easier.'
        },
        {
          id: 7,
          question: 'Which organ filters blood and makes urine?',
          options: ['Lungs', 'Kidneys', 'Liver', 'Stomach'],
          correctAnswer: 1,
          explanation: 'The kidneys filter blood.'
        },
        {
          id: 8,
          question: 'What is the change from solid to liquid called?',
          options: ['Freezing', 'Melting', 'Condensation', 'Evaporation'],
          correctAnswer: 1,
          explanation: 'Melting turns a solid into a liquid.'
        },
        {
          id: 9,
          question: 'Which planet is the largest in our solar system?',
          options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
          correctAnswer: 2,
          explanation: 'Jupiter is the largest planet.'
        },
        {
          id: 10,
          question: 'Which simple machine is a seesaw?',
          options: ['Lever', 'Pulley', 'Wheel and axle', 'Inclined plane'],
          correctAnswer: 0,
          explanation: 'A seesaw is a type of lever.'
        }
      ],
      hard: [
        {
          id: 1,
          question: 'Which part of a cell contains genetic material?',
          options: ['Nucleus', 'Cell wall', 'Cytoplasm', 'Mitochondria'],
          correctAnswer: 0,
          explanation: 'The nucleus holds DNA.'
        },
        {
          id: 2,
          question: 'What is the main job of red blood cells?',
          options: ['Fight germs', 'Carry oxygen', 'Digest food', 'Make bones'],
          correctAnswer: 1,
          explanation: 'Red blood cells carry oxygen.'
        },
        {
          id: 3,
          question: 'A lunar eclipse happens when:',
          options: [
            'The Moon is between Earth and the Sun',
            'Earth is between the Sun and the Moon',
            'The Sun is between Earth and the Moon',
            'The Moon blocks all sunlight forever'
          ],
          correctAnswer: 1,
          explanation: 'Earth blocks sunlight from reaching the Moon.'
        },
        {
          id: 4,
          question: 'Which gas is most responsible for the greenhouse effect?',
          options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Argon'],
          correctAnswer: 1,
          explanation: 'Carbon dioxide traps heat in the atmosphere.'
        },
        {
          id: 5,
          question: 'Water stored underground is called:',
          options: ['Runoff', 'Groundwater', 'Condensation', 'Sediment'],
          correctAnswer: 1,
          explanation: 'Groundwater is water beneath the surface.'
        },
        {
          id: 6,
          question: 'What causes ocean tides?',
          options: ['Earth\'s rotation', 'The Moon\'s gravity', 'Wind speed', 'Cloud cover'],
          correctAnswer: 1,
          explanation: 'The Moon\'s gravity pulls on ocean water.'
        },
        {
          id: 7,
          question: 'Which biome has the greatest biodiversity?',
          options: ['Tundra', 'Desert', 'Tropical rainforest', 'Grassland'],
          correctAnswer: 2,
          explanation: 'Tropical rainforests have many different species.'
        },
        {
          id: 8,
          question: 'What is the chemical symbol for sodium?',
          options: ['So', 'Na', 'Sn', 'S'],
          correctAnswer: 1,
          explanation: 'Na is the symbol for sodium.'
        },
        {
          id: 9,
          question: 'What is the pH of a neutral solution?',
          options: ['0', '7', '10', '14'],
          correctAnswer: 1,
          explanation: 'Neutral pH is 7.'
        },
        {
          id: 10,
          question: 'What do we call the change from gas to liquid?',
          options: ['Evaporation', 'Condensation', 'Sublimation', 'Freezing'],
          correctAnswer: 1,
          explanation: 'Condensation turns gas into liquid.'
        }
      ]
    }
  }
];
