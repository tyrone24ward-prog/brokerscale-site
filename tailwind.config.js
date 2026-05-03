/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-broker-blue': '#1e3a8a',
        'ai-growth-green': '#10b981',
        'automation-blue': '#3b82f6',
      },
    },
  },
  plugins: [],
}