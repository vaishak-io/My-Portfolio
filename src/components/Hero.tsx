import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  FileDown, 
  Terminal, 
  Check, 
  Copy, 
  ExternalLink
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onCopyEmail: () => void;
  emailCopied: boolean;
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onCopyEmail,
  emailCopied,
  onOpenResume,
  onOpenTerminal
}) => {
  return (
    <section className="relative pt-8 pb-12 sm:pt-14 sm:pb-16">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs font-mono shadow-[0_0_20px_rgba(16,185,129,0.1)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="tracking-wide">{PERSONAL_INFO.status}</span>
        </motion.div>

        {/* Hero Title & Identity */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-100 font-sans">
              {PERSONAL_INFO.name}
            </h1>

            {/* Location Pill */}
            <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
              <MapPin className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </motion.div>

          {/* Role Headline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="text-lg sm:text-xl font-medium text-zinc-300 leading-snug max-w-3xl"
          >
            <span className="text-emerald-400 font-semibold">Cyber Security Analyst</span>
            <span className="text-zinc-500 mx-2">|</span>
            <span>SOC Operations</span>
            <span className="text-zinc-500 mx-2">|</span>
            <span className="text-cyan-400">Blue Team Defense</span>
            <span className="text-zinc-500 mx-2">|</span>
            <span className="text-zinc-200">Threat Detection &amp; VAPT</span>
          </motion.p>
        </div>

        {/* Action Buttons Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          {/* Email Copy Button */}
          <button
            onClick={onCopyEmail}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700/80 hover:border-emerald-500/50 text-zinc-200 hover:text-white transition-all text-xs font-mono shadow-sm group"
          >
            {emailCopied ? (
              <>
                <Check className="h-4 w-4 text-emerald-400" />
                <span className="text-emerald-400 font-medium">Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-zinc-400 group-hover:text-emerald-400 transition-colors" />
                <span>{PERSONAL_INFO.email}</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">Copy</span>
              </>
            )}
          </button>

          {/* LinkedIn Badge */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0a2540]/30 border border-[#0077b5]/40 hover:border-[#0077b5] text-sky-200 hover:text-sky-100 transition-all text-xs font-medium group"
          >
            <LinkedinIcon className="h-4 w-4 text-[#0077b5]" />
            <span>LinkedIn Profile</span>
            <ExternalLink className="h-3 w-3 text-sky-400/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          {/* Download Resume / CV */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/40 hover:border-emerald-400 text-emerald-300 hover:text-emerald-200 transition-all text-xs font-mono group shadow-[0_0_20px_rgba(16,185,129,0.12)]"
          >
            <FileDown className="h-4 w-4 text-emerald-400 group-hover:translate-y-0.5 transition-transform" />
            <span>Download Resume / CV</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono">
              [PDF]
            </span>
          </button>

          {/* Terminal Launcher */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 transition-all text-xs font-mono"
            title="Launch Interactive Terminal"
          >
            <Terminal className="h-4 w-4 text-zinc-400" />
            <span>Launch Shell</span>
          </button>
        </motion.div>

        {/* Micro-Telemetry Matrix / Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl bg-[#121622]/60 border border-zinc-800/80 hover:border-emerald-500/30 transition-all backdrop-blur-sm group"
            >
              <div className="text-xl sm:text-2xl font-bold font-mono text-zinc-100 group-hover:text-emerald-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-400 font-medium mt-0.5">
                {stat.label}
              </div>
              <div className="text-[10px] text-zinc-500 font-mono mt-1 flex items-center gap-1">
                <span className="h-1 w-1 rounded-full bg-emerald-500 inline-block" />
                <span>{stat.change}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
