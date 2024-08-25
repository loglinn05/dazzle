/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      header: 'Cinzel',
      text: 'Wittgenstein',
      logo: '"Italianno"'
    },
    extend: {
      backgroundImage: {
        'header-1': "url('./src/assets/img/header-1.jpg')",
        'header-2': "url('./src/assets/img/header-2.jpeg')",
        'facebook-gradient': 'linear-gradient(to bottom, #00A0F7 0%, #044CAA 100%)',
        'instagram-gradient':
          'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)'
      },
      textShadow: {
        sm: '0 0 2px var(--tw-shadow-color)',
        DEFAULT: '0 0 4px var(--tw-shadow-color)',
        lg: '0 0 8px var(--tw-shadow-color)'
      },
      screens: {
        lg: '961px',
        sm: '576px'
      }
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value
          })
        },
        { values: theme('textShadow') }
      )
    })
  ],
  corePlugins: {
    preflight: false
  }
}
