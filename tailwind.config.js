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
        'dark-hover-text': 'var(--dark-hover-text)',
        'dark-nav': 'var(--dark-nav)',
        'dark-card': 'var(--dark-card)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
