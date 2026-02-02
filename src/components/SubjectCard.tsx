import { motion } from 'framer-motion';

interface SubjectCardProps {
  title: string;
  emoji: string;
  color: 'green' | 'blue' | 'orange' | 'purple';
  onClick: () => void;
  questionsCount: number;
}

const colorClasses = {
  green: 'bg-kid-green hover:shadow-[0_0_40px_-10px_hsl(var(--kid-green))]',
  blue: 'bg-kid-blue hover:shadow-[0_0_40px_-10px_hsl(var(--kid-blue))]',
  orange: 'bg-kid-orange hover:shadow-[0_0_40px_-10px_hsl(var(--kid-orange))]',
  purple: 'bg-kid-purple hover:shadow-[0_0_40px_-10px_hsl(var(--kid-purple))]',
};

const SubjectCard = ({ title, emoji, color, onClick, questionsCount }: SubjectCardProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${colorClasses[color]} w-full p-6 md:p-8 rounded-3xl text-primary-foreground shadow-kid transition-all duration-300 cursor-pointer`}
    >
      <motion.div
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        className="text-5xl md:text-6xl mb-4"
      >
        {emoji}
      </motion.div>
      <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
      <p className="text-sm md:text-base opacity-90">{questionsCount} Questions</p>
    </motion.button>
  );
};

export default SubjectCard;
