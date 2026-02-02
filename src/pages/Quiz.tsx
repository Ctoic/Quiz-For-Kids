import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from '@/components/Header';
import QuizQuestion from '@/components/QuizQuestion';
import QuizResult from '@/components/QuizResult';
import { quizzes } from '@/data/quizData';

const Quiz = () => {
  const { subject } = useParams<{ subject: string }>();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const quiz = quizzes.find(q => q.id === subject);

  if (!quiz) {
    navigate('/');
    return null;
  }

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(prev => prev + 1);
    }

    if (currentQuestion + 1 < quiz.questions.length) {
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
      <Header showBack={!isComplete} onBack={handleHome} />
      
      <main className="flex-1 flex items-center justify-center py-8">
        <AnimatePresence mode="wait">
          {isComplete ? (
            <QuizResult
              key="result"
              score={score}
              totalQuestions={quiz.questions.length}
              onRestart={handleRestart}
              onHome={handleHome}
            />
          ) : (
            <QuizQuestion
              key={currentQuestion}
              question={quiz.questions[currentQuestion]}
              questionNumber={currentQuestion + 1}
              totalQuestions={quiz.questions.length}
              onAnswer={handleAnswer}
            />
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};

export default Quiz;
