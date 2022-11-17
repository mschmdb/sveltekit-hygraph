// import vercel from '@sveltejs/adapter-vercel'
import adapter from '@sveltejs/adapter-static'
import sveltePreprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [{
		crawl: true,
		enabled: true,
		onError: 'continue',
		entries: ['*'],
		postcss: true,
		preserve: ['ld+json'],
	},
		
		sveltePreprocess({
			scss: {
				prependData: `@import 'src/scss/_colors.scss';`,
				renderSync: true,
				outputStyle: 'expanded'
			}
	

			
		})
	],

	kit: {
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: 'index.html',
			precompress: false
		}),
		// prerender: {
		// 	default: true
		// },
		trailingSlash: 'always'
	}
	
}

export default config
