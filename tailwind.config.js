/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'colorGreen': '#6CC21B',
        'colorGreenHigh': '#237425',
        'colorGray': '#696A68',
        'colorBlack': '#2B2B2B',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '0,625rem',
        },
      },
      backgroundImage: {
        'hero': "url('/images/hero.png')",
        'blog': "url('/images/blogHeader.jpeg')",
        'voice': "url('/images/voice/bg-green.svg')",
        'contact': "url('/images/contact-us.jpeg')",
        'aboutUs': "url('/images/aboutUsHeader.jpeg')",
        'aboutUsImg1': "url('/images/aboutUsBgHowWeWork.png')",
        'aboutUsImg2': "url('/images/aboutUsBgOutGoal.png')",
      },
      fontFamily: {
        'Dana': 'Dana',
        'DanaMedium': 'Dana Medium',
        'DanaBold': 'Dana Bold',
        'MorabbaLight': 'Morabba Light',
        'MorabbaBold': 'Morabba Bold',
        'MorabbaMedium': 'Morabba Medium',
      },
      animation: {
        'fadeTop': 'fadeTop 1s ease-in-out',
        'fadeRight': 'fadeRight 1s ease-in-out',
      },
      keyframes: {
        'fadeTop': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        'fadeRight': {
          '0%': { opacity: '0', transform: 'translateX(200px)' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1', transform: 'translateX(0px)' },
        },
      },
    },
    screens: {
      '2xs': '380px',
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '&>*');
      addVariant('child-hover', '&>*:hover');
    },
  ],
};
