import type { Component } from 'svelte';

export type Post = {
	default: Component;
	metadata: { slug: string; title: string; date: Date; categories: string[] };
};
