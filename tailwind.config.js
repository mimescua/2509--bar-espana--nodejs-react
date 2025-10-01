/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{ts,tsx,js,jsx}', './public/index.html'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Soria', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
