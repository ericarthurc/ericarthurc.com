import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import { bundledLanguages, createHighlighter } from 'shiki';

const shiki = await createHighlighter({
	themes: ['andromeeda'],
	langs: [...Object.keys(bundledLanguages)]
});

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	highlight: {
		highlighter: async (code, lang, meta) => {
			return shiki.codeToHtml(code, {
				lang,
				theme: 'andromeeda',
				cssVariablePrefix: '--theme-',
				defaultColor: ''
			});
		}
	},
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
