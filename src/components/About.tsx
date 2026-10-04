import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Eye, Cpu, Zap, Activity, CheckCircle2, Lock } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      title: 'SOC & Defensive Triage',
      desc: 'Correlating log streams from Sysmon, firewalls, and Linux auditd to detect indicators of compromise (IOCs) before escalation.',
      icon: Eye,
      accent: 'emerald'
    },
    {
      title: 'Packet & Traffic Dissection',
      desc: 'Deep packet inspection via Wireshark and network security monitoring to analyze malicious payloads, exfiltration, and beaconing.',
      icon: Activity,
      accent: 'cyan'
    },
    {
      title: 'VAPT & Attack Simulation',
      desc: 'Executing structured vulnerability assessments across web applications and network targets to uncover flaws before adversaries do.',
      icon: Shield,
      accent: 'blue'
    },
    {
      title: 'Python Automation Pipes',
      desc: 'Writing custom tooling to automate port scanning, alert notification, and data extraction, cutting down mean time to investigate.',
      icon: Cpu,
      accent: 'amber'
    },
  ];

  return (
    <section id="about" className="py-12 border-t border-zinc-800/80">
      <div className="mx-auto max-w-4xl space-y-6">
        {/* Section Header */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            [ 01 // OVERVIEW ]
          </span>
          <div className="h-px flex-1 bg-zinc-800/80" />
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
          About &amp; Security Objective
        </h2>

        {/* Featured Bio Card (csume-v3 glass card aesthetic) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="relative rounded-2xl bg-[#121622]/60 border border-zinc-800/90 p-6 sm:p-8 backdrop-blur-md shadow-xl hover:border-emerald-500/30 transition-all overflow-hidden"
        >
          {/* Subtle top ambient glow */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />

          <div className="space-y-4">
            <p className="text-base sm:text-lg text-zinc-200 leading-relaxed font-normal">
              &ldquo;{PERSONAL_INFO.bio}&rdquo;
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 border-t border-zinc-800/60">
              <div className="flex items-center gap-1.5">
                <Lock className="h-3.5 w-3.5 text-emerald-400" />
                <span>Zero-Trust Mindset</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400" />
                <span>Defense-in-Depth</span>
              </div>
              <span className="text-zinc-600">•</span>
              <div className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5 text-amber-400" />
                <span>Incident Response Readiness</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 hover:border-emerald-500/30 hover:bg-zinc-900/70 transition-all space-y-2 group"
              >
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800/80 text-emerald-400 group-hover:scale-105 transition-transform border border-zinc-700/60">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-zinc-100 group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed pl-1">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
