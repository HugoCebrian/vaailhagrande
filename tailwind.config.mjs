/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
				sm: '1rem',
				md: '0'
				},
			},

			fontFamily: {	
				raleway: 'Raleway',
				albert: 'Albert Sans',
				roboto: 'Roboto',
				poppins: 'Poppins',
			},
			colors: {
				text: '#373737',
				second: '#EB3850',
				shape: '#191D31',
				orange: '#FF3D0C',
				offwhite: '#FEFEFE',
				green: '#228b22',
				offblack: '#4A4A4A',
			},
		},
	},
	plugins: [
		require('flowbite/plugin'),
		function ({ addComponents }) {
		  addComponents({
			'.container': {
			  maxWidth: '90%',
			  '@screen sm': {
				maxWidth: '640px',
			  },
			  '@screen md': {
				maxWidth: '768px',
			  },
			  '@screen lg': {
				maxWidth: '1024px',
			  },
			  '@screen xl': {
				maxWidth: '1280px',
			  },
			}
		  })
		},
	],
}
