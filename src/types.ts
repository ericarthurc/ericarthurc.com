import type { Component } from 'svelte';

export type Post = {
	content: Component;
	meta: PostMeta;
};

export type PostMeta = {
	slug: string;
	title: string;
	date: Date;
	published: boolean;
	featured: boolean;
	categories: string[];
	skills: string[];
};
