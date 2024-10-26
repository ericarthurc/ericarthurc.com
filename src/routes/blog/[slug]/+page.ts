import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';
import type { Post } from '@/types';

export const load: PageLoad = async ({ params }): Promise<Post> => {
	const post = await import(`$posts/${params.slug}.md`);

	if (!post) {
		error(404, 'Not found');
	}

	return {
		content: post.default,
		meta: { ...post.metadata, slug: params.slug }
	};
};

export const entries: EntryGenerator = () => {
	const paths = import.meta.glob(`$posts/*.md`, { eager: true });

	return Object.keys(paths).map((path) => ({
		slug: path.split('/').at(-1)!.replace('.md', '')
	}));
};
