import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Check } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-12 border-t border-zinc-800/80">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Section Header */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            [ 05 // ACADEMIC FOUNDATION ]
          </span>
          <div className="h-px flex-1 bg-zinc-800/80" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
              Education &amp; Background
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Engineering core and computer systems architecture foundation.
            </p>
          </div>
        </div>

        {/* Education Card */}
        <div className="pt-2">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="rounded-2xl bg-[#121622]/65 border border-zinc-800/80 p-6 sm:p-8 backdrop-blur-md shadow-xl hover:border-emerald-500/30 transition-all space-y-5"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-800/80 pb-5">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 text-emerald-400">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-100">
                      {edu.institution}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono mt-0.5">
                      <MapPin className="h-3 w-3 text-emerald-400" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-800 font-mono text-xs text-emerald-400 self-start sm:self-auto">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{edu.completedYear}</span>
                </div>
              </div>

              {/* Degree Title */}
              <div className="flex items-center gap-2 text-sm font-semibold text-zinc-200">
                <span className="text-emerald-400 font-mono">Degree:</span>
                <span>{edu.degree}</span>
              </div>

              {/* Core Technical Highlights */}
              <div className="space-y-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 font-mono">
                  Core Engineering &amp; Computing Focus
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {edu.focus.map((item, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-2.5 p-2.5 rounded-lg bg-zinc-900/50 border border-zinc-800/60 text-xs text-zinc-300"
                    >
                      <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
