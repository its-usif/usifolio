import { Download, ExternalLink, FileText } from "lucide-react";

const RESUME_FILE_ID = "1xJBvaqCdzv8720KT0dTEaETfuc2_TDKt";
const RESUME_PREVIEW_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/preview`;
const RESUME_OPEN_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/view`;
const RESUME_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`;

const Resume = () => (
  <section id="resume" className="min-h-screen overflow-x-hidden py-12 sm:py-20">
    <div className="container mx-auto max-w-6xl px-4 sm:px-6">
      <div className="mb-8 text-center sm:mb-12">
        <div className="mb-4 text-sm text-terminal-green"># resume</div>
        <h1 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
          My experience, <span className="text-terminal-green">in one place.</span>
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-terminal-gray sm:text-base">
          This page is connected to my master CV on Google Drive, so it always shows the current version.
        </p>
      </div>

      <div className="terminal-section overflow-hidden rounded-lg">
        <div className="relative z-10 flex flex-col gap-4 border-b border-terminal-gray/20 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
          <div className="flex min-w-0 items-center gap-3">
            <div className="rounded border border-terminal-green/40 bg-terminal-green/10 p-2 text-terminal-green">
              <FileText className="h-5 w-5" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm text-terminal-cyan sm:text-base">Yousif Ahmed · Master CV</p>
              <p className="mt-1 text-xs text-terminal-gray">Live from Google Drive</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              href={RESUME_OPEN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-terminal-gray/30 px-3 py-2 text-xs text-terminal-gray transition-colors hover:border-terminal-cyan/60 hover:text-terminal-cyan"
            >
              Open in Drive <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={RESUME_DOWNLOAD_URL}
              className="inline-flex items-center gap-2 rounded border border-terminal-green/50 px-3 py-2 text-xs text-terminal-green transition-colors hover:bg-terminal-green/10"
            >
              Download <Download className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="relative z-10 bg-white">
          <iframe
            src={RESUME_PREVIEW_URL}
            title="Yousif Ahmed resume"
            className="h-[72vh] min-h-[560px] w-full sm:h-[78vh]"
            loading="lazy"
            allow="autoplay"
          />
        </div>
      </div>

      <p className="mt-4 text-center text-xs leading-5 text-terminal-gray">
        If the preview does not load, use “Open in Drive” to view the current version directly.
      </p>
    </div>
  </section>
);

export default Resume;
