import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Clock, 
  MapPin, 
  Check, 
  Copy, 
  ExternalLink, 
  Terminal
} from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactProps {
  onCopyEmail: () => void;
  emailCopied: boolean;
  onOpenTerminal: () => void;
}

export const Contact: React.FC<ContactProps> = ({
  onCopyEmail,
  emailCopied,
  onOpenTerminal
}) => {
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to Indian Standard Time (IST, UTC+5:30)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-IN', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer id="contact" className="pt-12 pb-16 border-t border-zinc-800/80">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Section Header */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
            [ 06 // CONNECT ]
          </span>
          <div className="h-px flex-1 bg-zinc-800/80" />
        </div>

        {/* Contact Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="relative rounded-2xl bg-[#121622]/70 border border-zinc-800/90 p-6 sm:p-10 backdrop-blur-md shadow-2xl hover:border-emerald-500/40 transition-all overflow-hidden space-y-6"
        >
          {/* Ambient gradient top glow */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                Available for Blue Team / SOC Roles
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
                Interested in collaboration or security opportunities?
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Whether you have an open SOC Analyst role, need blue team assistance, or want to discuss threat intelligence and vulnerability assessment — let&apos;s connect.
              </p>
            </div>

            {/* Direct Connect Actions */}
            <div className="flex flex-col gap-3 shrink-0">
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=SOC%20Analyst%20Opportunity%20-%20Vaishak%20S`}
                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs transition-colors shadow-[0_0_20px_rgba(16,185,129,0.2)]"
              >
                <Mail className="h-4 w-4" />
                <span>Send Direct Email</span>
              </a>

              <button
                onClick={onCopyEmail}
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700/80 hover:border-emerald-500/50 text-zinc-200 text-xs font-mono transition-colors"
              >
                {emailCopied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied Email!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-zinc-400" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Telemetry info row inside the card */}
          <div className="pt-6 border-t border-zinc-800/70 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
            {/* Live IST Clock */}
            <div className="flex items-center gap-2.5 text-zinc-300">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-emerald-400">
                <Clock className="h-3.5 w-3.5" />
              </div>
              <div>
                <div className="text-[10px] text-zinc-500 uppercase">Local Time (Trivandrum)</div>
                <div className="text-zinc-200 font-semibold">{currentTime || 'Loading...'} IST</div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2.5 text-zinc-300">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-cyan-400">
                <MapPin className="h-3.5 w-3.5" />
              </div>
              <div>
                <div className="text-[10px] text-zinc-500 uppercase">Base Location</div>
                <div className="text-zinc-200 font-semibold">Trivandrum, Kerala, IN</div>
              </div>
            </div>

            {/* LinkedIn External */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-zinc-300 hover:text-sky-300 transition-colors group/li"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0077b5]/20 border border-[#0077b5]/30 text-sky-400 group-hover/li:border-[#0077b5]">
                <LinkedinIcon className="h-3.5 w-3.5" />
              </div>
              <div>
                <div className="text-[10px] text-zinc-500 uppercase">Network Profile</div>
                <div className="text-zinc-200 font-semibold flex items-center gap-1">
                  <span>/-vaishak-s-</span>
                  <ExternalLink className="h-3 w-3 text-zinc-500 group-hover/li:text-sky-400" />
                </div>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Footer Meta Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs text-zinc-500 font-mono">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} Vaishak S</span>
            <span>•</span>
            <span className="text-zinc-400">Cyber Security Analyst</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenTerminal}
              className="hover:text-emerald-400 transition-colors flex items-center gap-1"
            >
              <Terminal className="h-3 w-3" />
              <span>SOC Shell Console</span>
            </button>
            <span>•</span>
            <span className="text-zinc-600">Built with precision • csume-v3 inspired</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
