const Blogs = () => {
  const blogPosts = [
    {
      title: "Building Scalable React Applications",
      date: "2024-01-15",
      description: "Exploring best practices for building maintainable and scalable React applications with modern tooling.",
      tags: ["React", "TypeScript", "Architecture"],
      readTime: "5 min read"
    },
    {
      title: "The Future of Web Development",
      date: "2024-01-08",
      description: "Discussing emerging trends and technologies that are shaping the future of web development.",
      tags: ["WebDev", "Trends", "Future"],
      readTime: "8 min read"
    },
    {
      title: "Optimizing Performance in Modern Web Apps",
      date: "2024-01-01",
      description: "Techniques and strategies for optimizing performance in modern web applications.",
      tags: ["Performance", "Optimization", "JavaScript"],
      readTime: "6 min read"
    }
  ];

  return (
    <section id="blogs" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-terminal-green">{">"}</span> Blog Posts
        </h2>
        
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="border border-terminal-gray/30 p-6 hover:border-terminal-cyan/50 transition-colors duration-300 group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold text-terminal-cyan group-hover:text-terminal-green transition-colors duration-300 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-terminal-gray leading-relaxed mb-4">
                    {post.description}
                  </p>
                </div>
                <div className="text-sm text-terminal-gray/70 md:text-right md:min-w-fit">
                  <div>{post.date}</div>
                  <div>{post.readTime}</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs px-2 py-1 border border-terminal-green/30 text-terminal-green"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-terminal-gray/70">
            More posts coming soon...
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blogs;