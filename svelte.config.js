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
		highlighter: async (code, lang, _meta) => {
			return shiki.codeToHtml(code, {
				lang,
				theme: 'andromeeda',
				transformers: [
					{
						pre(hast) {
							return {
								type: 'element',
								tagName: 'div',
								properties: {
									className: 'code-block'
								},
								children: [
									{
										type: 'element',
										tagName: 'p',
										properties: {
											className: 'code-block-header'
										},
										children: [
											{
												type: 'element',
												tagName: 'span',
												properties: {
													className: 'language-name'
												},
												children: [{ type: 'text', value: lang }]
											}
										]
									},
									// {
									// 	type: 'element',
									// 	tagName: 'span',
									// 	properties: {
									// 		className: 'language-name'
									// 	},
									// 	children: [{ type: 'text', value: lang }]
									// },
									{
										type: 'element',
										tagName: 'pre',
										properties: {
											className: 'aero'
										},
										children: hast.children
									}
								]
							};
						},
						line(hast, line) {
							return {
								type: 'element',
								tagName: 'span',
								properties: {
									className: 'line'
								},
								children: hast.children
							};
						},
						span(hast, line) {
							return {
								type: 'element',
								tagName: 'span',
								properties: hast.properties,
								children: hast.children
							};
						}
					}
				]
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
