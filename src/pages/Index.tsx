import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Blogs />
      <Contact />
    </div>
  );
};

export default Index;
