import { ArrowRight, Github } from "lucide-react";
import cargolensPreview from "@/assets/cargolens-interface.png";
import forelabLogo from "@/assets/forelab-logo.jpg";
import multiAgentPreview from "@/assets/bedrock-preview.jpg";
import labPreview from "@/assets/lab-portal-preview.jpg";
import verterePreview from "@/assets/vertere-preview.jpg";
import usifolioPreview from "@/assets/usifolio-preview.png";
import whoopDashboard from "@/assets/whoop-dashboard.jpg";
import esh7anPreview from "@/assets/esh7an-preview.jpg";
type Project = {
  title: string;
  context: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
  imageCaption?: string;
};

const projects: Project[] = [
  {
    title: "CargoLens",
    context: "Qai × Hugging Face Hackathon · Finalist team · November 2026",
    description: "Co-built with the ForeLab team: AI-assisted container-damage inspection using RF-DETR, OWLv2, and a fine-tuned Qwen3-VL verifier. I contributed to the core approach, model fine-tuning, and hosting as part of the team effort.",
    tech: ["Python", "Computer Vision", "RF-DETR", "Qwen3-VL", "Gradio", "Hugging Face"],
    image: cargolensPreview,
    link: "https://github.com/usifbuilds/cargolens",
  },
  {
    title: "ForeLab",
    context: "HBKU · Senior Design Project",
    description: "An ongoing senior design project for portable digital forensics on NVIDIA Jetson. I am working on the automated pipeline, Velociraptor integration, AI-assisted reporting, and the 3D-printed physical prototype.",
    tech: ["NVIDIA Jetson", "Velociraptor", "Zeek", "Python", "Local AI"],
    image: forelabLogo,
    link: "https://github.com/usifbuilds/forelab",
  },
  {
    title: "Multi-Agent AI System",
    context: "Snoonu · AI Operations Internship",
    description: "Implemented our team's multi-agent structure in AWS Bedrock, connecting workflow components with S3 and Lambda, building structured logic and a billing-check capability, and demonstrating the working prototype.",
    tech: ["AWS Bedrock", "Python", "AWS Lambda", "Amazon S3", "Multi-Agent Systems"],
    link: "https://github.com/usifbuilds/professional-case-studies/blob/main/case-studies/aws-bedrock-multi-agent.md",
    image: multiAgentPreview,
    imageCaption: "Architecture concept",
  },
  {
    title: "WHOOP BLE Tracker",
    context: "Personal Project",
    description: "Started after my WHOOP subscription ended and an open-source health platform did not support the device. I began exploring direct BLE communication and building the missing personal iPhone integration.",
    tech: ["Swift", "Bluetooth Low Energy", "iOS", "Wearable Systems", "Health Data"],
    link: "https://github.com/usifbuilds/whoop-ble-tracker",
    imageCaption: "UI concept · sample data",
    image: whoopDashboard,
  },
  {
    title: "Esh7an",
    context: "HBKU · Student Team Project",
    description: "A student team prototype exploring EV charging-station planning in Qatar using traffic data, GIS, and AI-based planning ideas. Developed with feedback from KAHRAMAA/Tarsheed mentors.",
    tech: ["AI", "GIS", "React"],
    link: "https://github.com/usifbuilds/esh7an",
    image: esh7anPreview,
  },
  {
    title: "Lab Portal",
    context: "HBKU · Laboratory System Assistant",
    description: "Contributed frontend and backend updates to HBKU's internal Lab Portal, helping organize and access laboratory resources.",
    tech: ["Frontend", "Backend", "Laboratory Resources"],
    image: labPreview,
    imageCaption: "Laboratory inventory reference",
    link: "https://github.com/usifbuilds/professional-case-studies/blob/main/case-studies/hbku-lab-portal.md",
  },
  {
    title: "Vertere Project",
    context: "HBKU · Facilities & Laboratory Systems",
    description: "Audited and maintained chemical inventory records in Vértere LIMS, checking digital records against physical laboratory stock and correcting discrepancies.",
    tech: ["Vértere LIMS", "Inventory Auditing", "Data Validation"],
    image: verterePreview,
    link: "https://github.com/usifbuilds/professional-case-studies/blob/main/case-studies/vertere-inventory-audit.md",
  },
  {
    title: "Usifolio",
    context: "Personal Project",
    description: "A personal portfolio to showcase my experience, technical projects, and interests in AI and automation. It brings my internship work, team projects, and personal experiments together in one place.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://github.com/its-usif/usifolio",
    image: usifolioPreview,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen overflow-x-hidden py-20">
      <div className="container mx-auto min-w-0 px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-terminal-green md:text-5xl"><span className="text-terminal-gray"># </span>Projects</h2>
          <div className="mx-auto h-1 w-24 bg-terminal-cyan" />
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-terminal-gray">A selection of team builds, internship work, and personal experiments in AI, automation, and engineering.</p>
        </div>

        <div className="grid grid-cols-1 auto-rows-auto gap-6 md:grid-cols-2 md:auto-rows-fr lg:grid-cols-3">
          {projects.map((project, index) => {
            const opensExternal = project.link?.startsWith("http") ?? false;
            return (
              <article
                key={project.title}
                className={`terminal-section group flex min-w-0 h-full flex-col overflow-hidden rounded-lg p-4 sm:p-5 ${opensExternal ? "cursor-pointer hover-glow" : ""}`}
                onClick={() => { if (opensExternal && project.link) window.open(project.link, "_blank", "noopener,noreferrer"); }}
              >
                <div className="mb-5 shrink-0">
                  <div className="relative aspect-video overflow-hidden rounded-lg border border-terminal-gray/20 bg-terminal-dark">
                    {project.imageCaption && <span className="absolute bottom-2 right-2 z-10 rounded bg-black/80 px-2 py-1 text-[9px] text-white/70">{project.imageCaption}</span>}
                    {project.image && <img src={project.image} alt={project.title === "ForeLab" ? "Original ForeLab project logo" : `${project.title} project preview`} loading={index < 2 ? "eager" : "lazy"} decoding="async" className={`h-full w-full transition duration-500 group-hover:scale-[1.02] ${project.title === "ForeLab" ? "object-contain bg-white" : "object-cover"}`} />}
                  </div>
                </div>

                <div className="flex min-w-0 flex-1 flex-col font-mono">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex shrink-0 items-center space-x-2 pt-1"><div className="h-3 w-3 rounded-full bg-terminal-green" /><div className="h-3 w-3 rounded-full bg-terminal-cyan" /><div className="h-3 w-3 rounded-full bg-terminal-magenta" /></div>
                  </div>
                  {project.context && <p className="mb-2 text-[10px] uppercase text-terminal-magenta sm:text-xs">{project.context}</p>}
                  <h3 className="mb-3 text-xl font-bold text-terminal-cyan transition-colors group-hover:text-terminal-green">{project.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-terminal-gray">{project.description}</p>
                  <div className="mb-4 mt-auto flex flex-wrap gap-x-2 gap-y-1 pt-2 text-xs">
                    <span className="text-terminal-magenta">tools / focus = [</span>
                    {project.tech.map((tech, index) => <span className="text-terminal-cyan" key={tech}>"{tech}"{index < project.tech.length - 1 && <span className="text-terminal-gray">,</span>}</span>)}
                    <span className="text-terminal-magenta">]</span>
                  </div>

                  {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={event => event.stopPropagation()} className="inline-flex items-center gap-2 text-xs text-terminal-green hover:text-terminal-cyan">VIEW ON GITHUB<ArrowRight className="h-4 w-4" /></a>}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a href="https://github.com/usifbuilds" target="_blank" rel="noopener noreferrer" className="hover-glow inline-flex items-center space-x-2 rounded border border-terminal-gray/30 px-6 py-3 font-mono text-terminal-gray transition-colors duration-300 hover:border-terminal-green/50 hover:text-terminal-green">
            <Github className="h-5 w-5" aria-hidden="true" /><span>Explore my GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
