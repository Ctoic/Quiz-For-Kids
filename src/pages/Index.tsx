import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import SubjectCard from '@/components/SubjectCard';
import { difficultyMeta, quizzes, type Difficulty } from '@/data/quizData';
import { useSound } from '@/sound/SoundProvider';

const Index = () => {
  const navigate = useNavigate();
  const { muted, toggleMute } = useSound();

  const handleSelectSubject = (subjectId: string, difficulty: Difficulty) => {
    navigate(`/quiz/${subjectId}/${difficulty}`);
  };

  const difficultyOrder: Difficulty[] = ['easy', 'medium', 'hard'];
  const difficultyEmoji: Record<Difficulty, string> = {
    easy: '😊',
    medium: '⚡',
    hard: '🔥'
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header soundEnabled={!muted} onToggleSound={toggleMute} />
      
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl md:text-7xl mb-4"
          >
            🧠
          </motion.div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-kid-green via-kid-blue to-kid-orange bg-clip-text text-transparent">
              KidQuiz!
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto">
            Learn while having fun! Pick a difficulty and a subject to start.
          </p>
        </motion.div>

        {/* Difficulty Sections */}
        <div className="space-y-10 md:space-y-14">
          {difficultyOrder.map((difficulty, sectionIndex) => (
            <section key={difficulty}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + sectionIndex * 0.1 }}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 md:mb-6"
              >
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                    {difficultyMeta[difficulty].title}
                  </h2>
                  <p className="text-muted-foreground">
                    {difficultyMeta[difficulty].description}
                  </p>
                </div>
                <div className="text-3xl md:text-4xl">{difficultyEmoji[difficulty]}</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + sectionIndex * 0.1 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto"
              >
                {quizzes.map((quiz, index) => (
                  <motion.div
                    key={`${difficulty}-${quiz.id}`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + sectionIndex * 0.1 + index * 0.1 }}
                  >
                    <SubjectCard
                      title={quiz.title}
                      emoji={quiz.emoji}
                      color={quiz.color}
                      questionsCount={quiz.levels[difficulty].length}
                      onClick={() => handleSelectSubject(quiz.id, difficulty)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </section>
          ))}
        </div>

        {/* Fun Facts Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <div className="bg-card rounded-3xl p-6 md:p-8 shadow-kid max-w-2xl mx-auto">
            <h2 className="text-xl md:text-2xl font-bold text-card-foreground mb-4 flex items-center justify-center gap-2">
              <span>💡</span>
              Did You Know?
            </h2>
            <p className="text-muted-foreground">
              Your brain is like a muscle - the more you use it, the stronger it gets! 
              Taking quizzes helps your brain remember things better.
            </p>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>Made with ❤️ for curious kids everywhere</p>
      </footer>
    </div>
  );
};

export default Index;
