import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        customDarkGray: '#4f4f40',
        customLightray: '#DFDCD4',
        customDarkGreen: '#0B201F',
        customLightBlue: '#B5CACC',
        customGrayBlue: '#9BABAD',
        customBeige: '#B28C70',
        customTerracotta: '#BA6842',
        
        customBlueGreen: '#7dcfb6',
        customBlue: '#00b2ca',
        customDarkBlue: '#1d4e89',
        customOrange: '#fb8500',
        customLightOrange: '#fbd1a2',

      },
      fontFamily: {
        customMadimi: 'Madimi One'
      }
    },

  },
  plugins: [],
}
export default config
