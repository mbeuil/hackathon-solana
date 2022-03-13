module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg)',
        secondary: 'var(--color-bg-secondary)',
      },
      textColor: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        link: 'var(--color-link)',
        hover: 'var(--color-link-hover)',
      },
      borderColor: {
        primary: 'var(--color-border-primary)',
      },
      minHeight: {
        main: 'calc(100vh - 80px - 48px)',
      },
    },
  },
  plugins: [],
};
