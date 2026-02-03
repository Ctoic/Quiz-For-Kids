import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Howl, Howler } from 'howler';
import backgroundMp3 from './background.mp3';
import rightMp3 from './Right.mp3';
import wrongMp3 from './wrong.mp3';

interface SoundContextValue {
  muted: boolean;
  toggleMute: () => void;
  playClick: () => void;
  playCorrect: () => void;
  playWrong: () => void;
}

const SoundContext = createContext<SoundContextValue | null>(null);

const createHowl = (src: string, volume: number, loop = false) =>
  new Howl({ src: [src], volume, loop });

export const SoundProvider = ({ children }: { children: React.ReactNode }) => {
  const [muted, setMuted] = useState(false);
  const clickRef = useRef<Howl | null>(null);
  const correctRef = useRef<Howl | null>(null);
  const wrongRef = useRef<Howl | null>(null);
  const ambienceRef = useRef<Howl | null>(null);
  const ambienceStartedRef = useRef(false);

  useEffect(() => {
    clickRef.current = createHowl('/audio/click.wav', 0.35);
    correctRef.current = createHowl(rightMp3, 0.5);
    wrongRef.current = createHowl(wrongMp3, 0.5);
    ambienceRef.current = createHowl(backgroundMp3, 0.2, true);

    return () => {
      clickRef.current?.unload();
      correctRef.current?.unload();
      wrongRef.current?.unload();
      ambienceRef.current?.unload();
    };
  }, []);

  useEffect(() => {
    Howler.mute(muted);
  }, [muted]);

  const ensureAmbience = useCallback(() => {
    if (!ambienceStartedRef.current && ambienceRef.current) {
      ambienceRef.current.play();
      ambienceStartedRef.current = true;
    }
  }, []);

  const playClick = useCallback(() => {
    ensureAmbience();
    clickRef.current?.play();
  }, [ensureAmbience]);

  const playCorrect = useCallback(() => {
    ensureAmbience();
    correctRef.current?.play();
  }, [ensureAmbience]);

  const playWrong = useCallback(() => {
    ensureAmbience();
    wrongRef.current?.play();
  }, [ensureAmbience]);

  useEffect(() => {
    const handler = () => {
      if (muted) return;
      playClick();
    };

    window.addEventListener('pointerdown', handler, true);
    return () => window.removeEventListener('pointerdown', handler, true);
  }, [muted, playClick]);

  const toggleMute = useCallback(() => {
    setMuted(prev => !prev);
  }, []);

  const value = useMemo(
    () => ({ muted, toggleMute, playClick, playCorrect, playWrong }),
    [muted, toggleMute, playClick, playCorrect, playWrong]
  );

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>;
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within SoundProvider');
  }
  return context;
};
