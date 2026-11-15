import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { Send, UserRound } from "lucide-react";
import avatar from "@/assets/yousif-avatar-clean.png";

type ChatMessage = { role: "user" | "assistant"; content: string };

const API_URL =
  (import.meta.env.VITE_ASK_USIF_API_URL as string | undefined) ||
  "https://ask-usif.youssifalkarim.workers.dev";

const suggestions = [
  "What AI experience do you have?",
  "Tell me about CargoLens.",
  "What did you work on at Snoonu?",
  "Which technologies have you used?",
];

const initialMessage: ChatMessage = {
  role: "assistant",
  content: "Hey, I’m Yousif. Feel free to ask me.",
};

const AskUsif = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const chat = chatScrollRef.current;
    if (chat) chat.scrollTo({ top: chat.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading, error]);

  const sendMessage = async (question: string) => {
    const trimmed = question.trim();
    if (!trimmed || isLoading) return;

    const userMessage: ChatMessage = { role: "user", content: trimmed };
    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setError(null);
    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(-7) }),
      });
      const data = await response.json() as { answer?: string; error?: string };
      if (!response.ok || !data.answer) throw new Error(data.error || "The assistant is unavailable right now.");
      setMessages((current) => [...current, { role: "assistant", content: data.answer! }]);
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : "The assistant is unavailable right now.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    void sendMessage(input);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void sendMessage(input);
    }
  };

  return (
    <section id="ask" className="relative min-h-[calc(100vh-4rem)] overflow-hidden py-8 sm:py-12 lg:py-16">
      <div className="matrix-lines" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,hsl(var(--terminal-green)/0.09),transparent_45%)]" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-6 text-center sm:mb-8">
          <h1 className="text-3xl font-bold text-foreground sm:text-5xl">Talk to me<span className="text-terminal-green">.</span></h1>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-terminal-gray sm:text-base">Skip the scrolling. Ask me directly about my work, projects, and technical experience.</p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[13rem_minmax(0,1fr)] xl:grid-cols-[13rem_minmax(0,1fr)_14rem]">
          <aside className="pointer-events-none hidden rounded-lg border border-terminal-green/20 bg-background/75 p-4 font-mono text-xs shadow-[0_0_35px_rgba(0,255,65,0.08)] backdrop-blur lg:block">
            <div className="mb-3 text-terminal-green">// CURRENT_FOCUS</div>
            <div className="space-y-2 text-terminal-gray"><p>AI + automation</p><p>Agent workflows</p><p>Computer vision</p></div>
          </aside>

          <div className="terminal-section min-w-0 overflow-hidden rounded-xl border-terminal-green/30 shadow-[0_0_60px_rgba(0,255,65,0.08)]">
          <div className="flex items-center justify-between border-b border-terminal-gray/20 px-4 py-3 text-xs sm:px-6">
            <div className="flex items-center gap-3">
              <img src={avatar} alt="Yousif" className="h-11 w-11 object-contain [image-rendering:pixelated]" />
              <div><div className="text-terminal-cyan">YOUSIF</div><div className="mt-0.5 flex items-center gap-1.5 text-[10px] text-terminal-gray"><span className="h-1.5 w-1.5 rounded-full bg-terminal-green" />online</div></div>
            </div>
            <span className="hidden text-terminal-gray sm:block">ASK ME ANYTHING ABOUT MY WORK</span>
          </div>

          <div ref={chatScrollRef} className="h-[360px] space-y-5 overflow-y-auto p-4 sm:h-[390px] sm:p-6" aria-live="polite">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                {message.role === "assistant" && <img src={avatar} alt="" className="mt-1 h-10 w-10 shrink-0 object-contain [image-rendering:pixelated]" />}
                <div className={`max-w-[82%] rounded border px-4 py-3 text-sm leading-6 ${message.role === "user" ? "border-terminal-cyan/30 bg-terminal-cyan/10 text-foreground" : "border-terminal-gray/20 bg-black/30 text-terminal-gray"}`}>{message.content}</div>
                {message.role === "user" && <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded border border-terminal-cyan/30 text-terminal-cyan"><UserRound className="h-4 w-4" /></div>}
              </div>
            ))}
            {isLoading && <div className="flex items-center gap-3 text-sm text-terminal-green"><img src={avatar} alt="" className="h-9 w-9 object-contain [image-rendering:pixelated]" /><span className="animate-pulse">typing...</span></div>}
            {error && <p className="rounded border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">{error}</p>}
          </div>

          <div className="border-t border-terminal-gray/20 p-4 sm:p-6">
            {messages.length === 1 && <div className="mb-4 flex flex-wrap gap-2">{suggestions.map((suggestion) => <button key={suggestion} type="button" onClick={() => void sendMessage(suggestion)} className="rounded border border-terminal-gray/20 px-3 py-2 text-left text-xs text-terminal-gray transition hover:border-terminal-cyan/50 hover:text-terminal-cyan">{suggestion}</button>)}</div>}
            <form onSubmit={handleSubmit} className="flex items-end gap-3">
              <textarea value={input} onChange={(event) => setInput(event.target.value.slice(0, 500))} onKeyDown={handleKeyDown} rows={2} placeholder="Ask me something..." aria-label="Question for Yousif" className="min-h-[56px] flex-1 resize-none rounded border border-terminal-gray/30 bg-black/40 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-terminal-gray/60 focus:border-terminal-green/60" />
              <button type="submit" disabled={!input.trim() || isLoading} aria-label="Send question" className="flex h-14 w-14 shrink-0 items-center justify-center rounded border border-terminal-green text-terminal-green transition hover:bg-terminal-green hover:text-background disabled:cursor-not-allowed disabled:opacity-40"><Send className="h-5 w-5" /></button>
            </form>
          </div>
          </div>

          <aside className="pointer-events-none hidden rounded-lg border border-terminal-cyan/20 bg-background/75 p-4 font-mono text-xs shadow-[0_0_35px_rgba(0,229,255,0.08)] backdrop-blur xl:block">
            <div className="mb-3 text-terminal-cyan">// ASK_ME_ABOUT</div>
            <div className="flex flex-wrap gap-2 text-terminal-gray"><span className="rounded border border-terminal-gray/20 px-2 py-1">CargoLens</span><span className="rounded border border-terminal-gray/20 px-2 py-1">ForeLab</span><span className="rounded border border-terminal-gray/20 px-2 py-1">Snoonu</span></div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AskUsif;
