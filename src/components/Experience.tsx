const Experience = () => {
  const experiences = [
    {
      title: "Laboratory Assistant",
      organization: "HBKU – College of Science & Engineering",
      period: "Sep 2024 – Present",
      description: [
        "Maintain and validate chemical inventory",
        "Edit & build backend/frontend of internal Lab Portal",
        "Implement data integrity protocols"
      ]
    },
    {
      title: "Inventory Lab Manager – Intern",
      organization: "Hamad Bin Khalifa, Facilities & Support",
      period: "May 2024 – Sep 2024",
      description: [
        "Audited thousands of chemicals across labs (HBKU, QEERI, GUQ)",
        "Cleaned and synced data in Vertere LIMS",
        "Worked on data integrity & large-scale inventory systems"
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-terminal-green mb-4">
            <span className="text-terminal-gray"># </span>Experience
          </h2>
          <div className="w-24 h-1 bg-terminal-cyan mx-auto"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="terminal-section p-8 rounded-lg hover-glow">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Left column - Title & Organization */}
                <div className="md:col-span-1">
                  <h3 className="text-xl font-bold text-terminal-cyan mb-2">
                    {exp.title}
                  </h3>
                  <div className="text-terminal-gray font-mono text-sm mb-2">
                    {exp.organization}
                  </div>
                  <div className="text-terminal-green font-mono text-sm">
                    {exp.period}
                  </div>
                </div>

                {/* Right column - Description */}
                <div className="md:col-span-2">
                  <div className="font-mono text-terminal-gray">
                    <div className="text-terminal-magenta mb-2">responsibilities = [</div>
                    {exp.description.map((item, idx) => (
                      <div key={idx} className="ml-4 mb-1">
                        <span className="text-terminal-cyan">"</span>
                        <span className="text-foreground">{item}</span>
                        <span className="text-terminal-cyan">"</span>
                        {idx < exp.description.length - 1 && <span className="text-terminal-gray">,</span>}
                      </div>
                    ))}
                    <div className="text-terminal-magenta mt-2">]</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;