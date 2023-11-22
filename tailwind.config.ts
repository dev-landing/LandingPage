import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './common/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgc: { DEFAULT: '#FFFDFA', dark: '#000041' },
        highlight: { DEFAULT: '#FC7B03', dark: '#FFB11B' },
        original: { DEFAULT: '#000041', dark: '#FFFDFA' },
        inactive: { DEFAULT: '#7979AA', dark: '#B4B4CE' },
        lbgc: { DEFAULT: '#108CFF', dark: '#108CFF' },
        border: { DEFAULT: '#000041', dark: '#FFB11B' },
        dropShadow: { DEFAULT: '#108CFF', dark: '#108CFF' },
        green: '#89D961',
      },
      boxShadow: {
        custom: '4px 4px 0 #108CFF',
        card: '0 0px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        book: '-6px 6px 0px #000041, -8px 7px 0px #FFB11B, -3px 3px 0px #FFB11B, -5px 4px 0px #FFB11B, -6px 5px 0px #FFB11B, -4px 5px 0px #FFB11B',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '90': '90px',
        '140': '140px',
        '200': '200px',
        imageSm: '90px',
        imageMd: '140px',
        imageLg: '200px',
      },
    },
    screens: {
      'phone': { 'max': '640px' },
    },
  },
  plugins: [],
}
export default config
