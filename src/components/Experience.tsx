import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 border-t border-zinc-800/80">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Section Header */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            [ 03 // PROFESSIONAL TIMELINE ]
          </span>
          <div className="h-px flex-1 bg-zinc-800/80" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
              Experience &amp; Training
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Rigorous operational cybersecurity training and intensive hands-on lab programs.
            </p>
          </div>
          <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 self-start sm:self-auto">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            Active Program
          </span>
        </div>

        {/* Timeline Item */}
        <div className="pt-2">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="relative rounded-2xl bg-[#121622]/65 border border-zinc-800/80 p-6 sm:p-8 backdrop-blur-md shadow-xl hover:border-emerald-500/40 transition-all space-y-6"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-800/80 pb-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                      {exp.type}
                    </span>
                    <span className="text-zinc-600">•</span>
                    <span className="text-xs text-zinc-400 font-mono flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-emerald-400" />
                      {exp.location}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-100">
                    {exp.company}
                  </h3>
                  <p className="text-sm font-medium text-emerald-400">
                    {exp.role} <span className="text-zinc-400 font-normal">({exp.program})</span>
                  </p>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 font-mono text-xs text-zinc-300 self-start sm:self-auto">
                  <Calendar className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-3">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono flex items-center gap-2">
                  <Award className="h-3.5 w-3.5 text-emerald-400" />
                  Key Training Modules &amp; Operational Milestones
                </h4>

                <div className="grid grid-cols-1 gap-3">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-900/50 border border-zinc-800/60 text-xs sm:text-sm text-zinc-300 leading-relaxed"
                    >
                      <div className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <CheckCircle2 className="h-3 w-3" />
                      </div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="pt-2 border-t border-zinc-800/60 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-zinc-500 mr-1">Trained Tooling:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs rounded-lg bg-zinc-900/90 text-zinc-300 border border-zinc-800 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
