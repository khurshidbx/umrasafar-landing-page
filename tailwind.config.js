/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        dark:   '#0d2b1f',
        mid:    '#1a4d3a',
        light:  '#f0fdf4',
        sand:   '#fafaf7',
        ctext:  '#1a2e1f',
        muted:  '#64748b',
        gold:   '#d4a017',
        border: '#e2e8f0',
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        inter:   ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
