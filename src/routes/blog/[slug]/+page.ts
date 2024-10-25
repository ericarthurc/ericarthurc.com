import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageLoad } from './$types';
import type { Post } from '@/types';

export const load: PageLoad = async ({ params }) => {
	const post = (await import(`$posts/${params.slug}.md`)) as Post;

	if (!post) {
		error(404, 'Not found');
	}

	return {
		content: post.default,
		meta: post.metadata
	};
};

export const entries: EntryGenerator = () => {
	return [{ slug: 'post' }, { slug: 'post_2' }, { slug: 'post_3' }, { slug: 'post_4' }];
};
