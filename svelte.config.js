import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	remarkPlugins: [],
	rehypePlugins: [rehypeSlug]
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		inlineStyleThreshold: 1024,
		adapter: adapter(),
		alias: {
			'#': './src/components',
			'@': './src',
			$posts: './_posts'
		},
		prerender: {
			entries: ['*']
		}
	},

	extensions: ['.svelte', '.md']
};

export default config;
