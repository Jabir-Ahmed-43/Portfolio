/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0d1b2a',
          mid: '#1a2e45',
          light: '#243d55',
        },
        accent: {
          DEFAULT: '#c8a96e',
          light: '#e8d5a3',
          pale: '#f7f0e0',
        },
        cream: '#faf8f4',
        text: {
          main: '#1a1815',
          muted: '#6b6860',
        }
      },
      fontFamily: {
        serif: ["'DM Serif Display'", 'Georgia', 'serif'],
        sans: ["'DM Sans'", 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'custom': '4px',
        'custom-lg': '12px',
      },
    },
  },
  plugins: [],
}
