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
                My name is Yousif Ahmed, a junior computer engineering student at Hamad Bin Khalifa University, enthusiastic about both technology and design. 
                Building systems with some amount of engineering and their aesthetic considerations is one of my interests. My other interests include combining software and hardware to provide solutions for real life problems.
              </p>
              <p className="leading-relaxed mt-4">
                Outside classroom, I love sports and music, and I usually get my greatest concentration and creativity during late night coding sessions.
              </p>
              <p className="leading-relaxed mt-4">
                These projects demonstrate how I foster my interest in addressing real life problems through clean, simple and easy to use technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;