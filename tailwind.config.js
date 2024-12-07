/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#f2f2f2',
          dark: '#e3e3e3',
        },
        taskbar: {
          DEFAULT: 'rgba(0, 0, 0, 0.6)',
        }
      },
      backgroundImage: {
        wallpaper: "url('/assets/astronaut_jellyfish.jpg')"
      },
    },
  },
  plugins: [
    '@tailwindcss/typography',
  ],
}