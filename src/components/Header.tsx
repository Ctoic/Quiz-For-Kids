import { motion } from 'framer-motion';
import { Brain, ArrowLeft, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  showBack?: boolean;
  onBack?: () => void;
  soundEnabled?: boolean;
  onToggleSound?: () => void;
}

const Header = ({ showBack, onBack, soundEnabled, onToggleSound }: HeaderProps) => {
  const hasSoundToggle = typeof onToggleSound === 'function';

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {showBack ? (
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            className="rounded-xl font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-1" />
            Back
          </Button>
        ) : (
          <div className="w-20" />
        )}
        
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-2"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Brain className="w-8 h-8 text-primary" />
          </motion.div>
          <span className="text-xl font-bold text-foreground">KidQuiz</span>
        </motion.div>
        
        <div className="w-20 flex justify-end">
          {hasSoundToggle ? (
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggleSound}
              className="rounded-xl"
              aria-label={soundEnabled ? 'Mute sound' : 'Unmute sound'}
            >
              {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            </Button>
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default Header;
