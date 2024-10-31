import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { bundledLanguages, bundledThemes, createHighlighter } from 'shiki';

const shiki = await createHighlighter({
	themes: [...Object.keys(bundledThemes)],
	langs: [...Object.keys(bundledLanguages)]
});

// Used to parse around svelte specific injection characters
// /** @return {string} */
// const escape_svelty = (str) =>
// 	str
// 		.replace(/[{}`]/g, (c) => ({ '{': '&#123;', '}': '&#125;', '`': '&#96;' })[c])
// 		.replace(/\\([trn])/g, '&#92;$1');

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	remarkPlugins: [],
	rehypePlugins: [],
	highlight: {
		highlighter: async (code, lang, _meta) => {
			// warpping the return in the @html directive will escape svelte injection
			return `{@html \`${shiki.codeToHtml(code, {
				lang,
				theme: 'dark-plus',
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
			})}\`}`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		// inline all the css to the header <style> tag
		inlineStyleThreshold: 10240,
		adapter: adapter(),
		alias: {
			'#': './src/components',
			'@': './src',
			$posts: './_posts'
		},
		paths: {
			relative: false,
			base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
		},
		prerender: {
			entries: ['*'],
			origin: 'https://ericchristensen.dev'
		}
	},

	extensions: ['.svelte', '.md']
};

export default config;
