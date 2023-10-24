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
        customOrange: '#D66533',
        customLightBlue: '#B5CACC',
        customGrayBlue: '#9BABAD',
        customBeige: '#B28C70',
        customTerracotta: '#BA6842'

      }
    },

  },
  plugins: [],
}
export default config
