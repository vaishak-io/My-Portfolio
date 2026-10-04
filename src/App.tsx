import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { Toast } from './components/Toast';
import { PERSONAL_INFO } from './data/portfolioData';
import type { Project } from './types';

export function App() {
  const [emailCopied, setEmailCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Keyboard shortcut listener: Alt + T or backtick to toggle terminal, Esc to close modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.altKey && (e.key === 't' || e.key === 'T')) || e.key === '`') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsTerminalOpen(false);
        setIsResumeOpen(false);
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopyEmail = () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(PERSONAL_INFO.email);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = PERSONAL_INFO.email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
    } catch {
      // Graceful fallback
    }

    setEmailCopied(true);
    setToastMessage(`Email address copied: ${PERSONAL_INFO.email}`);
    setShowToast(true);

    // Subtle celebratory confetti
    try {
      confetti({
        particleCount: 28,
        spread: 60,
        origin: { y: 0.85 },
        colors: ['#10b981', '#06b6d4', '#34d399', '#a7f3d0'],
        disableForReducedMotion: true
      });
    } catch {
      // Ignore if confetti fails in headless env
    }

    setTimeout(() => {
      setEmailCopied(false);
    }, 2500);

    setTimeout(() => {
      setShowToast(false);
    }, 3500);
  };

  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-emerald-500/20 selection:text-emerald-300">
      {/* Background Decor: Radial glow and subtle grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Top radial emerald blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.09),transparent_65%)]" />
        {/* Secondary subtle cyan radial blur */}
        <div className="absolute top-[35%] right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(6,182,212,0.04),transparent_60%)]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-70" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
          onCopyEmail={handleCopyEmail}
          emailCopied={emailCopied}
        />

        <main className="flex-1 px-4 sm:px-6">
          <Hero
            onCopyEmail={handleCopyEmail}
            emailCopied={emailCopied}
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenTerminal={() => setIsTerminalOpen(true)}
          />

          <About />

          <Projects
            onSelectProject={(project) => setSelectedProject(project)}
          />

          <Experience />

          <Skills />

          <Education />

          <Contact
            onCopyEmail={handleCopyEmail}
            emailCopied={emailCopied}
            onOpenTerminal={() => setIsTerminalOpen(true)}
          />
        </main>
      </div>

      {/* Interactive Modals */}
      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenResume={() => {
          setIsTerminalOpen(false);
          setIsResumeOpen(true);
        }}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Feedback Toast */}
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}

export default App;
