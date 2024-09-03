// tailwind.config.js
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',  // Incluye todos los archivos en la carpeta src
    './pages/**/*.{js,ts,jsx,tsx}', // Incluye todos los archivos en la carpeta pages
    './components/**/*.{js,ts,jsx,tsx}', // Incluye todos los archivos en la carpeta components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

