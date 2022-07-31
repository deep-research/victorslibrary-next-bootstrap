import adapter from "@sveltejs/adapter-static";
import preprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer'

const dev = process.env.NODE_ENV === 'development';

// Guides Used:

// 1. How to Deploy SvelteKit Apps to Github Pages
// https://sveltesaas.com/articles/sveltekit-github-pages-guide/

// 2. Svelte-Preprocess Getting Started Guide
// https://github.com/sveltejs/svelte-preprocess/blob/main/docs/getting-started.md

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		sourceMap: dev,
		scss: {
			// We can use a path relative to the root because
			// svelte-preprocess automatically adds it to `includePaths`
			// if none is defined.
				prependData: `@import 'src/styles/variables.scss';`
			},
		postcss: {
			plugins: [autoprefixer()]
		}		
	}),

    kit: {
        adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
        paths: {
            // change below to your repo name
            base: dev ? "" : "",
        },
		prerender: {
			// This can be false if you're using a fallback (i.e. SPA mode)
			default: true
		}
    }
};

export default config;
