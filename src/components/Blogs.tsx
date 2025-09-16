const Blogs = () => {
  const blogPosts = [
    {
      title: "Engineering for Impact: My Journey at HBKU",
      date: "2024-03-15", 
      description: "As a computer engineering student at HBKU, I see my degree as more than just a way to get a job. It's about using technology to make life better for people, focusing on accessible solutions and real-world impact.",
      content: "As a computer engineering student at HBKU, I see my degree as more than just a way to get a job. To me, it's a chance to use technology and problem-solving to make life better for people. Like Dr. Lane and Khanjan Mehta both pointed out, technical skills alone aren't enough. If you want to create real impact, you also need to communicate well, work with different kinds of people and actually follow through on your ideas.\n\nThe issue I'm most drawn to is access to technology and education. Technology opens doors, but too many people are left out because of cost, lack of infrastructure, or digital literacy. That gap keeps people from learning and improving their opportunities. I'd like to work on practical, affordable solutions that make technology more accessible things like simple digital tools, energy efficient systems or platforms that expand learning for underserved communities.\n\nI've already learned from past experiences that communication matters just as much as technical knowledge. In labs and group projects, I often find myself in the role of explaining technical things to teammates. It's not enough to \"know\" the material you have to make it clear for people who don't share the same background. That skill will be critical in the future if I want to lead projects, collaborate across disciplines or convince others to support my work.\n\nAs for the type of platform I see myself in, I'm open to both large companies and smaller, mission driven organizations. Big companies have resources and networks that can help scale solutions, while social enterprises focus more on impact. I think testing both paths will help me figure out which fits best with my goals and values.\n\nTo actually get things done, I know I'll need more than just motivation. I plan to keep building experience through internships, research, and side projects that deal with real world problems. At the same time, I want to grow my network by meeting people from different fields and finding mentors who can guide me. My ultimate goal is to use my engineering background not only to design systems, but to make sure those systems are simple, usable and genuinely helpful to the people who need them.",
      tags: ["Engineering", "Impact", "Education"],
      readTime: "4 min read"
    },
    {
      title: "Reflecting on Professional Growth",
      date: "2024-03-08",
      description: "Looking back at my professional development journey as a junior in computer engineering - the progress made, lessons learned, and the path ahead toward meaningful career contributions.",
      content: "Looking back at my professional development so far, I feel like I'm on the right path but still at the beginning of my journey. As a junior in computer engineering, I've been building my technical foundation through coursework and labs, while also getting better at communication and teamwork. Each class and project adds a new piece to the bigger picture of who I'm becoming as a professional.\n\nAt this stage, my resume shows my education, some projects and a few experiences that highlight my technical skills. But by the time I graduate, I want it to tell a fuller story. I'd like to record a solid internship or two in the tech or engineering field where I can apply what I've learned in real settings. I also want to showcase more projects that deal with real-world problems, whether that's through class, competitions or personal work. Ideally, I'd like employers to look at my resume and see not just technical ability, but also creativity, initiative and the ability to work well with others.\n\nThere are still things I need to work on. One is gaining more hands-on experience outside the classroom, because employers really value practical skills. Another is networking I know that opportunities often come through connections, so I need to get better at reaching out, attending events and building relationships. I also want to sharpen my communication skills, since being able to explain technical ideas clearly is just as important as the technical work itself.\n\nOverall, I'm proud of how far I've come, but I know there's more to do. My plan is to stay focused on building experience, keep track of the projects I complete and take every chance I can to grow professionally. By the time I graduate, I want my resume to reflect not only the knowledge I gained in the classroom, but also the impact I've made through real contributions.",
      tags: ["Career", "Growth", "Reflection"],
      readTime: "3 min read"
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
                  <div className="text-sm text-terminal-gray/80 leading-relaxed whitespace-pre-line">
                    {post.content}
                  </div>
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