import avatar from "@/assets/yousif-avatar.png";

const About = () => (
  <section id="about" className="min-h-screen py-20">
    <div className="container mx-auto max-w-6xl px-6">
      <div className="mb-10 text-sm text-terminal-green"># about.txt</div>
      <div className="grid items-center gap-10 md:grid-cols-[240px_1fr] md:gap-16">
        <div className="relative mx-auto w-56">
          <div className="absolute inset-6 rounded-full bg-terminal-green/10 blur-3xl" />
          <img src={avatar} width="500" height="500" alt="Yousif's original green pixel avatar waving hello" className="relative w-full [image-rendering:pixelated]" />
          <p className="mt-4 text-center text-xs text-terminal-green">user@usifolio:~$ whoami</p>
        </div>
        <div>
          <h1 className="mb-6 text-3xl font-bold leading-tight text-foreground sm:text-4xl">Curious about AI.<br /><span className="text-terminal-green">Focused on making it useful.</span></h1>
          <div className="space-y-4 text-sm leading-7 text-terminal-gray sm:text-base">
            <p>I'm Yousif, a Computer Engineering student at Hamad Bin Khalifa University in Qatar. My main interest is AI and automation: understanding how work happens, finding the repetitive parts, and building systems that help people get things done.</p>
            <p>During my AI Operations internship at Snoonu, I worked on agent workflows with AWS Bedrock and refactored a Python IVR backend. That experience shaped how I approach automation: clear logic, reusable components, and a way to handle exceptions matter as much as the model.</p>
            <p>I also enjoy connecting software with the physical world. With my team, I co-built CargoLens for AI-assisted container-damage inspection at the Qai × Hugging Face hackathon. My senior design project, ForeLab, explores portable digital forensics and local AI on NVIDIA Jetson hardware.</p>
            <p>My technical experience spans Python, APIs, React, databases, digital systems, and hands-on laboratory data work. I like learning by building, testing what actually works, and turning an idea into something someone can use.</p>
          </div>
        </div>
      </div>
      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {[["01 / AI & automation", "Agent workflows, computer vision, and practical AI tools."], ["02 / Software & systems", "Python backends, APIs, React interfaces, and data workflows."], ["03 / Hardware & engineering", "Embedded computing, digital systems, and software that interacts with devices."]].map(([title, text]) => <div key={title} className="terminal-section rounded-lg p-5"><h2 className="mb-3 text-sm text-terminal-cyan">{title}</h2><p className="text-sm leading-6 text-terminal-gray">{text}</p></div>)}
      </div>
    </div>
  </section>
);
export default About;
