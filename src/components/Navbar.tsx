import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, FileText, Mail, Menu, X, Check } from 'lucide-react';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenResume: () => void;
  onCopyEmail: () => void;
  emailCopied: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTerminal,
  onOpenResume,
  onCopyEmail,
  emailCopied
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Labs & Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-4 z-40 w-full px-4 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled
              ? 'bg-[#0e131f]/85 border border-zinc-800/90 shadow-[0_8px_30px_rgb(0,0,0,0.4)] backdrop-blur-xl'
              : 'bg-[#121622]/70 border border-zinc-800/60 shadow-lg backdrop-blur-md'
          }`}
        >
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-2.5 group select-none"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-zinc-900 border border-emerald-500/30 text-emerald-400 group-hover:border-emerald-400 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.3)] transition-all">
              <span className="font-mono text-xs font-bold tracking-tight">VS</span>
              <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-zinc-100 group-hover:text-emerald-300 transition-colors">
                Vaishak S
              </span>
              <span className="text-[10px] text-zinc-400 font-mono">
                SOC Analyst
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 text-xs font-medium text-zinc-400">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-1.5 rounded-lg hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Icons & Buttons */}
          <div className="flex items-center gap-2">
            {/* Terminal Trigger */}
            <button
              onClick={onOpenTerminal}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-emerald-500/40 text-zinc-300 hover:text-emerald-400 transition-all text-xs font-mono group"
              title="Open Interactive SOC Shell"
            >
              <Terminal className="h-3.5 w-3.5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Shell</span>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-zinc-100 transition-all text-xs font-sans"
              title="View & Download CV"
            >
              <FileText className="h-3.5 w-3.5 text-zinc-400" />
              <span>CV</span>
            </button>

            {/* Quick Copy Email */}
            <button
              onClick={onCopyEmail}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 transition-all text-xs font-medium"
              title="Copy Email Address"
            >
              {emailCopied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="font-mono">Copied!</span>
                </>
              ) : (
                <>
                  <Mail className="h-3.5 w-3.5" />
                  <span className="hidden sm:inline">Copy Email</span>
                </>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex md:hidden h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </motion.div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.15 }}
              className="md:hidden mt-2 p-3 rounded-2xl bg-[#0e131f]/95 border border-zinc-800 shadow-2xl backdrop-blur-xl flex flex-col gap-1 text-sm font-medium"
            >
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-3 py-2 rounded-xl text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/60 transition-colors"
                >
                  {link.label}
                </button>
              ))}

              <div className="pt-2 mt-2 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-mono"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>Resume / CV</span>
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenTerminal();
                  }}
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300 font-mono"
                >
                  <Terminal className="h-3.5 w-3.5" />
                  <span>SOC Shell</span>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
