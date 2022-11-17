const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
    colors: {
      'mtc': '#890c58',
    },
		extend: {}
	},

	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
}

module.exports = config
