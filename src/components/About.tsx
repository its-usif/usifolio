import avatar from "@/assets/yousif-avatar-clean.png";

const About = () => (
  <section id="about" className="min-h-screen py-20">
    <div className="container mx-auto max-w-6xl px-6">
      <div className="mb-10 text-sm text-terminal-green"># about.txt</div>
      <div className="grid items-center gap-10 md:grid-cols-[240px_1fr] md:gap-16">
        <div className="relative mx-auto w-56">
          <div className="absolute inset-6 rounded-full bg-terminal-green/10 blur-3xl" />
          <img src={avatar} width="500" height="500" alt="Yousif's green pixel avatar" className="relative w-full [image-rendering:pixelated]" />
          <p className="mt-4 text-center text-xs text-terminal-green">user@usifolio:~$ whoami</p>
        </div>
        <div>
          <h1 className="mb-6 text-3xl font-bold leading-tight text-foreground sm:text-4xl">Interested in difficult problems.<br /><span className="text-terminal-green">Persistent enough to keep working at them.</span></h1>
          <div className="space-y-4 text-sm leading-7 text-terminal-gray sm:text-base">
            <p>I'm Yousif, a senior Computer Engineering student at Hamad Bin Khalifa University, cross-registered at Texas A&amp;M University at Qatar, with an expected graduation date of May 2027.</p>
            <p>I'm especially interested in AI and automation because repetitive work should not consume resources when a well-designed system can handle it more consistently. I enjoy understanding a real process, finding where effort is being wasted, and turning that into a useful workflow or product.</p>
            <p>During my AI Operations internship at Snoonu, I took responsibility for implementing our team's multi-agent design in AWS Bedrock. I worked with S3, Lambda functions, workflow logic, and a billing-check tool, then demonstrated the working prototype. My senior design work now focuses on ForeLab's automated forensic pipeline, Velociraptor integration, AI-assisted reporting, and the physical prototype.</p>
            <p>I do not expect to know everything immediately, but I give difficult problems my full effort and I do not give up easily. Outside engineering, I'm a big aviation and music fan, and I enjoy football and padel.</p>
          </div>
        </div>
      </div>
      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {[["01 / AI & automation", "AWS Bedrock, agent workflows, LLM pipelines, computer vision, and practical automation."], ["02 / Software & systems", "Python, APIs, LangGraph, MongoDB, React, web infrastructure, and Linux."], ["03 / Engineering", "Verilog, Arduino, MATLAB, digital systems, NVIDIA Jetson, and forensic tooling."]].map(([title, text]) => <div key={title} className="terminal-section rounded-lg p-5"><h2 className="mb-3 text-sm text-terminal-cyan">{title}</h2><p className="text-sm leading-6 text-terminal-gray">{text}</p></div>)}
      </div>
    </div>
  </section>
);
export default About;
