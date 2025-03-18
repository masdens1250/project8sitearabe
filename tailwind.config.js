/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Réduction à 3 couleurs principales
        primary: {
          DEFAULT: '#f29900', // Orange - Couleur d'accent principale
          dark: '#d88800',
          light: '#ffa826',
        },
        secondary: {
          DEFAULT: '#2c3e50', // Bleu foncé - Couleur de fond et texte principal
          dark: '#1a2530',
          light: '#3d5266',
        },
        neutral: {
          DEFAULT: '#f8f9fa', // Blanc cassé - Couleur de fond et contraste
          dark: '#e9ecef',
          light: '#ffffff',
        }
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
      boxShadow: {
        'custom': '0 4px 6px rgba(242, 153, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'custom-lg': '0 10px 15px rgba(242, 153, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
      },
      gradients: {
        'primary-to-dark': 'linear-gradient(135deg, #f29900 0%, #d88800 100%)',
        'dark-to-accent': 'linear-gradient(135deg, #2c3e50 0%, #1a2530 100%)',
      },
      fontFamily: {
        arabic: ['Amiri', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
};