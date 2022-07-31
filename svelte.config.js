import adapter from "@sveltejs/adapter-static";
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

// How to Deploy SvelteKit Apps to Github Pages
// https://sveltesaas.com/articles/sveltekit-github-pages-guide/

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

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
