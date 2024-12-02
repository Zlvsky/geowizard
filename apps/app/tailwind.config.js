/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif']
      },
      colors: {
        primary: '#226BFE',
        background: '#ffffff',
        foreground: '#2A2A2A',
        text: {
          DEFAULT: '#9999A3',
          foreground: '#BEBEBE'
        },
        gray: {
          DEFAULT: '#ECEDF0',
          foreground: '#303239'
        },

        'dark-background': '#1B1B1C',
        light: '#F6F6F6',
        slate: '#848FA1',
        placeholder: '#9BA3AF',
        'slate-text': '#6E7B92',
        ring: 'hsl(var(--ring))',

        input: '#ECEDF0',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        // muted: {
        //   DEFAULT: 'hsl(var(--muted))',
        //   foreground: 'hsl(var(--muted-foreground))'
        // },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      boxShadow: {
        container: '1px 15px 50px 0px rgba(216, 222, 232, 0.6)',
        hover: '0px 0px 25px 0px rgba(0, 0, 0, 0.1)',
        cloud: '0px 3px 6px 0px rgba(0, 0, 0, 0.16)'
      },
      keyframes: {
        toastEnter: {
          from: { transform: 'scale(.9)', opacity: 0 },
          to: { transform: 'scale(1)', opacity: 1 }
        },
        toastLeave: {
          from: { transform: 'scale(1)', opacity: 1 },
          to: { transform: 'scale(.9)', opacity: 0 }
        }
      },
      animation: {
        toastEnter: 'toastEnter .2s ease-out',
        toastLeave: 'toastLeave .15s ease-in forwards'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
  safelist: []
}
