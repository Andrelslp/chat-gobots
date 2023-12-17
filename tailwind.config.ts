import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      'dark-1': '#878787',
      'dark-2': '#333333',
      'dark-3': '#1D1C1C',
      'dark-4': '#0F172A',
      'dark-5': '#202C33',
      'dark-6': '#222E35',
      'dark-7': '#2A3942',
      'dark-8': '#111B21',
      'blue-1': '#0F70B7',
      'blue-2': '#0B5285',
      'blue-3': '#2599ed',
      'green-1': '#005C4B',
      'white-1': '#FFFFFF',
      transparent: 'transparent'
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif']
    },
    extend: {
      spacing: {
        0: '0',
        1: '0.4rem',
        2: '0.8rem',
        3: '1.2rem',
        4: '1.6rem',
        5: '2rem',
        6: '2.4rem',
        7: '2.8rem',
        8: '3.2rem',
        9: '3.6rem',
        10: '4rem',
        12: '4.8rem',
        16: '6.4rem',
        20: '8rem',
        24: '9.6rem',
        32: '12.8rem',
        40: '16rem',
        48: '19.2rem',
        56: '22.4rem',
        64: '25.6rem'
      }
    }
  },
  plugins: []
};
export default config;
