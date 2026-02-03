import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';
import type { Question } from '@/data/quizData';
import { useSound } from '@/sound/SoundProvider';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuizQuestion = ({ question, onAnswer, questionNumber, totalQuestions }: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const { playCorrect, playWrong } = useSound();

  const handleSelect = (index: number) => {
    if (showResult) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    const isCorrect = index === question.correctAnswer;

    if (isCorrect) {
      playCorrect();
    } else {
      playWrong();
    }
    
    setTimeout(() => {
      onAnswer(isCorrect);
      setSelectedAnswer(null);
      setShowResult(false);
    }, 1500);
  };

  const getOptionClass = (index: number) => {
    if (!showResult) {
      return 'bg-card hover:bg-muted border-2 border-border hover:border-primary';
    }
    
    if (index === question.correctAnswer) {
      return 'bg-kid-green text-primary-foreground border-2 border-kid-green';
    }
    
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return 'bg-destructive text-destructive-foreground border-2 border-destructive';
    }
    
    return 'bg-muted border-2 border-border opacity-50';
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="w-full max-w-2xl mx-auto px-4"
    >
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Question {questionNumber} of {totalQuestions}</span>
          <span>{Math.round((questionNumber / totalQuestions) * 100)}%</span>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
            className="h-full bg-primary rounded-full"
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question */}
      <motion.div
        className="bg-card rounded-3xl p-6 md:p-8 shadow-kid mb-6"
        layoutId="question-card"
      >
        <h2 className="text-xl md:text-2xl font-bold text-center text-card-foreground">
          {question.question}
        </h2>
      </motion.div>

      {/* Options */}
      <div className="grid gap-3 md:gap-4">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            onClick={() => handleSelect(index)}
            disabled={showResult}
            className={`${getOptionClass(index)} p-4 md:p-5 rounded-2xl text-left font-semibold text-base md:text-lg transition-all duration-300 flex items-center justify-between`}
            whileHover={!showResult ? { scale: 1.02 } : {}}
            whileTap={!showResult ? { scale: 0.98 } : {}}
          >
            <span>{option}</span>
            <AnimatePresence>
              {showResult && index === question.correctAnswer && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center"
                >
                  <Check className="w-5 h-5" />
                </motion.div>
              )}
              {showResult && index === selectedAnswer && index !== question.correctAnswer && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-8 h-8 rounded-full bg-destructive-foreground/20 flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        ))}
      </div>

      {/* Explanation */}
      <AnimatePresence>
        {showResult && question.explanation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-4 p-4 bg-muted rounded-2xl text-center"
          >
            <p className="text-muted-foreground font-medium">{question.explanation}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QuizQuestion;
