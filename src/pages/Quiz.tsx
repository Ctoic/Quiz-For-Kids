import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import QuizQuestion from '@/components/QuizQuestion';
import QuizResult from '@/components/QuizResult';
import { difficultyMeta, quizzes, type Difficulty } from '@/data/quizData';
import { useSound } from '@/sound/SoundProvider';

const Quiz = () => {
  const { subject, difficulty } = useParams<{ subject: string; difficulty?: string }>();
  const navigate = useNavigate();
  const { muted, toggleMute } = useSound();

  const quiz = quizzes.find(q => q.id === subject);
  const selectedDifficulty: Difficulty =
    difficulty && Object.prototype.hasOwnProperty.call(difficultyMeta, difficulty)
      ? (difficulty as Difficulty)
      : 'easy';
  const questions = quiz?.levels[selectedDifficulty];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    questions ? Array(questions.length).fill(null) : []
  );
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!questions) return;
    setCurrentQuestion(0);
    setIsComplete(false);
    setAnswers(Array(questions.length).fill(null));
  }, [questions]);

  if (!quiz || !questions) {
    navigate('/');
    return null;
  }

  const score = answers.reduce((total, answer, index) => {
    if (answer === null) return total;
    return answer === questions[index].correctAnswer ? total + 1 : total;
  }, 0);

  const handleAnswer = (selectedIndex: number) => {
    setAnswers(prev => {
      const next = [...prev];
      next[currentQuestion] = selectedIndex;
      return next;
    });
  };

  const handleNext = () => {
    if (answers[currentQuestion] === null) return;
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion === 0) return;
    setIsComplete(false);
    setCurrentQuestion(prev => Math.max(0, prev - 1));
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setIsComplete(false);
    setAnswers(Array(questions.length).fill(null));
  };

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        showBack={!isComplete}
        onBack={handleHome}
        soundEnabled={!muted}
        onToggleSound={toggleMute}
      />
      
      <main className="flex-1 flex items-center justify-center py-8">
        <AnimatePresence mode="wait">
          {isComplete ? (
            <QuizResult
              key="result"
              score={score}
              totalQuestions={questions.length}
              onRestart={handleRestart}
              onHome={handleHome}
            />
          ) : (
            <QuizQuestion
              key={currentQuestion}
              question={questions[currentQuestion]}
              questionNumber={currentQuestion + 1}
              totalQuestions={questions.length}
              onAnswer={handleAnswer}
              onBack={handleBack}
              canGoBack={currentQuestion > 0}
              onNext={handleNext}
              canGoNext={answers[currentQuestion] !== null}
              isLast={currentQuestion === questions.length - 1}
              lockedAnswer={answers[currentQuestion]}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Quiz;
