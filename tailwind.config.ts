import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			primaryGreen: {
  				'500': 'var(--primary-green-500)',
  				'600': 'var(--primary-green-600)',
  				'700': 'var(--primary-green-700)',
				'50' : 'var(--primary-green-50)'
  			},
  			secondaryGreen: {
  				'400': 'var(--secondary-green-400)',
  				'500': 'var(--secondary-green-500)'
  			},
  			customWhite: {
  				'500': 'var(--white-500)'
  			},
  			customGrey: {
  				'100': 'var(--grey-100)',
  				'300': 'var(--grey-300)',
  				'400': 'var(--grey-400)',
  				'500': 'var(--grey-500)'
  			},
  			customBlack: {
  				'300': 'var(--black-300)',
  				'400': 'var(--black-400)',
  				'500': 'var(--black-500)'
  			},
  			redTheme: 'hsl(var(--redTheme))',
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
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			inter: 'var(--font-inter)',
  			poppins: 'var(--font-poppins)',
  			helveticaNueue: [
  				'Helvetica Neue',
  				'Arial',
  				'sans-serif'
  			]
  		},
  		letterSpacing: {
  			'-1%': 'var(--letter-spacing-minus-one)',
  			'-2%': 'var(--letter-spacing-minus-two)'
  		},
  		lineHeight: {
  			'20': '1.25rem',
  			'24': '1.5rem',
  			'28': '1.75rem',
  			'32': '2rem',
  			'36': '2.25rem',
  			'40': '2.5rem',
  			'44': '2.75rem',
  			'48': '3rem'
  		},
  		fontSize: {
  			'paragraph-large': '1.125rem',
  			'paragraph-medium': '1rem',
  			'paragraph-small': '0.875rem',
  			'paragraph-Xsmall': '0.75rem',
  			h6: '1.25rem',
  			h5: '1.5rem',
  			h4: '1.75rem',
  			h3: '2rem',
  			h2: '2.25rem',
  			h1: '2.5rem'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
