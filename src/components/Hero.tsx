import { useEffect, useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";

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
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden py-20">
      {/* Matrix background */}
      <div className="matrix-lines"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-terminal-green/5 to-terminal-cyan/5"></div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6">
        {/* Terminal-style tagline */}
        <div className="text-sm text-terminal-gray font-mono md:text-base">
          <span className="text-terminal-green">user@Usifolio:~$ </span>
          <span>{displayText}</span>
          <span className={`inline-block w-3 h-6 bg-terminal-green ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
        </div>
        <div className="mt-8 max-w-3xl">
          <p className="mb-4 text-left text-4xl font-bold leading-tight text-foreground sm:text-6xl">Yousif Ahmed<span className="text-terminal-green">.</span></p>
          <p className="max-w-2xl text-left text-lg leading-relaxed text-terminal-gray sm:text-xl">Computer engineering student building practical systems across software, hardware, data, and design.</p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="inline-flex items-center gap-2 rounded border border-terminal-green px-5 py-3 font-mono text-sm text-terminal-green transition hover:bg-terminal-green hover:text-background" onClick={() => window.dispatchEvent(new CustomEvent("portfolio:navigate", { detail: "projects" }))}>Explore projects <ArrowRight className="h-4 w-4" /></button>
          <button className="inline-flex items-center gap-2 rounded border border-terminal-gray/30 px-5 py-3 font-mono text-sm text-terminal-gray transition hover:border-terminal-cyan hover:text-terminal-cyan" onClick={() => window.dispatchEvent(new CustomEvent("portfolio:navigate", { detail: "about" }))}>About me <ArrowDown className="h-4 w-4" /></button>
        </div>
        <div className="mt-16 grid max-w-2xl grid-cols-2 gap-3 text-left font-mono text-xs sm:grid-cols-3">
          <div className="border-l border-terminal-green/50 pl-3"><div className="text-terminal-green">01</div><div className="mt-1 text-terminal-gray">AI systems</div></div>
          <div className="border-l border-terminal-cyan/50 pl-3"><div className="text-terminal-cyan">02</div><div className="mt-1 text-terminal-gray">Product builds</div></div>
          <div className="border-l border-terminal-magenta/50 pl-3"><div className="text-terminal-magenta">03</div><div className="mt-1 text-terminal-gray">Engineering</div></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
