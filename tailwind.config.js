// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#1f242d',
        'second-bg-color': '#323946',
        'main-color': '#0ef',
        'text-color': '#fff',
      },
      keyframes: {
        slideRight: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideTop: {
          '0%': { transform: 'translateY(100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideBottom: {
          '0%': { transform: 'translateY(-100px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        floatImage: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-24px)' },
        }
      },
      animation: {
        slideRight: 'slideRight 1s ease forwards',
        slideLeft: 'slideLeft 1s ease forwards',
        slideTop: 'slideTop 1s ease forwards',
        slideBottom: 'slideBottom 1s ease forwards',
        zoomIn: 'zoomIn 1s ease forwards',
        floatImage: 'floatImage 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
