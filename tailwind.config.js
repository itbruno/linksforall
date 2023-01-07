/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/themes/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true
    }
  },
  plugins: []
};
