/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				first: '#66cc8a',
				second: '#1db990',
				third: '#e9e92f',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				cinzel: ['Cinzel', 'serif'],
				bubblegum: ['Bubblegum Sans', 'cursive'],
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				md: '3rem',
				lg: '4rem',
				xl: '6rem',
				'2xl': '6rem',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: { themes: ['forest', 'lemonade'] },
};
