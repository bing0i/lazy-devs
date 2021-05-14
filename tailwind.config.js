module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'light-text': 'var(--light-text)',
        'light-bg': 'var(--light-bg)',
        'dark-text': 'var(--dark-text)',
        'dark-bg': 'var(--dark-bg)',
        accent: 'var(--accent)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
