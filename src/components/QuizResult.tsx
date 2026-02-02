import { motion } from 'framer-motion';
import { Trophy, Star, RotateCcw, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface QuizResultProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  onHome: () => void;
}

const QuizResult = ({ score, totalQuestions, onRestart, onHome }: QuizResultProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getMessage = () => {
    if (percentage === 100) return { text: "Perfect! You're a genius! 🎉", emoji: "🏆" };
    if (percentage >= 80) return { text: "Amazing job! Keep it up! 🌟", emoji: "⭐" };
    if (percentage >= 60) return { text: "Good work! You're learning! 📚", emoji: "👍" };
    if (percentage >= 40) return { text: "Nice try! Practice makes perfect! 💪", emoji: "🎯" };
    return { text: "Keep practicing, you'll get better! 🌈", emoji: "🤗" };
  };

  const result = getMessage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="w-full max-w-md mx-auto px-4 text-center"
    >
      {/* Trophy Animation */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="mb-6"
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-7xl md:text-8xl"
        >
          {result.emoji}
        </motion.div>
      </motion.div>

      {/* Score Card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-card rounded-3xl p-8 shadow-kid-lg mb-6"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-card-foreground mb-4">
          Quiz Complete!
        </h2>
        
        {/* Score Circle */}
        <div className="relative w-32 h-32 mx-auto mb-6">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              className="stroke-muted"
              strokeWidth="12"
              fill="none"
            />
            <motion.circle
              cx="64"
              cy="64"
              r="56"
              className="stroke-primary"
              strokeWidth="12"
              fill="none"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 352" }}
              animate={{ strokeDasharray: `${(percentage / 100) * 352} 352` }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-3xl font-bold text-card-foreground"
            >
              {percentage}%
            </motion.span>
          </div>
        </div>

        <p className="text-lg text-muted-foreground mb-2">
          You got <span className="font-bold text-primary">{score}</span> out of{' '}
          <span className="font-bold">{totalQuestions}</span> correct!
        </p>
        
        <p className="text-xl font-semibold text-card-foreground">
          {result.text}
        </p>

        {/* Stars */}
        <div className="flex justify-center gap-2 mt-4">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
            >
              <Star
                className={`w-8 h-8 ${
                  i < Math.ceil(percentage / 20)
                    ? 'fill-kid-yellow text-kid-yellow'
                    : 'text-muted'
                }`}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col sm:flex-row gap-3 justify-center"
      >
        <Button
          onClick={onRestart}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-2xl font-bold text-lg px-8"
        >
          <RotateCcw className="w-5 h-5 mr-2" />
          Try Again
        </Button>
        <Button
          onClick={onHome}
          variant="outline"
          size="lg"
          className="rounded-2xl font-bold text-lg px-8 border-2"
        >
          <Home className="w-5 h-5 mr-2" />
          Home
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default QuizResult;
