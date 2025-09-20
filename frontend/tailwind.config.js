export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      keyframes: {
        glitchA: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 0)' },
          '40%': { transform: 'translate(2px, -1px)' },
          '60%': { transform: 'translate(-1px, 1px)' },
          '80%': { transform: 'translate(1px, -1px)' },
          '100%': { transform: 'translate(0)' },
        },
        hue: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '50%': { filter: 'hue-rotate(90deg)' },
          '100%': { filter: 'hue-rotate(0deg)' },
        }
      },
      animation: {
        glitchA: 'glitchA 1s infinite linear',
        hue: 'hue 6s infinite linear',
      }
    },
  },
  plugins: [],
}
