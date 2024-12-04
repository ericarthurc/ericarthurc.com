import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';
import type { Post, PostMeta } from '@/types';
import { render } from 'svelte/server';
// import prisma from '$lib/server/xata';

export const load: PageServerLoad = async ({ params }): Promise<Post> => {
	const post = await import(`$posts/${params.slug}.md`);

	if (!post) {
		error(404, 'Not found');
	}

	// (async () => {
	// 	await fetch(`/api/posts/${params.slug}`, { method: 'PATCH' });
	// 	console.log('HERE');
	// })();

	return {
		content: render(post.default).body,
		meta: { ...post.metadata, slug: params.slug }
	};
};

export const entries: EntryGenerator = () => {
	const paths = import.meta.glob(`$posts/*.md`, { eager: true });

	return Object.entries(paths).reduce<{ slug: string }[]>((posts, [path, file]) => {
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const { metadata } = file as { metadata: Omit<PostMeta, 'slug'> };

			if (metadata.published) {
				posts.push({ slug });
			}
		}

		return posts;
	}, []);
};
