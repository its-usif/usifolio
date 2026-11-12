import { Bluetooth, Database, FlaskConical, Code2 } from "lucide-react";

const views = {
  whoop: { icon: Bluetooth, title: "Wearable → iPhone", steps: ["BLE discovery", "Device connection", "Personal tracker"], caption: "INTEGRATION IN DEVELOPMENT" },
  lab: { icon: FlaskConical, title: "Lab Portal", steps: ["Lab resources", "Frontend + backend", "Internal access"], caption: "PROJECT OVERVIEW · INTERNAL TOOL" },
  vertere: { icon: Database, title: "Records that match reality.", steps: ["Physical stock", "Record validation", "Vértere LIMS"], caption: "PROJECT OVERVIEW · INVENTORY DATA" },
  portfolio: { icon: Code2, title: "user@usifolio:~$", steps: ["React", "TypeScript", "Tailwind CSS"], caption: "THE SITE YOU'RE EXPLORING" },
};

export default function ProjectPreview({ kind }: { kind: keyof typeof views }) {
  const view = views[kind];
  return <div className="flex h-full flex-col justify-between bg-terminal-dark p-5 sm:p-7">
    <div className="flex items-center justify-between text-[9px] tracking-widest text-terminal-gray"><span>{view.caption}</span><view.icon className="h-5 w-5 shrink-0 text-terminal-cyan" /></div>
    <div className="my-5 text-xl font-bold text-terminal-green sm:text-2xl">{view.title}</div>
    <div className="flex flex-wrap gap-2">{view.steps.map((step, i) => <span key={step} className="rounded border border-terminal-gray/20 px-2 py-1 text-[10px] text-terminal-cyan"><span className="mr-2 text-terminal-gray">0{i + 1}</span>{step}</span>)}</div>
  </div>;
}
