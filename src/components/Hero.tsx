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
        <div className="text-xl md:text-2xl text-terminal-gray font-mono">
          <span className="text-terminal-green">user@Usifolio:~$ </span>
          <span>{displayText}</span>
          <span className={`inline-block w-3 h-6 bg-terminal-green ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;