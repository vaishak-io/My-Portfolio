import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ChevronRight, Check, Copy } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (id: string, text: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="projects" className="py-12 border-t border-zinc-800/80">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Section Header */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            [ 02 // LABS &amp; SYSTEMS ]
          </span>
          <div className="h-px flex-1 bg-zinc-800/80" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
              Featured Projects &amp; Security Labs
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Bento-structured operational testbeds, hardware stations, and defensive telemetry pipelines.
            </p>
          </div>
          <span className="text-xs font-mono text-emerald-400/90 self-start sm:self-auto">
            3 Active Deployments
          </span>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pt-2">
          {PROJECTS.map((project, idx) => {
            // Give the SOC lab prominent 12-col or alternating bento sizing
            const isFullWidth = idx === 1; // SOC lab spans full width as the centerpiece
            const colSpan = isFullWidth ? 'md:col-span-12' : 'md:col-span-6';

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                onClick={() => onSelectProject(project)}
                className={`${colSpan} group relative flex flex-col justify-between rounded-2xl bg-[#121622]/65 border border-zinc-800/80 hover:border-emerald-500/40 p-6 backdrop-blur-md shadow-lg hover:shadow-[0_8px_30px_rgba(16,185,129,0.08)] transition-all duration-300 cursor-pointer overflow-hidden`}
              >
                {/* Subtle top border highlight */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-500/0 group-hover:via-emerald-500/50 to-transparent transition-all duration-500" />

                <div className="space-y-4">
                  {/* Top Status & Category Row */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900 border border-zinc-700/60 text-[11px] font-mono text-zinc-300">
                      <span className={`h-1.5 w-1.5 rounded-full ${project.status === 'Operational' ? 'bg-emerald-400' : 'bg-cyan-400'} animate-pulse`} />
                      {project.status}
                    </span>

                    <span className="text-[11px] font-mono text-emerald-400/80">
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors">
                        {project.title}
                      </h3>
                      <ChevronRight className="h-4 w-4 text-zinc-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Architecture Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.architectureBadges.map((badge) => (
                      <span
                        key={badge}
                        className="px-2 py-0.5 text-[10px] rounded bg-emerald-950/40 border border-emerald-500/25 text-emerald-300 font-mono"
                      >
                        ⚡ {badge}
                      </span>
                    ))}
                  </div>

                  {/* Terminal Command Snippet Box */}
                  {project.demoCommand && (
                    <div
                      onClick={(e) => handleCopy(project.id, project.demoCommand!, e)}
                      className="mt-2 flex items-center justify-between rounded-xl bg-black/70 border border-zinc-800/90 px-3 py-2 font-mono text-xs text-zinc-300 hover:border-emerald-500/30 transition-colors group/cmd"
                      title="Click to copy CLI command"
                    >
                      <div className="flex items-center gap-2 truncate pr-2">
                        <Terminal className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span className="text-emerald-400/90 truncate">{project.demoCommand}</span>
                      </div>
                      <span className="shrink-0 text-[10px] text-zinc-400 group-hover/cmd:text-white flex items-center gap-1">
                        {copiedId === project.id ? (
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
                      </span>
                    </div>
                  )}
                </div>

                {/* Bottom Tags & Detail Trigger */}
                <div className="pt-5 mt-4 border-t border-zinc-800/60 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] bg-zinc-900/90 text-zinc-400 border border-zinc-800 font-mono"
                      >
                        #{tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[10px] text-zinc-500 font-mono self-center">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] font-mono text-emerald-400 group-hover:underline flex items-center gap-1">
                    <span>Inspect Lab</span>
                    <span>→</span>
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
