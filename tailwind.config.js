/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react'
import { dark, light } from 'daisyui/src/theming/themes'

export const content = [
  './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',

  // Or if using `src` directory:
  './src/**/*.{js,ts,jsx,tsx,mdx}',
  './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
]
export const theme = {
  extend: {
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
    }
  }
}
export const plugins = [require('daisyui')]
export const daisyui = {
  themes: [
    {
      dark: {
        ...dark,
        primary: '#8B1874',
        secondary: '#B71375',
        accent: '#FC4F00',
        'base-100': '#1F1D1D',
        'base-content': '#FBFBFE'
      }
    },
    {
      light: {
        ...light,
        primary: '#8B1874',
        secondary: '#B71375',
        accent: '#FC4F00',
        'base-100': '#FCFAF8',
        'base-content': '#130E01'
      }
    }
  ]
}
