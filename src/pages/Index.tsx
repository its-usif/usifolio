import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import AskUsif from "../components/AskUsif";
import Resume from "../components/Resume";

export type TabType = "home" | "about" | "projects" | "resume" | "ask" | "contact";

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabType>("ask");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Hero />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "resume":
        return <Resume />;
      case "contact":
        return <Contact />;
      case "ask":
        return <AskUsif />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="bg-background text-foreground overflow-x-hidden min-h-screen">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="pt-16">
        {renderContent()}
      </main>
    </div>
  );
};

export default Index;
