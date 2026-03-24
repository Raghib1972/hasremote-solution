/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        // ── PRIMARY = BLUE (ZenEdu style) ──
        // Old navy (#0e2954) saved as primary.navy for backward compat
        primary: {
          DEFAULT: '#1A73E8',
          dark:    '#0d4fa3',
          light:   '#4d96f0',
          navy:    '#0e2954',
        },

        // ── ACCENT = ORANGE (ZenEdu style) ──
        accent: {
          DEFAULT: '#FF6B2C',
          dark:    '#e05520',
          light:   '#ff8c5a',
          50:      '#fff4ef',
          100:     '#ffe4d4',
        },

        // ── BACKGROUND ──
        bg: {
          light: '#F5F7FF',
          card:  '#ffffff',
          dark:  '#0f172a',
        },

      },

      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Poppins', 'sans-serif'],
      },

      boxShadow: {
        'orange':     '0 8px 25px rgba(255, 107, 44, 0.40)',
        'orange-lg':  '0 14px 40px rgba(255, 107, 44, 0.55)',
        'blue':       '0 8px 25px rgba(26, 115, 232, 0.35)',
        'blue-lg':    '0 14px 40px rgba(26, 115, 232, 0.50)',
        'card':       '0 4px 20px rgba(0, 0, 0, 0.07)',
        'card-hover': '0 16px 40px rgba(0, 0, 0, 0.12)',
      },

      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },

      animation: {
        // ── OLD — kept as-is ──
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.6s ease-out forwards',
        // ── NEW ──
        'float':       'float 3s ease-in-out infinite',
        'pulse-slow':  'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },

      keyframes: {
        // ── OLD — kept as-is ──
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // ── NEW ──
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}