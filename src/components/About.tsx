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
                I am a Computer Engineering student at Hamad Bin Khalifa University with a strong interest in technology, aviation, and sustainability. I enjoy working on projects that connect software, hardware, data, and real-world problem solving.
              </p>
              <p className="leading-relaxed mt-4">
                My experience includes projects involving Verilog, digital system design, web development, data management, AI, GIS, and infrastructure planning. I have also gained practical exposure to aviation consulting, laboratory systems, and sustainability-focused engineering work.
              </p>
              <p className="leading-relaxed mt-4">
                I am motivated by building useful solutions, learning from real industry environments, and applying technology to improve efficiency, accessibility, and sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;