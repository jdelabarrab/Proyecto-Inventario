/** @type {import('tailwindcss').Config} */
const { colors } = require('./contants/theme');

module.exports = {
  content: [
    './app/index.tsx',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './app.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        bosque: colors.bosque,
        noche: colors.noche,
        cobre: colors.cobre,
        grisClaro: colors.grisClaro,
        textoSecundario: colors.textoSecundario,
        peligro: colors.peligro,
      },
      fontFamily: {
        titulo: ['Fraunces_600SemiBold'],
        cuerpo: ['WorkSans_400Regular'],
        'cuerpo-medio': ['WorkSans_500Medium'],
      },
    },
  },
  plugins: [],
};
