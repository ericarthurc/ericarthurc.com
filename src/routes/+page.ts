import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { Component } from 'svelte';

export const load: PageLoad = async () => {
	// const post = await import(`$posts/${params.slug}.md`);
	const posts = import.meta.glob(`$posts/*.md`);
	console.log(posts);

	// return {
	// 	content: post.default as Component,
	// 	meta: post.metadata as { slug: string; title: string; date: Date; categories: string[] }
	// };

	return {};

	// error(404, 'Not found');
};
