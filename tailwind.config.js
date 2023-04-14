/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-blue': '#5865f2',
        'dark-main': '#313338',
        'dark-inputs': '#1e1f22',
        'darker': '#232428',
        'darkest': '#151618',
        'light-bg': '#3f4248',
        'light-text': '#B5BAC1',
        'dark-text': '#949BA4',
        'accent-green': '#23a559',
      },
      minHeight: {
        'responsive': '100dvh'
      },
      screens: {
        'phone': '485px'
      }
    },
  },
  plugins: [],
}

