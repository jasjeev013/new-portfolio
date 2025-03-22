import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  plugins: [],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        customDark: "#141516", // Add your custom color
      },
    },
  },
}

export default config
