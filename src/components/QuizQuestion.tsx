import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react';
import type { Question } from '@/data/quizData';
import { useSound } from '@/sound/SoundProvider';
import { Button } from '@/components/ui/button';

interface QuizQuestionProps {
  question: Question;
  onAnswer: (selectedIndex: number) => void;
  onBack?: () => void;
  canGoBack?: boolean;
  onNext?: () => void;
  canGoNext?: boolean;
  isLast?: boolean;
  lockedAnswer?: number | null;
  questionNumber: number;
  totalQuestions: number;
}

const QuizQuestion = ({
  question,
  onAnswer,
  onBack,
  canGoBack = false,
  onNext,
  canGoNext = false,
  isLast = false,
  lockedAnswer = null,
  questionNumber,
  totalQuestions
}: QuizQuestionProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const { playCorrect, playWrong } = useSound();
  const isLocked = typeof lockedAnswer === 'number';
  const displayedSelected = isLocked ? lockedAnswer : selectedAnswer;
  const shouldReveal = showResult || isLocked;

  const handleSelect = (index: number) => {
    if (showResult || isLocked) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    const isCorrect = index === question.correctAnswer;

    if (isCorrect) {
      playCorrect();
    } else {
      playWrong();
    }
    
    onAnswer(index);
  };

  const getOptionClass = (index: number) => {
    if (!shouldReveal) {
      return 'bg-cyan-100 hover:bg-cyan-200 border-2 border-cyan-300 hover:border-cyan-400';
    }
    
    if (index === question.correctAnswer) {
      return 'bg-kid-green text-primary-foreground border-2 border-kid-green';
    }
    
    if (index === displayedSelected && index !== question.correctAnswer) {
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
            className="h-full rounded-full rainbow-bar"
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
          {onBack ? (
            <Button
              variant="outline"
              size="sm"
              onClick={onBack}
              disabled={!canGoBack || showResult}
              className="rounded-xl font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous Question
            </Button>
          ) : (
            <div />
          )}
          {onNext ? (
            <Button
              size="sm"
              onClick={onNext}
              disabled={!canGoNext}
              className="rounded-xl font-semibold"
            >
              {isLast ? 'Finish Quiz' : 'Next Question'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          ) : null}
        </div>
      </div>

      {/* Question */}
      <motion.div
        className="bg-cyan-200 rounded-3xl p-6 md:p-8 shadow-kid mb-6"
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
            disabled={showResult || isLocked}
            className={`${getOptionClass(index)} p-4 md:p-5 rounded-2xl text-left font-semibold text-base md:text-lg transition-all duration-300 flex items-center justify-between`}
            whileHover={!showResult && !isLocked ? { scale: 1.02 } : {}}
            whileTap={!showResult && !isLocked ? { scale: 0.98 } : {}}
          >
            <span>{option}</span>
            <AnimatePresence>
              {shouldReveal && index === question.correctAnswer && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center"
                >
                  <Check className="w-5 h-5" />
                </motion.div>
              )}
              {shouldReveal && index === displayedSelected && index !== question.correctAnswer && (
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
        {shouldReveal && question.explanation && (
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
