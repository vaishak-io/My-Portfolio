import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal, Check, Copy } from 'lucide-react';
import type { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const handleCopyCommand = () => {
    if (project.demoCommand) {
      navigator.clipboard.writeText(project.demoCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl rounded-2xl bg-[#0d1117] border border-zinc-800 text-zinc-200 shadow-2xl overflow-hidden"
        >
          {/* Top header bar */}
          <div className="flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/60 px-6 py-4">
            <div className="flex items-center gap-3">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                  {project.category}
                </span>
                <span className="text-zinc-600">•</span>
                <span className="text-xs font-mono text-zinc-400">
                  Status: {project.status}
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            {/* Title & subtitle */}
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-100">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-400 mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Architecture Badges */}
            <div className="flex flex-wrap gap-2">
              {project.architectureBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 text-xs font-mono rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300"
                >
                  ⚡ {badge}
                </span>
              ))}
            </div>

            {/* Detailed Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono">
                System Architecture &amp; Methodology
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Technical Highlights */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono">
                Key Defensive &amp; Technical Highlights
              </h4>
              <div className="grid grid-cols-1 gap-2.5">
                {project.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-zinc-900/60 border border-zinc-800/70 text-xs text-zinc-300"
                  >
                    <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                      <Check className="h-2.5 w-2.5" />
                    </div>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated Live Telemetry Log */}
            {project.telemetryLog && (
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 text-emerald-400" />
                    <span className="text-xs font-mono text-zinc-300 font-medium">
                      Simulated Operational Telemetry
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-500/80 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    LIVE_LOG_BUFFER
                  </span>
                </div>

                <div className="rounded-xl bg-black/80 border border-zinc-800 p-4 font-mono text-xs text-zinc-300 overflow-x-auto space-y-1.5 leading-relaxed">
                  {project.telemetryLog.map((line, idx) => (
                    <div
                      key={idx}
                      className={
                        line.startsWith('[!]')
                          ? 'text-amber-400 font-semibold'
                          : line.startsWith('[+]')
                          ? 'text-emerald-400'
                          : line.startsWith('{"')
                          ? 'text-cyan-400'
                          : 'text-zinc-400'
                      }
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CLI Command */}
            {project.demoCommand && (
              <div className="space-y-2">
                <div className="text-xs font-mono text-zinc-400">
                  Execution Command / Trigger:
                </div>
                <div className="flex items-center justify-between rounded-xl bg-zinc-900/80 border border-zinc-800 px-3.5 py-2.5 font-mono text-xs">
                  <span className="text-emerald-400 truncate pr-2">
                    {project.demoCommand}
                  </span>
                  <button
                    onClick={handleCopyCommand}
                    className="flex shrink-0 items-center gap-1.5 rounded-lg bg-zinc-800 px-2.5 py-1 text-[11px] font-sans text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Tags footer */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/80">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs rounded-md bg-zinc-800/60 text-zinc-400 font-mono"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
