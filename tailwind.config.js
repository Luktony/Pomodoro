// tailwind.config.js
module.exports = {
  content: [
    './public/**/*.html', // Caminho para seus arquivos HTML
    './src/**/*.{html,js}', // Caminho para seus arquivos HTML e JS no diretório src
  ],
  theme: {
    extend: {},

    width: {
    '1040': '1040px',
    '400': '400px',
    },

    height: {
    '480': '480px',
    '400': '400px',
    },
  },
  plugins: [],
}



