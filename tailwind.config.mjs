/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          void: '#07090e',
          carbon: '#0b0e17',
          panel: '#111524',
          panelLight: '#181e33',
          border: '#1f2742',
          cyan: '#00f0ff',
          magenta: '#ff0055',
          pink: '#f72585',
          yellow: '#fcee0a',
          green: '#00ff66',
          textMuted: '#8b9bb4',
          textMain: '#e6edf8',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Space Mono"', 'ui-monospace', 'monospace'],
        sans: ['"Space Grotesk"', '"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 15px rgba(0, 240, 255, 0.35)',
        'glow-magenta': '0 0 15px rgba(255, 0, 85, 0.35)',
        'glow-yellow': '0 0 15px rgba(252, 238, 10, 0.35)',
        'glow-green': '0 0 15px rgba(0, 255, 102, 0.35)',
      }
    },
  },
  plugins: [],
};
