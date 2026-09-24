import { useState } from "react";
import { ArrowRight, Github } from "lucide-react";
import usifolioPreview from "@/assets/usifolio-preview.png";
import labPortalPreview from "@/assets/lab-portal-preview.jpg";
import verterePreview from "@/assets/vertere-preview.jpg";
import esh7anPreview from "@/assets/esh7an-preview.jpg";
import whoopPreview from "@/assets/whoop-ble-tracker.png.asset.json";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { IvrDiagram, MultiAgentDiagram, WhoopFlowDiagram } from "@/components/ProjectDiagrams";

type DetailId = "multi-agent" | "whoop" | "ivr";

type Project = {
  title: string;
  context?: string;
  description: string;
  tech: string[];
  status: string;
  label?: string;
  link?: string;
  image?: string;
  detailId?: DetailId;
  visual?: "multi-agent" | "ivr";
};

const projects: Project[] = [
  {
    title: "Multi-Agent AI System",
    context: "Snoonu · AI Operations Internship",
    description: "Designed and developed an AWS Bedrock-based multi-agent architecture that coordinates specialized AI agents to execute structured operational workflows.",
    tech: ["AWS Bedrock", "Python", "Multi-Agent Systems", "AI", "Workflow Orchestration"],
    status: "Proprietary",
    label: "INTERNSHIP PROJECT · PROPRIETARY",
    detailId: "multi-agent",
    visual: "multi-agent",
  },
  {
    title: "WHOOP BLE Tracker",
    context: "Personal Project",
    description: "Started after my WHOOP subscription ended and an open-source health platform did not support the device. I began exploring direct BLE communication and building the missing personal iPhone integration.",
    tech: ["Swift", "Bluetooth Low Energy", "iOS", "Wearable Systems", "Health Data"],
    status: "In Development",
    label: "PERSONAL PROJECT · IN DEVELOPMENT",
    detailId: "whoop",
    image: whoopPreview.url,
  },
  {
    title: "Esh7an",
    description: "EV Charging Optimization Tool — AI- and GIS-based tool using traffic flow data to support EV charging station planning in collaboration with Tarsheed/Kahramaa mentors.",
    tech: ["AI", "GIS", "React"],
    status: "Live",
    link: "https://esh7an.lovable.app",
    image: esh7anPreview,
  },
  {
    title: "IVR Backend Refactoring",
    context: "Snoonu · AI Operations Internship",
    description: "Refactored an existing Python IVR backend into a more generalized architecture, reducing use-case-specific logic and making the system easier to extend across different call flows.",
    tech: ["Python", "Backend", "APIs", "IVR", "Software Architecture"],
    status: "Proprietary",
    label: "INTERNSHIP PROJECT · PROPRIETARY",
    detailId: "ivr",
    visual: "ivr",
  },
  {
    title: "Lab Portal",
    description: "Internal tool for managing lab resources, updated frontend/backend",
    tech: ["React", "Node.js", "Database"],
    status: "Completed",
    link: "its an internal and we cant view it",
    image: labPortalPreview,
  },
  {
    title: "Vertere Project",
    description: "Inventory optimization and database alignment using Vertere LIMS",
    tech: ["Python", "Database", "LIMS"],
    status: "Completed",
    link: "https://hbku.vimenterprise.com/Login.aspx",
    image: verterePreview,
  },
  {
    title: "Usifolio",
    description: "This exact site, self-built for branding",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    status: "Live",
    link: "you are here already",
    image: usifolioPreview,
  },
];

const statusClass = (status: string) => {
  if (status === "Live") return "bg-terminal-green/20 text-terminal-green";
  if (status === "In Development") return "bg-terminal-cyan/20 text-terminal-cyan";
  return "bg-terminal-magenta/20 text-terminal-magenta";
};

const Section = ({ number, title, children }: { number: string; title: string; children: React.ReactNode }) => (
  <section className="border-t border-terminal-gray/20 pt-4">
    <h4 className="mb-2 text-xs font-bold text-terminal-cyan">{number} / {title}</h4>
    <div className="text-sm leading-relaxed text-terminal-gray">{children}</div>
  </section>
);

const ProjectDetails = ({ id }: { id: DetailId }) => {
  if (id === "multi-agent") return (
    <>
      <Section number="01" title="OVERVIEW">An AWS Bedrock-based architecture for executing structured operational workflows through coordinated, specialized AI agents.</Section>
      <Section number="02" title="THE PROBLEM">Operational procedures need explicit states, transitions, guardrails, and escalation paths before they can be executed reliably by an agent system.</Section>
      <Section number="03" title="MY CONTRIBUTION">Translated SOP logic into machine-readable workflows containing states, variables, guardrails, transitions, escalation conditions, and executable actions.</Section>
      <Section number="04" title="ARCHITECTURE / APPROACH"><MultiAgentDiagram /></Section>
      <Section number="05" title="TECHNOLOGIES">AWS Bedrock · Python · Multi-Agent Systems · AI · Workflow Orchestration</Section>
      <Section number="06" title="STATUS"><span className="text-terminal-magenta">INTERNSHIP PROJECT · PROPRIETARY</span></Section>
    </>
  );

  if (id === "whoop") return (
    <>
      <Section number="01" title="OVERVIEW">A personal iPhone tracker built around functional wearable hardware I already owned.</Section>
      <Section number="02" title="THE PROBLEM">After my WHOOP subscription ended, the open-source health platform I wanted to use did not support the device. I began working on the missing integration instead of leaving the hardware unused.</Section>
      <Section number="03" title="MY CONTRIBUTION">
        <ul className="grid list-inside list-disc gap-1 sm:grid-cols-2">
          <li>BLE device communication</li><li>Service and characteristic discovery</li><li>Connection and handshake behavior</li><li>Synchronization and notifications</li><li>Wearable data handling</li><li>Custom tracker UI development</li>
        </ul>
        <p className="mt-3">Historical WHOOP data helps preserve my personal baseline and continuity; it is not used to claim medical or scientific accuracy.</p>
      </Section>
      <Section number="04" title="ARCHITECTURE / APPROACH"><WhoopFlowDiagram /></Section>
      <Section number="05" title="TECHNOLOGIES">Swift · Bluetooth Low Energy · iOS · Wearable Systems · Health Data</Section>
      <Section number="06" title="STATUS"><span className="text-terminal-cyan">PERSONAL PROJECT · IN DEVELOPMENT</span></Section>
      <Section number="07" title="VISUALS"><img src={whoopPreview.url} alt="Current WHOOP BLE tracker interface" className="mt-2 h-auto w-full rounded border border-terminal-gray/20 object-contain" /></Section>
    </>
  );

  return (
    <>
      <Section number="01" title="OVERVIEW">A Python IVR backend refactor focused on reusable architecture across different call flows.</Section>
      <Section number="02" title="THE PROBLEM">The existing implementation contained logic tied closely to individual use cases, making repeated behavior harder to reuse and extend.</Section>
      <Section number="03" title="MY CONTRIBUTION">Restructured common behavior into a generalized backend and tested the refactored implementation through API requests during development.</Section>
      <Section number="04" title="ARCHITECTURE / APPROACH"><IvrDiagram /></Section>
      <Section number="05" title="TECHNOLOGIES">Python · Backend · APIs · IVR · Software Architecture</Section>
      <Section number="06" title="STATUS"><span className="text-terminal-magenta">INTERNSHIP PROJECT · PROPRIETARY</span></Section>
    </>
  );
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
        </div>

        <div className="space-y-8">
          {projects.map((project) => {
            const opensExternal = project.link?.startsWith("http") ?? false;
            return (
              <article
                key={project.title}
                className={`terminal-section group flex flex-col gap-6 rounded-lg p-4 sm:p-6 md:flex-row ${opensExternal ? "cursor-pointer hover-glow" : ""}`}
                onClick={() => { if (opensExternal && project.link) window.open(project.link, "_blank", "noopener,noreferrer"); }}
              >
                <div className="md:w-1/3">
                  <div className={`overflow-hidden rounded-lg border border-terminal-gray/20 bg-terminal-gray/10 ${project.title === "WHOOP BLE Tracker" ? "aspect-[802/631]" : "aspect-video"}`}>
                    {project.image && <img src={project.image} alt={`${project.title} preview`} className={`h-full w-full ${project.title === "WHOOP BLE Tracker" ? "object-contain" : "object-cover"}`} />}
                    {project.visual === "multi-agent" && <MultiAgentDiagram compact />}
                    {project.visual === "ivr" && <IvrDiagram compact />}
                  </div>
                </div>

                <div className="min-w-0 font-mono md:w-2/3">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="flex shrink-0 items-center space-x-2 pt-1"><div className="h-3 w-3 rounded-full bg-terminal-green" /><div className="h-3 w-3 rounded-full bg-terminal-cyan" /><div className="h-3 w-3 rounded-full bg-terminal-magenta" /></div>
                    <div className={`max-w-full rounded px-2 py-1 text-right text-[10px] sm:text-xs ${statusClass(project.status)}`}>{project.label ?? project.status}</div>
                  </div>
                  {project.context && <p className="mb-2 text-[10px] uppercase text-terminal-magenta sm:text-xs">{project.context}</p>}
                  <h3 className="mb-3 text-xl font-bold text-terminal-cyan transition-colors group-hover:text-terminal-green">{project.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-terminal-gray">{project.description}</p>
                  <div className="mb-4 flex flex-wrap gap-x-2 gap-y-1 text-xs">
                    <span className="text-terminal-magenta">stack = [</span>
                    {project.tech.map((tech, index) => <span className="text-terminal-cyan" key={tech}>"{tech}"{index < project.tech.length - 1 && <span className="text-terminal-gray">,</span>}</span>)}
                    <span className="text-terminal-magenta">]</span>
                  </div>

                  {project.detailId ? (
                    <Button variant="ghost" className="h-auto p-0 text-xs text-terminal-green hover:bg-transparent hover:text-terminal-cyan" onClick={(event) => { event.stopPropagation(); setSelectedProject(project.detailId ?? null); }}>
                      VIEW PROJECT <ArrowRight aria-hidden="true" />
                    </Button>
                  ) : project.link ? (
                    <div className="break-all text-xs"><span className="text-terminal-green">$</span><span className="text-terminal-gray"> view_project --url=</span><span className="text-terminal-cyan hover:underline">{project.link}</span></div>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a href="https://github.com/its-usif" target="_blank" rel="noopener noreferrer" className="hover-glow inline-flex items-center space-x-2 rounded border border-terminal-gray/30 px-6 py-3 font-mono text-terminal-gray transition-colors duration-300 hover:border-terminal-green/50 hover:text-terminal-green">
            <Github className="h-5 w-5" aria-hidden="true" /><span>View all projects on GitHub</span>
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