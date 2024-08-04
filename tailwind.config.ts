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
					800: '#2D2E32', //grey
					700: '#696971', //lightgray
				},
			},
		},
	},
	plugins: [],
};
export default config;
