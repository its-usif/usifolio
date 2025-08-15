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
    <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden px-6">
      {/* Matrix background */}
      <div className="matrix-lines opacity-30"></div>
      
      <div className="w-full max-w-2xl z-10 space-y-8">
        {/* Loading message at top */}
        <div className="text-left">
          <h2 className="text-2xl md:text-3xl font-mono text-terminal-green tracking-wider">
            {messages[messageIndex]}
            <span className="animate-pulse ml-1">...</span>
          </h2>
        </div>

        {/* Terminal-style progress bar */}
        <div className="w-full font-mono">
          <div className="border border-terminal-green/50 bg-terminal-dark p-6 relative">
            {/* Progress bar background */}
            <div className="flex items-center">
              <span className="text-terminal-green mr-2 text-lg">[</span>
              <div className="flex-1 flex">
                {Array.from({ length: 50 }, (_, i) => {
                  const filled = i <= Math.floor((progress / 100) * 49);
                  return (
                    <span
                      key={i}
                      className={`text-lg transition-colors duration-100 ${
                        filled
                          ? "text-terminal-green"
                          : "text-terminal-gray/30"
                      }`}
                    >
                      ■
                    </span>
                  );
                })}
              </div>
              <span className="text-terminal-green ml-2 text-lg">]</span>
            </div>
          </div>
        </div>

        {/* Status message below progress bar */}
        <div className="text-left">
          <p className="text-terminal-cyan font-mono text-lg">
            {progress < 100 ? `Loading... ${Math.floor(progress)}%` : "System Ready!"}
          </p>
        </div>

        {/* Character image at bottom */}
        <div className="flex justify-center pt-8">
          <div className="w-40 h-40 relative">
            {/* You can replace this src with your character image */}
            <img 
              src="/lovable-uploads/34872503-04f9-454a-9a1f-16d4590e603f.png" 
              alt="Character saying hello and waving" 
              className="w-full h-full object-contain drop-shadow-lg animate-pulse"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;