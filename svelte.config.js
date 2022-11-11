import vercel from '@sveltejs/adapter-vercel'
import sveltePreprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [
		sveltePreprocess({
			scss: {
				prependData: `@import 'src/scss/_colors.scss';`,
				renderSync: true,
				outputStyle: 'expanded'
			}
		})
	],
	kit: {
		adapter: vercel({
			edge: false,
			external: [],
			split: false
		}),
		alias: {
			$src: './src'
		}
	}
}

export default config
