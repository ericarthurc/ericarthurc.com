import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import { bundledLanguages, bundledThemes, createHighlighter } from 'shiki';
import fs from 'fs';

const codeSandBoxTheme = JSON.parse(fs.readFileSync('syntax_themes/codesandbox-dark.json', 'utf8'));

const shiki = await createHighlighter({
	themes: [codeSandBoxTheme],
	langs: [...Object.keys(bundledLanguages)]
});

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.svx', '.md'],
	remarkPlugins: [],
	rehypePlugins: [],
	highlight: {
		highlighter: async (code, lang, _meta) => {
			// warpping the return in the @html directive will escape svelte injection
			return `{@html \`${escapeSvelte(
				shiki.codeToHtml(code, {
					lang,
					theme: 'CodeSandbox',
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
				})
			)}\`}`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		// inline all the css to the header <style> tag
		inlineStyleThreshold: 10240,
		adapter: adapter(),
		alias: {
			$lib: './src/lib',
			'^': './src/components/icons',
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
			origin: 'https://ericarthurc.com'
		}
	},

	extensions: ['.svelte', '.md']
};

export default config;
