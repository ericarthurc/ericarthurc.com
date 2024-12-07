import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';
import type { Post, PostMeta } from '@/types';
import { render } from 'svelte/server';
// import prisma from '$lib/server/xata';

export const load: PageLoad = async ({ params }): Promise<Post> => {
	console.log('UNIVERSAL LOAD()');
	const post = await import(`$posts/${params.slug}.md`);

	return {
		content: post.default,
		meta: { ...post.metadata, slug: params.slug }
	};
};

// export const entries: EntryGenerator = () => {
// 	const paths = import.meta.glob(`$posts/*.md`, { eager: true });

// 	return Object.entries(paths).reduce<{ slug: string }[]>((posts, [path, file]) => {
// 		const slug = path.split('/').at(-1)?.replace('.md', '');

// 		if (file && typeof file === 'object' && 'metadata' in file && slug) {
// 			const { metadata } = file as { metadata: Omit<PostMeta, 'slug'> };

// 			if (metadata.published) {
// 				posts.push({ slug });
// 			}
// 		}

// 		return posts;
// 	}, []);
// };
