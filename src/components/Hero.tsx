import { useEffect, useState } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "> Building systems where code meets design.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Matrix background */}
      <div className="matrix-lines"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-terminal-green/5 to-terminal-cyan/5"></div>

      <div className="text-center z-10 px-6">
        {/* Terminal-style tagline */}
        <div className="text-xl md:text-2xl text-terminal-gray font-mono mb-12">
          <span className="text-terminal-green">user@portfolio:~$ </span>
          <span>{displayText}</span>
          <span className={`inline-block w-3 h-6 bg-terminal-green ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
        </div>

        {/* Quick navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base">
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-terminal-gray hover:text-terminal-cyan transition-colors duration-300 hover-glow px-4 py-2 border border-terminal-gray/30 hover:border-terminal-cyan/50"
          >
            About
          </button>
          <span className="text-terminal-gray">·</span>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-terminal-gray hover:text-terminal-cyan transition-colors duration-300 hover-glow px-4 py-2 border border-terminal-gray/30 hover:border-terminal-cyan/50"
          >
            Projects
          </button>
          <span className="text-terminal-gray">·</span>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-terminal-gray hover:text-terminal-cyan transition-colors duration-300 hover-glow px-4 py-2 border border-terminal-gray/30 hover:border-terminal-cyan/50"
          >
            Contact
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-terminal-green rounded-full flex justify-center">
            <div className="w-1 h-3 bg-terminal-green rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;