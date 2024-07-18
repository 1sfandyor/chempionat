import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      screens: {
        sm: '600px',
        md: '768px',
        lg: '984px',
        xl: '1900px',
        '2xl': '1300px',
      },

      colors: {
        black: '#242424',
        gray: "#F0F0F0",
<<<<<<< HEAD
        lightGray: "#AAA",
        borderGray: '#E9E9E9',
        red: '#EA4335',
        purple: '#6900FF'
=======
        lightGray: "#AAAAAA",
        primaryBg: '#3a3a3a',
        primaryBorder: '#F5F4F2',
        green: '#4FDA38',
>>>>>>> efc2795ff02d3468fa672fe2e894806c25d18505
      },

      fontFamily: {
        primary: ['Arial', 'sans-serif']
      }
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xl: '1.5rem',
        '2xl': '3.12rem',
      },

      screens: {
        sm: '600px',
        md: '768px',
        lg: '984px',
        xl: '1900px',
        '2xl': '1px',
      },
    }
  },
  
  plugins: [],
};
export default config;
