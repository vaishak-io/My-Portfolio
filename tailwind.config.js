/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        dark: {
          bg: '#09090b',
          surface: '#0d1117',
          card: 'rgba(18, 22, 31, 0.7)',
          subtle: 'rgba(255, 255, 255, 0.03)',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(16, 185, 129, 0.35)',
        },
        cyber: {
          emerald: '#10b981',
          cyan: '#06b6d4',
          blue: '#3b82f6',
          amber: '#f59e0b',
          red: '#ef4444',
        }
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-line': 'glowLine 8s ease infinite',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'radial-gradient-top': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(16, 185, 129, 0.08), transparent)',
        'radial-gradient-ambient': 'radial-gradient(circle at 50% 0%, rgba(6, 182, 212, 0.05), transparent 45%)',
        'dot-pattern': 'radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
        'grid-pattern': 'linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
      },
      boxShadow: {
        'card-glow': '0 0 40px -10px rgba(16, 185, 129, 0.08)',
        'cyber-button': '0 0 20px -3px rgba(16, 185, 129, 0.25)',
      }
    },
  },
  plugins: [],
}
