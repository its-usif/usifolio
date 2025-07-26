const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        {/* Bio Section */}
        <div className="terminal-section p-8 rounded-lg mb-12">
          <div className="text-terminal-green text-sm mb-4">
            <span className="text-terminal-gray"># </span>about.txt
          </div>
          
          <div className="space-y-4 text-terminal-gray font-mono">
            
            <div className="mt-8 text-foreground">
              <p className="leading-relaxed">
                I am Yousif Ahmed, a computer engineering student at Hamad Bin Khalifa University having passion for tech and design. 
                I love building systems that are not only functional but also visually compelling. and also combining software with hardware to find solutions to real life issues.
              </p>
              <p className="leading-relaxed mt-4">
                Outside the classroom, I'm into sports and music, and my secret sauce is the late-night energy I channel while coding to Drake.
              </p>
              <p className="leading-relaxed mt-4">
                Following are some projects I have been involved with, and each one is a reflection of my interest in dealing with real life issues through clean, simple and user friendly technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;