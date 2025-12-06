import { useState } from "react";
import { ChevronDown, ChevronRight, FileText, Upload, ExternalLink } from "lucide-react";

const Blogs = () => {
  const [expandedBlogs, setExpandedBlogs] = useState<number[]>([]);
  const [expandedDeliverables, setExpandedDeliverables] = useState<string[]>([]);

  const toggleBlog = (index: number) => {
    setExpandedBlogs(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const toggleDeliverable = (id: string) => {
    setExpandedDeliverables(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const blogPosts = [
    {
      title: "Engineering for Impact: My Journey at HBKU",
      prompt: "Prompt 1",
      date: "2024-03-15",
      content: "As a computer engineering student at HBKU, I see my degree as more than just a way to get a job. To me, it's a chance to use technology and problem-solving to make life better for people. Like Dr. Lane and Khanjan Mehta both pointed out, technical skills alone aren't enough. If you want to create real impact, you also need to communicate well, work with different kinds of people and actually follow through on your ideas.\n\nThe issue I'm most drawn to is access to technology and education. Technology opens doors, but too many people are left out because of cost, lack of infrastructure, or digital literacy. That gap keeps people from learning and improving their opportunities. I'd like to work on practical, affordable solutions that make technology more accessible things like simple digital tools, energy efficient systems or platforms that expand learning for underserved communities.\n\nI've already learned from past experiences that communication matters just as much as technical knowledge. In labs and group projects, I often find myself in the role of explaining technical things to teammates. It's not enough to \"know\" the material you have to make it clear for people who don't share the same background. That skill will be critical in the future if I want to lead projects, collaborate across disciplines or convince others to support my work.\n\nAs for the type of platform I see myself in, I'm open to both large companies and smaller, mission driven organizations. Big companies have resources and networks that can help scale solutions, while social enterprises focus more on impact. I think testing both paths will help me figure out which fits best with my goals and values.\n\nTo actually get things done, I know I'll need more than just motivation. I plan to keep building experience through internships, research, and side projects that deal with real world problems. At the same time, I want to grow my network by meeting people from different fields and finding mentors who can guide me. My ultimate goal is to use my engineering background not only to design systems, but to make sure those systems are simple, usable and genuinely helpful to the people who need them.",
      tags: ["Engineering", "Impact", "Education"],
      readTime: "4 min read"
    },
    {
      title: "Reflecting on Professional Growth",
      prompt: "Prompt 2",
      date: "2024-03-08",
      content: "Looking back at my professional development so far, I feel like I'm on the right path but still at the beginning of my journey. As a junior in computer engineering, I've been building my technical foundation through coursework and labs, while also getting better at communication and teamwork. Each class and project adds a new piece to the bigger picture of who I'm becoming as a professional.\n\nAt this stage, my resume shows my education, some projects and a few experiences that highlight my technical skills. But by the time I graduate, I want it to tell a fuller story. I'd like to record a solid internship or two in the tech or engineering field where I can apply what I've learned in real settings. I also want to showcase more projects that deal with real-world problems, whether that's through class, competitions or personal work. Ideally, I'd like employers to look at my resume and see not just technical ability, but also creativity, initiative and the ability to work well with others.\n\nThere are still things I need to work on. One is gaining more hands-on experience outside the classroom, because employers really value practical skills. Another is networking I know that opportunities often come through connections, so I need to get better at reaching out, attending events and building relationships. I also want to sharpen my communication skills, since being able to explain technical ideas clearly is just as important as the technical work itself.\n\nOverall, I'm proud of how far I've come, but I know there's more to do. My plan is to stay focused on building experience, keep track of the projects I complete and take every chance I can to grow professionally. By the time I graduate, I want my resume to reflect not only the knowledge I gained in the classroom, but also the impact I've made through real contributions.",
      tags: ["Career", "Growth", "Reflection"],
      readTime: "3 min read"
    },
    {
      title: "Reflection on Dr. Reza Tafreshi's Lecture",
      prompt: "Prompt 3",
      date: "2024-03-20",
      content: "One of the most valuable takeaways from Dr. Reza Tafreshi's talk was his emphasis on the importance of defining the problem clearly before attempting to solve it. Even though this sounds simple, hearing it from someone with his engineering experience made me realize how often teams rush into solutions without fully understanding what the actual issue is. He mentioned that misidentifying the problem is one of the main reasons projects fail, because the team ends up solving the wrong thing—or only part of the thing.\n\nThis idea stuck with me because I noticed that, as engineering students, we often jump straight to designing or proposing something before we slow down and evaluate the root cause. In my own experience, especially in group projects, we sometimes get excited about brainstorming solutions, but when someone asks, \"What exactly are we solving?\" the room goes quiet. Dr. Reza's point made me rethink my approach: a problem isn't just a description of a situation — it's an engineering question that needs to be framed precisely.\n\nThis idea helped guide our thinking when we started exploring possible problems for our ENGL210 technical report. Instead of starting with \"What solution should we build?\", we shifted to \"What problem in Qatar genuinely needs solving, and what are the underlying engineering causes?\" After some discussion, we realized that the scarcity and uneven distribution of EV charging stations is not just a convenience issue — it affects national sustainability, grid stability, and user trust. That shift in perspective helped us build a more meaningful project.\n\nDr. Reza's message influenced the way I now look at engineering: not every problem is obvious, and not every solution solves the real issue. I think this mindset will stay with me as I work on future projects, whether in class or industry.",
      tags: ["Problem-Solving", "Engineering", "Guest Speaker"],
      readTime: "3 min read"
    },
    {
      title: "Reflection on Group Activity with Ms. Lana's Team",
      prompt: "Prompt 4",
      date: "2024-03-25",
      content: "The group work activity led by Ms. Lana and her team was surprisingly useful in helping us understand group dynamics, especially when working with new people in a time-limited environment. What worked best for our group was the fact that we naturally fell into roles without forcing anything. Everyone contributed quickly, and no one tried to dominate. It felt balanced.\n\nOne thing that didn't work as well was the size of the group. Large groups can slow down decision-making because too many ideas come at once. We sometimes drifted off-topic because people weren't fully sure about the structure we were supposed to follow. Our initial structure didn't really stay in place—mostly because larger groups need clearer direction and a designated facilitator. Without someone to redirect the discussion, conversations can spread in many directions.\n\nThe most challenging aspect of working with so many people was ensuring that everyone was heard while still keeping progress consistent. Some people talked more confidently, while others waited, which created small pauses and slowed momentum. But we eventually learned how to adapt, especially by dividing tasks and regrouping to unify them.\n\nThat activity helped me recognize the importance of communication and shared understanding. It's not enough to work \"together\"; you need a structure that everyone follows.",
      tags: ["Teamwork", "Group Dynamics", "Communication"],
      readTime: "3 min read"
    },
    {
      title: "Three Engineering Problems of Interest",
      prompt: "Prompt 5",
      date: "2024-03-30",
      content: "When thinking about potential problems for our technical report, three engineering issues stood out to me because of their relevance to Qatar's future:\n\nScarcity and uneven distribution of EV charging stations\n\nAir pollution caused by increasing transportation demand\n\nUnderutilization of FIFA World Cup stadiums after the event\n\nI chose these because each one connects directly to national sustainability goals. Qatar is investing heavily in EV adoption, but without enough charging stations, users hesitate to switch. Air pollution continues to rise as population and transportation needs grow, making this an urgent environmental challenge. Lastly, the World Cup stadiums represent massive engineering achievements, but they need long-term plans to remain functional and beneficial to the community.\n\nAll three problems are technically complex and require interdisciplinary solutions—energy, infrastructure, policy, and user behavior. They helped us narrow down what we were passionate about exploring this semester.",
      tags: ["Engineering Problems", "Qatar", "Sustainability"],
      readTime: "2 min read"
    },
    {
      title: "Reflection on Muna Al Bader's Talk",
      prompt: "Prompt 7",
      date: "2024-04-10",
      content: "Muna Al Bader's lecture was inspiring because she showed that a person doesn't need to limit themselves to one identity. She spoke about the challenges of balancing engineering with her artistic journey. What struck me was her point that passion and profession can coexist if you commit to both with discipline.\n\nThe lesson that resonated with me most was her idea that creativity and technical thinking strengthen each other instead of competing. Hearing this made me reflect on my own path: even in engineering, creativity drives innovation, problem-solving, and new ways of thinking. I realized I don't have to separate my academic goals from the things I enjoy doing outside of class. Like Muna, embracing both sides might actually make me better at both.",
      tags: ["Creativity", "Engineering", "Guest Speaker"],
      readTime: "2 min read"
    },
    {
      title: "Industry Mentor Reflection",
      prompt: "Prompt 8",
      date: "2024-04-15",
      content: "Meeting with our mentors from KAHRAMAA/Tarsheed was a turning point for our project. They approached our ideas respectfully but also critically, identifying what was realistic and what needed more development. They showed the most interest in our digital solution but emphasized that any real system must rely on reliable data and careful grid planning.\n\nThey pushed us to think deeper about feasibility, especially around how Qatar plans long-term EV expansion. One of the biggest moments for us was when they suggested adding E-Zones to our solution—something we hadn't even considered. That shifted our thinking and made our app more aligned with national initiatives.\n\nThis meeting helped us see our project from an industry perspective: decisions aren't based on creativity alone—they're based on constraints, data, and long-term planning. We left with clear next steps: refine the app features, make the system scalable, and improve our understanding of current infrastructure.",
      tags: ["Industry", "Mentorship", "KAHRAMAA"],
      readTime: "3 min read"
    },
    {
      title: "Presentation Reflection",
      prompt: "Prompt 9",
      date: "2024-04-20",
      content: "Presenting to industry members was both stressful and motivating. I'm most proud of how our team handled the design and structure of the presentation—each part flowed smoothly, and everyone spoke confidently. We received helpful feedback, especially regarding data reliability and the need to consider national policy alignment.\n\nWhat motivated me most was seeing professionals genuinely interested in our prototype. It made me realize that our work has potential beyond the classroom. The experience made me more comfortable speaking publicly, and it encouraged me to think about how engineers communicate ideas, not just build them.\n\nI walked away excited to refine the system and improve our technical report. The presentation helped me grow as a communicator and teammate, and I'm more confident now in presenting technical ideas.",
      tags: ["Presentation", "Public Speaking", "Growth"],
      readTime: "2 min read"
    },
    {
      title: "Final Course Reflection",
      prompt: "Prompt 10",
      date: "2024-04-25",
      content: "This course showed me how deeply technical and professional communication connects to real engineering work. Hearing from guest speakers and visiting sites made me understand how communication is part of every step of technical problem-solving. It's not just writing—it's planning, documenting, presenting, and collaborating.\n\nWorking with my team helped me better understand the importance of identifying user needs and designing solutions that fit the context. I learned how hard it is to translate ideas into structured reports, clear posters, and presentations. But I also learned how rewarding it is when everything comes together.\n\nThis course challenged me to improve my writing, my teamwork, and my ability to communicate engineering concepts clearly. Moving forward, these skills will help me in academic projects, internships, and eventually my engineering career. ENGL210 didn't just teach me how to write—it taught me how to think like an engineer who communicates clearly and works effectively with others.",
      tags: ["Reflection", "Communication", "Engineering"],
      readTime: "3 min read"
    }
  ];

  const majorProjects = [
    {
      title: "Problem Statement",
      subtitle: "Project 1",
      description: "Upload your problem statement document here.",
      placeholder: "No file uploaded yet"
    },
    {
      title: "Technical Report",
      subtitle: "Project 2",
      description: "Upload your technical report document here.",
      placeholder: "No file uploaded yet"
    },
    {
      title: "Oral Presentation",
      subtitle: "Presentation Materials",
      description: "Upload your presentation slides and materials here.",
      placeholder: "No file uploaded yet"
    },
    {
      title: "Research Poster",
      subtitle: "Visual Presentation",
      description: "Upload your research poster here.",
      placeholder: "No file uploaded yet"
    }
  ];

  const teamDeliverables = [
    {
      id: "charter",
      title: "Team Charter",
      description: "Upload your team charter document outlining roles, responsibilities, and expectations."
    },
    {
      id: "memos",
      title: "Group Memos",
      description: "Upload group memos and internal communications."
    },
    {
      id: "matrix",
      title: "Decision Matrix",
      description: "Upload your decision matrix for project choices."
    },
    {
      id: "agendas",
      title: "Meeting Agendas",
      description: "Upload meeting agendas and notes."
    },
    {
      id: "other",
      title: "Other Planning Documents",
      description: "Upload any other planning or coordination documents."
    }
  ];

  return (
    <section id="engl210" className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-terminal-green">{">"}</span> ENGL210
        </h2>
        <p className="text-terminal-gray text-center mb-16">
          Technical & Professional Communication Portfolio
        </p>

        {/* Section 1: Course Reflections */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-terminal-cyan mb-8 border-b border-terminal-gray/30 pb-4">
            ENGL 210 – Course Reflections & Weekly Blogs
          </h3>
          
          <div className="space-y-4">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="border border-terminal-gray/30 hover:border-terminal-cyan/50 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleBlog(index)}
                  className="w-full p-6 text-left flex items-start justify-between gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs px-2 py-1 border border-terminal-green/50 text-terminal-green">
                        {post.prompt}
                      </span>
                      <span className="text-sm text-terminal-gray/70">{post.date}</span>
                      <span className="text-sm text-terminal-gray/70">{post.readTime}</span>
                    </div>
                    <h4 className="text-lg md:text-xl font-semibold text-terminal-cyan group-hover:text-terminal-green transition-colors">
                      {post.title}
                    </h4>
                  </div>
                  <div className="text-terminal-gray">
                    {expandedBlogs.includes(index) ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </div>
                </button>
                
                {expandedBlogs.includes(index) && (
                  <div className="px-6 pb-6">
                    <div className="text-terminal-gray/80 leading-relaxed whitespace-pre-line mb-4">
                      {post.content}
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
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Section 2: Major Projects */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-terminal-cyan mb-8 border-b border-terminal-gray/30 pb-4">
            Major Projects
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {majorProjects.map((project, index) => (
              <div
                key={index}
                className="border border-terminal-gray/30 p-6 hover:border-terminal-cyan/50 transition-colors duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 border border-terminal-green/30 text-terminal-green">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-terminal-cyan">
                      {project.title}
                    </h4>
                    <p className="text-sm text-terminal-gray/70">{project.subtitle}</p>
                  </div>
                </div>
                <p className="text-terminal-gray/80 text-sm mb-4">
                  {project.description}
                </p>
                <div className="border-2 border-dashed border-terminal-gray/30 p-6 text-center hover:border-terminal-green/50 transition-colors cursor-pointer">
                  <Upload className="w-8 h-8 text-terminal-gray/50 mx-auto mb-2" />
                  <p className="text-sm text-terminal-gray/50">{project.placeholder}</p>
                  <p className="text-xs text-terminal-gray/40 mt-1">Click to upload PDF, images, or links</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Team Planning & Deliverables */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-terminal-cyan mb-8 border-b border-terminal-gray/30 pb-4">
            Team Planning & Deliverables
          </h3>
          
          <div className="space-y-4">
            {teamDeliverables.map((item) => (
              <div
                key={item.id}
                className="border border-terminal-gray/30 hover:border-terminal-cyan/50 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleDeliverable(item.id)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-terminal-green" />
                    <span className="font-semibold text-terminal-cyan">{item.title}</span>
                  </div>
                  <div className="text-terminal-gray">
                    {expandedDeliverables.includes(item.id) ? (
                      <ChevronDown className="w-5 h-5" />
                    ) : (
                      <ChevronRight className="w-5 h-5" />
                    )}
                  </div>
                </button>
                
                {expandedDeliverables.includes(item.id) && (
                  <div className="px-4 pb-4">
                    <p className="text-terminal-gray/80 text-sm mb-4">
                      {item.description}
                    </p>
                    <div className="border-2 border-dashed border-terminal-gray/30 p-6 text-center hover:border-terminal-green/50 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-terminal-gray/50 mx-auto mb-2" />
                      <p className="text-sm text-terminal-gray/50">No files uploaded yet</p>
                      <p className="text-xs text-terminal-gray/40 mt-1">Click to upload documents</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
