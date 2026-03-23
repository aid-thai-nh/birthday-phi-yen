import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, Pause, Play, Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // We use a beautiful romantic copyright-free track from an external source 
    // or simulate it if it fails to load.
    audioRef.current = new Audio("https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=romantic-piano-112135.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(e => console.log("Audio play failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      onClick={togglePlay}
      className={cn(
        "fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg shadow-pink-500/20 backdrop-blur-md transition-all duration-300 group",
        isPlaying ? "bg-white/90 text-primary border border-primary/20" : "bg-primary text-white"
      )}
      aria-label="Toggle background music"
    >
      {isPlaying ? (
        <div className="relative">
          <Pause className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-primary animate-ping" />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Music className="w-6 h-6" />
        </div>
      )}
    </motion.button>
  );
}
