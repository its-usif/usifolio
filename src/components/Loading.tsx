import { useEffect, useState } from "react";
import yousifPortrait from "@/assets/yousif-portrait.jpg";

interface LoadingProps {
  onLoadingComplete: () => void;
}

const Loading = ({ onLoadingComplete }: LoadingProps) => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Booting...",
    "Loading System...",
    "Downloading...",
    "Initializing...",
    "Almost There...",
    "Nearly Done...",
    "Ready!"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = Math.min(prevProgress + 1.5, 100);
        
        // Update message based on progress
        const newMessageIndex = Math.floor((newProgress / 100) * (messages.length - 1));
        setMessageIndex(Math.min(newMessageIndex, messages.length - 1));
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 800);
          return 100;
        }
        return newProgress;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Matrix background */}
      <div className="matrix-lines opacity-30"></div>
      
      <div className="text-center z-10 px-6 max-w-lg w-full">
        {/* Small animated profile picture */}
        <div className="mb-12 relative flex justify-center">
          <div className="w-20 h-20 rounded-full overflow-hidden border border-terminal-green/50 shadow-lg shadow-terminal-green/20 animate-pulse">
            <img 
              src={yousifPortrait} 
              alt="Yousif Ahmed" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Loading message */}
        <h2 className="text-2xl md:text-3xl font-mono text-terminal-green mb-12 tracking-wider">
          LOADING...
        </h2>

        {/* Retro-style progress bar */}
        <div className="w-full mb-6 font-mono max-w-md mx-auto">
          {/* Progress bar container */}
          <div className="border-2 border-terminal-green bg-terminal-dark p-1">
            <div className="flex gap-0">
              {Array.from({ length: 20 }, (_, i) => {
                const filled = i < Math.floor((progress / 100) * 20);
                return (
                  <div
                    key={i}
                    className={`w-4 h-6 transition-colors duration-150 ${
                      filled
                        ? "bg-terminal-green"
                        : "bg-terminal-dark border border-terminal-green/20"
                    }`}
                  />
                );
              })}
            </div>
          </div>
          
          {/* Progress percentage */}
          <div className="text-center mt-4">
            <span className="text-terminal-cyan font-mono text-sm">
              {Math.floor(progress)}%
            </span>
          </div>
        </div>

        {/* Additional terminal info */}
        <div className="text-terminal-gray/70 font-mono text-xs space-y-1">
          <p>System: Portfolio OS v2.1</p>
          <p>Loading user profile...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;