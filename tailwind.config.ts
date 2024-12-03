import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				accent: {
					100: '#6CF3A4', //green
					200: '#00FFD1', //blue
					300: '#FF002E', //red
					400: '#FFE366', //yellow
				},
				neutral: '#FDFDFC', //white
				base: {
					900: '#030712', //black
					850: '#25262B', //darkgrey
					800: '#2A2B2F', //grey
					700: '#2D2E32', //lightgray
				},
			},
			backgroundImage: {
				'hero-picture': "url('/assets/images/hero-picture.png')",
			},
			keyframes: {
				scrollIcon: {
					'0%': { opacity: '1', top: '29%' },
					'15%': { opacity: '1', top: '50%' },
					'50%': { opacity: '0', top: '50%' },
					'100%': { opacity: '0', top: '29%' },
				},
			},
			animation: {
				scrollIcon: 'scrollIcon 2s linear infinite',
			},
		},
	},
	plugins: [require('tailwind-scrollbar')],
};
export default config;
