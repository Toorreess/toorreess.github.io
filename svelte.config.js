import { mdsvex } from "mdsvex";
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
	adapter: adapter()
    },

    preprocess: [mdsvex({extensions: [".md", ".svx"]})],
    extensions: [".svelte", ".svx", ".md"]
};

export default config;
