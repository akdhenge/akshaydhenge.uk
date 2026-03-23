/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#0a0a0f',
        'bg-card': '#12121a',
        'bg-card-hover': '#1a1a2e',
        accent: {
          DEFAULT: '#7c3aed',
          glow: 'rgba(124, 58, 237, 0.3)',
        },
        accent2: '#06b6d4',
        accent3: '#f59e0b',
        border: '#1e1e2e',
        success: '#10b981',
        love: '#f43f5e',
      },
      animation: {
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'float1': 'float1 20s ease-in-out infinite',
        'float2': 'float2 25s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'rainbow': 'rainbow 2s linear infinite',
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
      },
      keyframes: {
        float1: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(100px, 80px)' },
        },
        float2: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-80px, -60px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        rainbow: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '100%': { filter: 'hue-rotate(360deg)' },
        },
        fadeInDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
