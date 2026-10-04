import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Crosshair, Terminal, Cpu } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const icons: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="h-4 w-4 text-emerald-400" />,
    Crosshair: <Crosshair className="h-4 w-4 text-cyan-400" />,
    Terminal: <Terminal className="h-4 w-4 text-amber-400" />,
    Cpu: <Cpu className="h-4 w-4 text-blue-400" />,
  };

  const categories = ['All', 'Defensive & SOC Operations', 'Offensive Security & VAPT', 'Tools & Ecosystem', 'Platforms & Scripting'];

  const filteredCategories = activeCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.title === activeCategory);

  return (
    <section id="skills" className="py-12 border-t border-zinc-800/80">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Section Header */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            [ 04 // TECHNICAL ARSENAL ]
          </span>
          <div className="h-px flex-1 bg-zinc-800/80" />
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
              Technical Arsenal &amp; Skills Matrix
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              Structured defensive capabilities, penetration testing toolsets, and automation workflows.
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-400 self-start sm:self-auto">
            Hover pills to view operational focus
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                  : 'bg-zinc-900/60 text-zinc-400 border border-zinc-800/70 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              {cat === 'All' ? 'Complete Arsenal' : cat}
            </button>
          ))}
        </div>

        {/* 4 Categorized Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          {filteredCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="rounded-2xl bg-[#121622]/65 border border-zinc-800/80 hover:border-emerald-500/40 p-6 backdrop-blur-md shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Card Title & Icon */}
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-900 border border-zinc-800 group-hover:border-emerald-500/30 transition-colors">
                      {icons[cat.iconName] || <ShieldCheck className="h-4 w-4 text-emerald-400" />}
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors">
                        {cat.title}
                      </h3>
                      <span className="text-[10px] font-mono text-zinc-500">
                        {cat.skills.length} core proficiencies
                      </span>
                    </div>
                  </div>

                  <span className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-zinc-900/80 border border-zinc-700/60 text-emerald-400">
                    {cat.badge}
                  </span>
                </div>

                {/* Skills Grid */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="group/skill relative flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 hover:border-emerald-500/40 hover:bg-zinc-800 transition-all text-xs font-mono text-zinc-300 cursor-default"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span className="font-medium text-zinc-200">{skill.name}</span>

                      {/* Tooltip on hover showing operational focus */}
                      {skill.focus && (
                        <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] sm:max-w-xs rounded-lg bg-zinc-950 border border-emerald-500/30 px-2.5 py-1.5 text-[11px] text-zinc-200 opacity-0 group-hover/skill:opacity-100 transition-opacity shadow-2xl z-20 font-sans">
                          <span className="text-emerald-400 font-mono font-semibold block text-[10px] uppercase">
                            Focus:
                          </span>
                          {skill.focus}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 mt-4 border-t border-zinc-800/50 flex items-center justify-between text-[11px] text-zinc-500 font-mono">
                <span>Verified in SOC Labs</span>
                <span className="text-emerald-400/80">Continuous Practice</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
