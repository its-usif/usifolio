import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import yousifPortrait from "@/assets/yousif-portrait.jpg";

interface LoadingProps {
  onLoadingComplete: () => void;
}

const Loading = ({ onLoadingComplete }: LoadingProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => onLoadingComplete(), 500);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center relative overflow-hidden">
      {/* Matrix background */}
      <div className="matrix-lines"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-terminal-green/5 to-terminal-cyan/5"></div>

      <div className="text-center z-10 px-6 max-w-md w-full">
        {/* Profile picture */}
        <div className="mb-8 relative">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-2 border-terminal-green/50 shadow-lg shadow-terminal-green/20">
            <img 
              src={yousifPortrait} 
              alt="Yousif Ahmed" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 rounded-full border-2 border-terminal-cyan/30 animate-pulse"></div>
        </div>

        {/* Loading text */}
        <h2 className="text-2xl md:text-3xl font-mono text-terminal-green mb-8 tracking-wider">
          Loading<span className="animate-pulse">...</span>
        </h2>

        {/* Progress bar */}
        <div className="w-full mb-4">
          <Progress 
            value={progress} 
            className="h-2 bg-terminal-dark border border-terminal-green/30"
          />
        </div>

        {/* Progress percentage */}
        <p className="text-terminal-gray font-mono text-sm">
          {progress}%
        </p>
      </div>
    </div>
  );
};

export default Loading;