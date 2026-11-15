import { useState, useEffect } from "react";
import type { TabType } from "../pages/Index";

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const Header = ({ activeTab, setActiveTab }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleNavigate = (event: Event) => handleTabClick((event as CustomEvent<TabType>).detail);
    window.addEventListener("portfolio:navigate", handleNavigate);
    return () => window.removeEventListener("portfolio:navigate", handleNavigate);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems: { id: TabType; label: string }[] = [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "ask", label: "Talk to Me" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen
          ? "bg-background border-b border-terminal-green/20"
          : isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-terminal-green/20"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleTabClick("ask")}
            className="text-lg font-bold text-terminal-green hover:text-terminal-cyan transition-colors duration-300"
          >
            [Yousif Ahmed]
          </button>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={`transition-colors duration-300 ${
                  activeTab === item.id
                    ? "text-terminal-cyan"
                    : "text-terminal-gray hover:text-terminal-cyan"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-terminal-green"
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-terminal-green/20 bg-background px-6 py-8 md:hidden">
            <div className="mx-auto flex max-w-lg flex-col">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`border-b border-terminal-gray/15 py-5 text-left text-xl transition-colors duration-300 ${
                    activeTab === item.id
                      ? "text-terminal-cyan"
                      : "text-terminal-gray hover:text-terminal-cyan"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
