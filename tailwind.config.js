/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors:  {
        'charcoal-blue'   : '#252945',
        'deep-purple'     : '#141625',
        'light-coral'     : '#EC5757',
        'light-gray'      : '#F8F8FB',
        'light-purple'    : '#9277FF',
        'light-tomato'    : '#9277FF',
        'manatee'         : '#888EB0',
        'midnight-black'  : '#0C0E16',
        'midnight-blue'   : '#1E2139',
        'periwinkle'      : '#DFE3FA',
        'purple'          : '#7C5DFA',
        'soft-periwinkle' : '#7E88C3',
      },
    },
  },
  plugins: [],
};
