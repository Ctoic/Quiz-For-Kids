import { useState } from 'react';
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
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const { muted, toggleMute } = useSound();

  const quiz = quizzes.find(q => q.id === subject);
  const selectedDifficulty: Difficulty =
    difficulty && Object.prototype.hasOwnProperty.call(difficultyMeta, difficulty)
      ? (difficulty as Difficulty)
      : 'easy';
  const questions = quiz?.levels[selectedDifficulty];

  if (!quiz || !questions) {
    navigate('/');
    return null;
  }

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setIsComplete(false);
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
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Quiz;
