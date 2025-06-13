/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",  // Esto le dice a Tailwind dónde buscar clases
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        special: ['"Special Gothic Expanded One"', 'sans-serif'],
        lexend: ['"Lexend"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
