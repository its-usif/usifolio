import { ArrowDown, ArrowRight } from "lucide-react";

const Node = ({ children, accent = false }: { children: React.ReactNode; accent?: boolean }) => (
  <div className={`flex min-h-10 items-center justify-center rounded border px-3 py-2 text-center text-[10px] leading-4 sm:text-xs ${accent ? "border-terminal-green/50 bg-terminal-green/10 text-terminal-green" : "border-terminal-gray/30 bg-background/70 text-terminal-gray"}`}>
    {children}
  </div>
);

const Down = () => <ArrowDown className="mx-auto h-4 w-4 text-terminal-cyan" aria-hidden="true" />;

export const MultiAgentDiagram = ({ compact = false }: { compact?: boolean }) => (
  <div className={`w-full bg-terminal-dark/80 font-mono ${compact ? "p-3" : "p-4 sm:p-6"}`} aria-label="Sanitized multi-agent workflow architecture">
    <div className="mb-3 flex items-center justify-between text-[9px] text-terminal-gray sm:text-[10px]">
      <span>ARCHITECTURE://WORKFLOW</span>
      <span className="text-terminal-green">SANITIZED</span>
    </div>
    <div className={`mx-auto grid max-w-xl items-center ${compact ? "gap-1.5" : "gap-2"}`}>
      <Node>User / Operational Request</Node><Down />
      <Node accent>Coordinator / Orchestrator</Node><Down />
      <Node>SOP / Workflow Selection</Node><Down />
      <Node accent>Structured Workflow</Node><Down />
      <div className="grid grid-cols-4 gap-1.5">
        {["Agent 01", "Agent 02", "Agent 03", "Agent 04"].map((agent) => <Node key={agent}>{agent}</Node>)}
      </div><Down />
      <Node>Actions / User Interaction / Escalation</Node><Down />
      <Node accent>Response</Node>
    </div>
  </div>
);

export const IvrDiagram = ({ compact = false }: { compact?: boolean }) => (
  <div className={`w-full bg-terminal-dark/80 font-mono ${compact ? "p-3" : "p-4 sm:p-6"}`} aria-label="Sanitized before and after IVR backend architecture">
    <div className="mb-4 flex items-center justify-between text-[9px] text-terminal-gray sm:text-[10px]">
      <span>REFACTOR://BEFORE_AFTER</span>
      <span className="text-terminal-green">SANITIZED</span>
    </div>
    <div className="grid gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
      <div>
        <p className="mb-2 text-[10px] text-terminal-magenta">BEFORE</p>
        <div className="space-y-1.5">
          {["A", "B", "C"].map((flow) => (
            <div className="grid grid-cols-[1fr_auto_1.4fr] items-center gap-1" key={flow}>
              <Node>IVR Flow {flow}</Node><ArrowRight className="h-3 w-3 text-terminal-gray" /><Node>Specific Logic {flow}</Node>
            </div>
          ))}
        </div>
      </div>
      <ArrowRight className="hidden h-5 w-5 text-terminal-cyan lg:block" aria-hidden="true" />
      <div>
        <p className="mb-2 text-[10px] text-terminal-green">AFTER</p>
        <div className="grid grid-cols-[1fr_auto_1.4fr] items-center gap-1">
          <div className="space-y-1.5">{["A", "B", "C"].map((flow) => <Node key={flow}>IVR Flow {flow}</Node>)}</div>
          <ArrowRight className="h-3 w-3 text-terminal-cyan" />
          <div className="space-y-1.5"><Node accent>Generalized IVR Backend</Node><Down /><Node>Shared Logic</Node></div>
        </div>
      </div>
    </div>
  </div>
);

export const WhoopFlowDiagram = () => (
  <div className="w-full bg-terminal-dark/80 p-4 font-mono sm:p-6" aria-label="Conceptual WHOOP tracker data flow">
    <div className="mb-4 text-[10px] text-terminal-gray">DATA_FLOW://CONCEPTUAL</div>
    <div className="mx-auto grid max-w-xl gap-2">
      <Node>WHOOP Hardware</Node><Down /><Node accent>Bluetooth Low Energy</Node><Down /><Node>iPhone / BLE Layer</Node><Down /><Node accent>Wearable Data</Node><Down />
      <div className="grid grid-cols-2 gap-2"><Node>Live Data</Node><Node>Historical WHOOP Data</Node></div>
      <Down /><Node>Personal Baseline / Data Layer</Node><Down /><Node accent>Custom Tracker UI</Node>
    </div>
  </div>
);