import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal as TerminalIcon, Trash2 } from 'lucide-react';
import { TERMINAL_COMMANDS } from '../data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume?: () => void;
}

interface CommandLog {
  id: string;
  command: string;
  output: string | string[];
  isError?: boolean;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose, onOpenResume }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      id: 'init-1',
      command: 'neofetch',
      output: [
        '  ██████╗ ███████╗███████╗   Vaishak S @ SOC-WORKSTATION',
        '  ██╔══██╗██╔════╝██╔════╝   ----------------------------',
        '  ██████╔╝███████╗███████╗   OS: Kali Linux x86_64 / ARM64',
        '  ██╔══██╗╚════██║╚════██║   Role: Cyber Security Analyst',
        '  ██████╔╝███████║███████║   Specialization: SOC / Blue Team / VAPT',
        '  ╚═════╝ ╚══════╝╚══════╝   Status: Open to Work (Available Now)',
        '                             Location: Trivandrum, Kerala, India'
      ]
    },
    {
      id: 'init-2',
      command: 'cat /etc/motd',
      output: [
        'Welcome to Vaishak S Defensive Security Console [v3.4.1]',
        'Type "help" to view available analyst commands or click the shortcut buttons below.'
      ]
    }
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [pastCommands, setPastCommands] = useState<string[]>(['neofetch', 'cat /etc/motd']);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommandExecution = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    setPastCommands((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const lower = trimmed.toLowerCase();

    if (lower === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (lower === 'matrix') {
      setHistory((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          command: trimmed,
          output: [
            '01000011 01011001 01000010 01000101 01010010 00100000 01010011 01000101 01000011',
            'DEFENSE MATRIX INITIALIZED: 256-bit AES Handshake established.',
            'FIREWALL STATUS: [ENFORCED] | IDS: [SURICATA_MONITORING] | PCAP: [BUFFER_ACTIVE]',
            'ZERO TRUST POLICY ENFORCED ACROSS ALL SUB-NETWORKS.'
          ]
        }
      ]);
      setInputVal('');
      return;
    }

    if (lower === 'resume') {
      if (onOpenResume) {
        onOpenResume();
      }
      setHistory((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          command: trimmed,
          output: TERMINAL_COMMANDS.resume
        }
      ]);
      setInputVal('');
      return;
    }

    if (TERMINAL_COMMANDS[lower]) {
      setHistory((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          command: trimmed,
          output: TERMINAL_COMMANDS[lower]
        }
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          id: Math.random().toString(),
          command: trimmed,
          output: `bash: command not found: "${trimmed}". Type "help" to inspect recognized commands.`,
          isError: true
        }
      ]);
    }

    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommandExecution(inputVal);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (pastCommands.length > 0) {
        const nextIdx = historyIndex === -1 ? pastCommands.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(pastCommands[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx < pastCommands.length) {
          setHistoryIndex(nextIdx);
          setInputVal(pastCommands[nextIdx]);
        } else {
          setHistoryIndex(-1);
          setInputVal('');
        }
      }
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl rounded-2xl bg-[#090d14] border border-emerald-500/30 text-zinc-200 shadow-[0_0_50px_rgba(16,185,129,0.1)] flex flex-col h-[580px] max-h-[88vh] overflow-hidden font-mono"
        >
          {/* Terminal Window Chrome */}
          <div className="flex items-center justify-between border-b border-zinc-800 bg-[#0d121c] px-4 py-3 select-none">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 mr-2">
                <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block border border-red-600/40" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block border border-amber-600/40" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block border border-emerald-600/40" />
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <TerminalIcon className="h-3.5 w-3.5 text-emerald-400" />
                <span>vaishak@soc-triage:~ (bash)</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setHistory([])}
                className="flex items-center gap-1 px-2 py-1 text-[11px] rounded bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors"
                title="Clear screen"
              >
                <Trash2 className="h-3 w-3" />
                <span className="hidden sm:inline">clear</span>
              </button>
              <button
                onClick={onClose}
                className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-100 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Quick Command Pills */}
          <div className="flex flex-wrap items-center gap-1.5 border-b border-zinc-800/70 bg-[#0b0f17] px-4 py-2 text-xs">
            <span className="text-[11px] text-zinc-500 mr-1">Quick:</span>
            {['whoami', 'status', 'skills', 'projects', 'resume', 'contact', 'matrix'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommandExecution(cmd)}
                className="px-2 py-0.5 rounded text-[11px] bg-zinc-800/60 hover:bg-emerald-500/20 hover:text-emerald-300 text-zinc-400 border border-zinc-700/50 hover:border-emerald-500/30 transition-colors"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Terminal Screen / Output */}
          <div
            className="flex-1 p-4 overflow-y-auto space-y-3 text-xs leading-relaxed"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((item) => (
              <div key={item.id} className="space-y-1">
                <div className="flex items-center gap-2 text-emerald-400">
                  <span className="text-zinc-500">vaishak@soc:~$</span>
                  <span className="text-zinc-100 font-semibold">{item.command}</span>
                </div>
                <div className="pl-4">
                  {Array.isArray(item.output) ? (
                    item.output.map((line, lIdx) => (
                      <div
                        key={lIdx}
                        className={
                          item.isError
                            ? 'text-red-400'
                            : line.startsWith('[+]')
                            ? 'text-emerald-400'
                            : line.startsWith('[!]')
                            ? 'text-amber-400'
                            : line.startsWith('  ██')
                            ? 'text-emerald-400/90 whitespace-pre'
                            : 'text-zinc-300'
                        }
                      >
                        {line}
                      </div>
                    ))
                  ) : (
                    <div className={item.isError ? 'text-red-400' : 'text-zinc-300'}>
                      {item.output}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Prompt Line */}
            <div className="flex items-center gap-2 text-xs pt-1">
              <span className="text-zinc-500">vaishak@soc:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-zinc-100 outline-none border-none p-0 focus:ring-0 font-mono caret-emerald-400"
                placeholder="type a command (e.g. whoami, status, skills)..."
                autoFocus
              />
            </div>
            <div ref={terminalBottomRef} />
          </div>

          {/* Terminal Status Footer */}
          <div className="flex items-center justify-between border-t border-zinc-800/80 bg-[#0d121c] px-4 py-2 text-[11px] text-zinc-500">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>SOC SHELL READY</span>
            </span>
            <span className="text-zinc-600">Press ENTER to execute • ESC to close</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
