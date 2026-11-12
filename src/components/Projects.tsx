import { useState } from "react";
import { ArrowRight, Github } from "lucide-react";
import cargolensPreview from "@/assets/cargolens-preview.jpg";
import forelabLogo from "@/assets/forelab-logo.jpg";
import multiAgentPreview from "@/assets/bedrock-preview.jpg";
import labPreview from "@/assets/lab-portal-preview.jpg";
import verterePreview from "@/assets/vertere-preview.jpg";
import usifolioPreview from "@/assets/usifolio-preview.png";
import whoopDashboard from "@/assets/whoop-dashboard.jpg";
import esh7anPreview from "@/assets/esh7an-preview.jpg";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MultiAgentDiagram, WhoopFlowDiagram } from "@/components/ProjectDiagrams";

type DetailId = "multi-agent" | "whoop";

type Project = {
  title: string;
  context: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
  imageCaption?: string;
  detailId?: DetailId;
};

const projects: Project[] = [
  {
    title: "CargoLens",
    context: "Qai × Hugging Face Hackathon · Finalist team · November 2026",
    description: "Co-built with the ForeLab team: AI-assisted container-damage inspection using RF-DETR, OWLv2, and a fine-tuned Qwen3-VL verifier. The bilingual Gradio demo highlights detections, flags uncertain cases for review, and generates English or Arabic PDF reports.",
    tech: ["Python", "Computer Vision", "RF-DETR", "Qwen3-VL", "Gradio"],
    image: cargolensPreview,
    link: "https://huggingface.co/spaces/Omar111199/team-qh-109-container-inspect-app",
  },
  {
    title: "ForeLab",
    context: "HBKU · Senior Design Project",
    description: "A senior design project developing a portable digital-forensics system on NVIDIA Jetson hardware. The aim is to run analysis tools and AI-assisted incident reporting locally, without sending evidence to cloud services.",
    tech: ["NVIDIA Jetson", "Local AI", "Digital Forensics", "Embedded Systems"],
    image: forelabLogo,
  },
  {
    title: "Multi-Agent AI System",
    context: "Snoonu · AI Operations Internship",
    description: "Worked on an AWS Bedrock multi-agent architecture during my Snoonu internship, translating operational procedures into structured workflows with states, actions, guardrails, and escalation paths.",
    tech: ["AWS Bedrock", "Python", "Multi-Agent Systems", "AI", "Workflow Orchestration"],
    detailId: "multi-agent",
    image: multiAgentPreview,
    imageCaption: "Architecture concept",
  },
  {
    title: "WHOOP BLE Tracker",
    context: "Personal Project",
    description: "Started after my WHOOP subscription ended and an open-source health platform did not support the device. I began exploring direct BLE communication and building the missing personal iPhone integration.",
    tech: ["Swift", "Bluetooth Low Energy", "iOS", "Wearable Systems", "Health Data"],
    detailId: "whoop",
    imageCaption: "UI concept · sample data",
    image: whoopDashboard,
  },
  {
    title: "Esh7an",
    context: "HBKU · Student Team Project",
    description: "A student team prototype exploring EV charging-station planning in Qatar using traffic data, GIS, and AI-based planning ideas. Developed with feedback from KAHRAMAA/Tarsheed mentors.",
    tech: ["AI", "GIS", "React"],
    link: "https://esh7an.lovable.app",
    image: esh7anPreview,
  },
  {
    title: "Lab Portal",
    context: "HBKU · Laboratory System Assistant",
    description: "Contributed frontend and backend updates to HBKU's internal Lab Portal, helping organize and access laboratory resources.",
    tech: ["Frontend", "Backend", "Laboratory Resources"],
    image: labPreview,
    imageCaption: "Laboratory inventory reference",
  },
  {
    title: "Vertere Project",
    context: "HBKU · Facilities & Laboratory Systems",
    description: "Audited and maintained chemical inventory records in Vértere LIMS, checking digital records against physical laboratory stock and correcting discrepancies.",
    tech: ["Vértere LIMS", "Inventory Auditing", "Data Validation"],
    image: verterePreview,
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

const Section = ({ number, title, children }: { number: string; title: string; children: React.ReactNode }) => (
  <section className="border-t border-terminal-gray/20 pt-4">
    <h4 className="mb-2 text-xs font-bold text-terminal-cyan">{number} / {title}</h4>
    <div className="text-sm leading-relaxed text-terminal-gray">{children}</div>
  </section>
);

const ProjectDetails = ({ id }: { id: DetailId }) => {
  if (id === "multi-agent") return (
    <>
      <Section number="01" title="OVERVIEW">Internship work on an AWS Bedrock multi-agent architecture for structured operational workflows.</Section>
      <Section number="02" title="THE PROBLEM">Operational procedures need explicit states, transitions, guardrails, and escalation paths before they can be executed reliably by an agent system.</Section>
      <Section number="03" title="MY CONTRIBUTION">Translated SOP logic into machine-readable workflows containing states, variables, guardrails, transitions, escalation conditions, and executable actions.</Section>
      <Section number="04" title="ARCHITECTURE / APPROACH"><p className="mb-3">A simplified illustration of the approach, rather than a production architecture or screenshot.</p><MultiAgentDiagram /></Section>
      <Section number="05" title="TECHNOLOGIES">AWS Bedrock · Python · Multi-Agent Systems · AI · Workflow Orchestration</Section>
    </>
  );

  if (id === "whoop") return (
    <>
      <Section number="01" title="OVERVIEW">A personal project exploring direct BLE communication between my WHOOP device and an iPhone. The dashboard cover is a UI concept with sample data, not a screenshot of a finished tracker.</Section>
      <Section number="02" title="THE PROBLEM">After my WHOOP subscription ended, the open-source health platform I wanted to use did not support the device. I began working on the missing integration instead of leaving the hardware unused.</Section>
      <Section number="03" title="AREAS EXPLORED">
        <ul className="grid list-inside list-disc gap-1 sm:grid-cols-2">
          <li>BLE device communication</li><li>Service and characteristic discovery</li><li>Connection and handshake behavior</li><li>Synchronization and notifications</li><li>Wearable data handling</li><li>Custom tracker UI development</li>
        </ul>
        <p className="mt-3">The work explores device connectivity and personal data handling; it does not establish validated recovery or health measurements.</p>
      </Section>
      <Section number="04" title="ARCHITECTURE / APPROACH"><WhoopFlowDiagram /></Section>
      <Section number="05" title="TECHNOLOGIES">Swift · Bluetooth Low Energy · iOS · Wearable Systems · Health Data</Section>
      <Section number="06" title="CONTEXT"><span className="text-terminal-cyan">PERSONAL PROJECT</span></Section>
    </>
  );

  return null;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<DetailId | null>(null);
  const selected = projects.find((project) => project.detailId === selectedProject);

  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-terminal-green md:text-5xl"><span className="text-terminal-gray"># </span>Projects</h2>
          <div className="mx-auto h-1 w-24 bg-terminal-cyan" />
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-terminal-gray">A selection of team builds, internship work, and personal experiments in AI, automation, and engineering.</p>
        </div>

        <div className="grid auto-rows-fr gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const opensExternal = project.link?.startsWith("http") ?? false;
            return (
              <article
                key={project.title}
                className={`terminal-section group flex h-full flex-col overflow-hidden rounded-lg p-4 sm:p-5 ${opensExternal ? "cursor-pointer hover-glow" : ""}`}
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

                  {project.detailId ? (
                    <Button variant="ghost" className="h-auto p-0 text-xs text-terminal-green hover:bg-transparent hover:text-terminal-cyan" onClick={(event) => { event.stopPropagation(); setSelectedProject(project.detailId ?? null); }}>
                      VIEW PROJECT <ArrowRight aria-hidden="true" />
                    </Button>
                  ) : project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={event => event.stopPropagation()} className="inline-flex items-center gap-2 text-xs text-terminal-green hover:text-terminal-cyan">{project.title === "Usifolio" ? "VIEW SOURCE" : "OPEN DEMO"}<ArrowRight className="h-4 w-4" /></a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a href="https://github.com/its-usif" target="_blank" rel="noopener noreferrer" className="hover-glow inline-flex items-center space-x-2 rounded border border-terminal-gray/30 px-6 py-3 font-mono text-terminal-gray transition-colors duration-300 hover:border-terminal-green/50 hover:text-terminal-green">
            <Github className="h-5 w-5" aria-hidden="true" /><span>Explore my GitHub</span>
          </a>
        </div>
      </div>

      <Dialog open={selectedProject !== null} onOpenChange={(open) => { if (!open) setSelectedProject(null); }}>
        <DialogContent className="max-h-[90vh] w-[calc(100%-1.5rem)] max-w-4xl overflow-y-auto border-terminal-green/30 bg-background p-4 font-mono sm:p-6">
          {selected && selected.detailId && (
            <>
              <DialogHeader className="pr-8 text-left">
                <DialogDescription className="text-xs uppercase text-terminal-magenta">{selected.context}</DialogDescription>
                <DialogTitle className="text-xl text-terminal-green sm:text-2xl">{selected.title}</DialogTitle>
              </DialogHeader>
              <div className="space-y-5"><ProjectDetails id={selected.detailId} /></div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
