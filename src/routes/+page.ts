import type { PageLoad } from './$types';
import type { PostMeta } from '@/types';

export const load: PageLoad = async () => {
	const paths = import.meta.glob(`$posts/*.md`, { eager: true });

	let posts = Object.entries(paths).map(([path, file]) => {
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<PostMeta, 'slug'>;
			const post = { ...metadata, slug } satisfies PostMeta;

			return {
				...post
			};
		}
	}) as PostMeta[];

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return { posts };
};
