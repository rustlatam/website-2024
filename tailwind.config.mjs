const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: (theme) => ({
				montserrat: 'Montserrat,"Helvetica Neue",Helvetica,Arial,sans-serif'
			}),
			backgroundImage: (theme) => ({
				hero: "url('/assets/img/intro-bg-2024.png')",
			}),
			textShadow: {
				hero: '8px 6px 0px',
				"intro-text": "4px 4px"
			},
		},
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
		  matchUtilities(
			{
			  'text-shadow': (value) => ({
				textShadow: `${value} var(--tw-shadow-color)`,
			  }),
			},
			{ values: theme('textShadow') }
		  )
		}),
	  ],
}
