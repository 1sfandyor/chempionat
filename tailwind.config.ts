import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
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
  			'2xl': '1300px'
  		},
  		colors: {
  			black: '#242424',
  			gray: '#F0F0F0',
  			lightGray: '#AAA',
  			borderGray: '#E9E9E9',
  			border: 'hsl(var(--border))',
  			grayBorder: '#E4E4E4',
  			grayBg: '#f4f4f4',
  			red: '#EA4335',
  			purple: '#6900FF',
  			primaryBg: '#3a3a3a',
  			primaryBorder: '#F5F4F2',
  			green: '#4FDA38',
  			orange: '#FF7A00',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
  	container: {
  		center: 'true',
  		padding: {
  			DEFAULT: '1rem',
  			xl: '1.5rem',
  			'2xl': '3.12rem'
  		},
  		screens: {
  			sm: '600px',
  			md: '768px',
  			lg: '984px',
  			xl: '1900px',
  			'2xl': '1px'
  		}
  	}
  },
  
  plugins: [require("tailwindcss-animate")]

};
export default config;
