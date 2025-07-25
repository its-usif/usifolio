const Projects = () => {
  const projects = [
    {
      title: "Usifolio",
      description: "This exact site, self-built for branding",
      tech: ["React", "TypeScript", "Tailwind CSS"],
      status: "Live",
      link: "#",
      image: "photo-1498050108023-4542c06a5843"
    },
    {
      title: "Lab Portal",
      description: "Internal tool for managing lab resources, updated frontend/backend",
      tech: ["React", "Node.js", "Database"],
      status: "In Development",
      link: "#",
      image: "photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Vertere Project",
      description: "Inventory optimization and database alignment using Vertere LIMS",
      tech: ["Python", "Database", "LIMS"],
      status: "Completed",
      link: "#",
      image: "photo-1487058792275-0ad4aaf24ca7"
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-terminal-green mb-4">
            <span className="text-terminal-gray"># </span>Projects
          </h2>
          <div className="w-24 h-1 bg-terminal-cyan mx-auto"></div>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="terminal-section p-6 rounded-lg hover-glow cursor-pointer group flex flex-col md:flex-row gap-6"
            >
              {/* Project Image */}
              <div className="md:w-1/3">
                <div className="aspect-video bg-terminal-gray/10 rounded-lg overflow-hidden border border-terminal-gray/20">
                  <img
                    src={`https://images.unsplash.com/${project.image}?w=400&h=240&fit=crop&crop=entropy&cs=tinysrgb`}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Project Content */}
              <div className="md:w-2/3">
                {/* Project header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-terminal-green rounded-full"></div>
                    <div className="w-3 h-3 bg-terminal-cyan rounded-full"></div>
                    <div className="w-3 h-3 bg-terminal-magenta rounded-full"></div>
                  </div>
                  <div className={`text-xs px-2 py-1 rounded ${
                    project.status === 'Live' ? 'bg-terminal-green/20 text-terminal-green' :
                    project.status === 'In Development' ? 'bg-terminal-cyan/20 text-terminal-cyan' :
                    'bg-terminal-magenta/20 text-terminal-magenta'
                  }`}>
                    {project.status}
                  </div>
                </div>

                {/* Project content */}
                <div className="font-mono">
                  <h3 className="text-xl font-bold text-terminal-cyan mb-3 group-hover:text-terminal-green transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-terminal-gray text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="mb-4">
                    <div className="text-terminal-magenta text-xs mb-2">stack = [</div>
                    <div className="ml-4 space-y-1">
                      {project.tech.map((tech, idx) => (
                        <div key={idx} className="text-xs">
                          <span className="text-terminal-cyan">"{tech}"</span>
                          {idx < project.tech.length - 1 && <span className="text-terminal-gray">,</span>}
                        </div>
                      ))}
                    </div>
                    <div className="text-terminal-magenta text-xs mt-2">]</div>
                  </div>

                  {/* View project link */}
                  <div className="text-xs">
                    <span className="text-terminal-green">$</span>
                    <span className="text-terminal-gray"> view_project --url=</span>
                    <span className="text-terminal-cyan hover:underline">{project.link}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/its-usif"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-terminal-gray hover:text-terminal-green transition-colors duration-300 font-mono hover-glow px-6 py-3 border border-terminal-gray/30 hover:border-terminal-green/50 rounded"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View all projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;