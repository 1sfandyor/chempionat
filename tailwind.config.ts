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
        '2xl': '1496px',
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
        '2xl': '2rem',
      },

      screens: {
        sm: '600px',
        md: '768px',
        lg: '984px',
        xl: '1900px',
        '2xl': '1496px',
      },
    }
  },
  
  plugins: [],
};
export default config;
