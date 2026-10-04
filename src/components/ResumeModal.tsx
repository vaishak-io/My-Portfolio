import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Mail, MapPin, ExternalLink, ShieldCheck } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILL_CATEGORIES, EDUCATION_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-zinc-950 border border-zinc-800 text-zinc-200 shadow-2xl flex flex-col"
        >
          {/* Action Bar Header */}
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-zinc-800 bg-zinc-950/90 px-6 py-4 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <ShieldCheck className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-zinc-100">Curriculum Vitae — Vaishak S</h3>
                <p className="text-xs text-zinc-400">SOC Operations & Cyber Security Analyst Profile</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">Print / Save PDF</span>
              </button>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div className="p-6 sm:p-10 space-y-8 bg-zinc-950 text-zinc-300 print:text-black print:bg-white text-sm">
            {/* Header info */}
            <div className="border-b border-zinc-800/80 pb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-emerald-400 font-medium mt-1 text-sm sm:text-base">
                  {PERSONAL_INFO.roleHeadline}
                </p>
                <div className="flex items-center gap-2 mt-2 text-xs text-zinc-400">
                  <MapPin className="h-3.5 w-3.5 text-zinc-500" />
                  <span>{PERSONAL_INFO.location}</span>
                  <span className="text-zinc-600">•</span>
                  <span className="text-emerald-400 font-mono">SOC Open to Work</span>
                </div>
              </div>

              <div className="flex flex-col sm:items-end gap-1.5 text-xs text-zinc-400">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5 text-zinc-500" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors"
                >
                  <LinkedinIcon className="h-3.5 w-3.5 text-zinc-500" />
                  <span>linkedin.com/in/-vaishak-s-</span>
                  <ExternalLink className="h-3 w-3 text-zinc-600" />
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-2">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-emerald-400/90 font-mono">
                Professional Profile &amp; Objective
              </h2>
              <p className="text-zinc-300 leading-relaxed text-sm">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Experience / Training */}
            <div className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-emerald-400/90 font-mono">
                Professional Experience &amp; Training
              </h2>
              {EXPERIENCES.map((exp, idx) => (
                <div key={idx} className="space-y-2 border-l-2 border-emerald-500/30 pl-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <span className="font-semibold text-zinc-100">{exp.company}</span>
                    <span className="text-xs text-zinc-400 font-mono">{exp.period} | {exp.location}</span>
                  </div>
                  <div className="text-xs font-medium text-emerald-400">
                    {exp.role} — <span className="text-zinc-300">{exp.program}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-xs text-zinc-400 leading-relaxed mt-2">
                    {exp.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.technologies.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[11px] rounded bg-zinc-900 border border-zinc-800 text-zinc-400 font-mono">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Projects & Security Labs */}
            <div className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-emerald-400/90 font-mono">
                Featured Projects &amp; Security Labs
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/80 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                      <h4 className="font-medium text-zinc-100">{proj.title}</h4>
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                        {proj.status}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-zinc-800/70 text-zinc-300 font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Matrix */}
            <div className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-emerald-400/90 font-mono">
                Technical Arsenal &amp; Skills Matrix
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SKILL_CATEGORIES.map((cat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 space-y-2">
                    <div className="text-xs font-semibold text-zinc-200 flex items-center justify-between">
                      <span>{cat.title}</span>
                      <span className="text-[10px] text-emerald-400 font-mono">{cat.badge}</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((s, i) => (
                        <span key={i} className="text-[11px] px-2 py-0.5 rounded bg-zinc-800/60 text-zinc-300 font-sans border border-zinc-700/50">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-emerald-400/90 font-mono">
                Education
              </h2>
              {EDUCATION_DATA.map((edu, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-l-2 border-zinc-800 pl-4 py-1">
                  <div>
                    <div className="font-semibold text-zinc-100">{edu.institution}</div>
                    <div className="text-xs text-zinc-400">{edu.location}</div>
                  </div>
                  <div className="text-xs text-emerald-400 font-mono mt-1 sm:mt-0">
                    {edu.degree} — {edu.completedYear}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 font-mono">
              <span>Verified Dossier: Vaishak S • Cybersecurity Analyst</span>
              <span>Available for immediate deployment in SOC / Incident Response</span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
