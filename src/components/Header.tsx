import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-terminal-green/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-lg font-bold text-terminal-green">
            [Yousif Ahmed]
          </div>
          
          <div className="hidden md:flex flex-col space-y-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-terminal-gray hover:text-terminal-cyan transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-terminal-gray hover:text-terminal-cyan transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-terminal-gray hover:text-terminal-cyan transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-terminal-green">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;