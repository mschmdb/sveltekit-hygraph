// import vercel from '@sveltejs/adapter-vercel'
import adapter from '@sveltejs/adapter-static'
import sveltePreprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		sveltePreprocess({
			scss: {
				prependData: `@import 'src/scss/_colors.scss';`,
				renderSync: true,
				outputStyle: 'expanded'
			},

			postcss: true
		})
	],

	kit: {
		adapter: adapter()
	}
}

export default config
