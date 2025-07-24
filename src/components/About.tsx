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
            <div className="text-terminal-cyan"># Junior Computer Engineer @ HBKU</div>
            <div className="text-terminal-cyan"># Tech meets design & real-world usability</div>
            <div className="text-terminal-cyan"># Loves to "drake and code" 🎧💻</div>
            
            <div className="mt-8 text-foreground">
              <p className="leading-relaxed">
                I'm a computer engineering student passionate about building systems that work beautifully. 
                Currently pursuing my degree at Hamad Bin Khalifa University, I focus on the intersection 
                of technology and user experience.
              </p>
              <p className="leading-relaxed mt-4">
                When I'm not debugging code or optimizing systems, you'll find me exploring new technologies, 
                contributing to open-source projects, or listening to Drake while coding late into the night.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="terminal-section p-8 rounded-lg">
          <div className="text-terminal-green text-sm mb-4">
            <span className="text-terminal-gray"># </span>skills.py
          </div>
          
          <div className="font-mono text-terminal-gray">
            <div className="text-terminal-magenta mb-4">Skills = [</div>
            
            <div className="ml-4 space-y-2">
              <div className="hover-glow p-2 rounded">
                <span className="text-terminal-cyan">"Linux"</span><span className="text-terminal-gray">,</span>
              </div>
              <div className="hover-glow p-2 rounded">
                <span className="text-terminal-cyan">"Python (Colab)"</span><span className="text-terminal-gray">,</span>
              </div>
              <div className="hover-glow p-2 rounded">
                <span className="text-terminal-cyan">"Arduino"</span><span className="text-terminal-gray">,</span>
              </div>
              <div className="hover-glow p-2 rounded">
                <span className="text-terminal-cyan">"Microsoft Office"</span><span className="text-terminal-gray">,</span>
              </div>
              <div className="hover-glow p-2 rounded">
                <span className="text-terminal-cyan">"React"</span><span className="text-terminal-gray">,</span>
              </div>
              <div className="hover-glow p-2 rounded">
                <span className="text-terminal-cyan">"TypeScript"</span><span className="text-terminal-gray">,</span>
              </div>
              <div className="hover-glow p-2 rounded">
                <span className="text-terminal-cyan">"Database Management"</span>
              </div>
            </div>
            
            <div className="text-terminal-magenta mt-4">]</div>
            
            <div className="mt-6 text-terminal-gray">
              <span className="text-terminal-green">print</span>(
              <span className="text-terminal-cyan">"Always learning, always building"</span>)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;