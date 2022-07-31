import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

const dev = process.env.NODE_ENV === 'development';

// Guides Used:

// 1. How to Deploy SvelteKit Apps to Github Pages
// https://sveltesaas.com/articles/sveltekit-github-pages-guide/

// 2. Svelte-Preprocess Getting Started Guide
// https://github.com/sveltejs/svelte-preprocess/blob/main/docs/getting-started.md

// 3. How to test SvelteKit app with Jest
// https://blog.stranianelli.com/test-sveltekit-app-with-jest-english/

// 4. Add mdsvex to Svelte
// https://github.com/svelte-add/mdsvex

// 5. Add Bootstrap to Svelte
// https://github.com/svelte-add/bootstrap

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			sourceMap: dev,
			scss: {
				// We can use a path relative to the root because
				// svelte-preprocess automatically adds it to `includePaths`
				// if none is defined.
				// prependData: `@import 'src/styles/variables.scss';`
				prependData: '@use "src/styles/variables.scss" as *;'
			},
			postcss: {
				plugins: [autoprefixer()]
			}
		}),
		mdsvex(mdsvexConfig)
	],

	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		paths: {
			// change below to your repo name
			base: dev ? '' : ''
		},
		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		}
	}
};

export default config;
