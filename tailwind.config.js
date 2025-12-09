/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 다크모드 활성화
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Comic Neue', 'Gamja Flower', 'Fredoka', 'cursive'],
        'comic-neue': ['Comic Neue', 'Gamja Flower', 'Fredoka', 'cursive'],
      },
      colors: {
        mainBlack: '#232323',
        mainGray: '#EFEFF1',
        darkGray: '#0C0C0C',
        lightGray: '#373737',
        superLightGray: '#F1F2F5',
        white: '#fff',
        black: '#000',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'right-modal-up': {
          '0%': { right: '70px', opacity: '0' },
          '100%': { right: '75px', opacity: '100' },
        },
        'scale-zoomin': {
          '0%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        'scale-zoomin-bgtxt': {
          '0%': { transform: 'scale(1.2) translateY(-70%) translateX(-50%)' },
          '100%': { transform: 'scale(1) translateY(-70%) translateX(-50%)' },
        },
      },
      animation: {
        'right-modal-up': 'right-modal-up 0.5s',
        'scale-zoomin': 'scale-zoomin 3s',
        'scale-zoomin-bgtxt': 'scale-zoomin-bgtxt 3s',
      },
      dropShadow: {
        md: '5px 4px 3px rgba(255, 255, 255, 0.25)',
      },
      backgroundImage: {
        main: 'url("https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80")', // 기본 배경 이미지 - 원하는 이미지 URL로 변경 가능
      },
    },
  },
  plugins: [
    ({ addUtilities }) => {
      addUtilities({
        '.screen-width': {
          '@apply mx-auto lg:max-w-[1140px] md:max-w-[720px] sm:max-w-[576px]': '',
        },
      });
    },
  ],
};
