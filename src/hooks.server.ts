import prisma from '$lib/server/xata';
import type { PostMeta } from '@/types';
import type { Handle } from '@sveltejs/kit';

async function loader() {
	const paths = import.meta.glob(`$posts/*.md`, { eager: true });

	const postSlugs = Object.entries(paths).reduce<{ slug: string }[]>((posts, [path, file]) => {
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const { metadata } = file as { metadata: Omit<PostMeta, 'slug'> };

			if (metadata.published) {
				posts.push({ slug });
			}
		}

		return posts;
	}, []);

	try {
		const ids = await prisma.post_views.createManyAndReturn({
			select: { xata_id: true },
			data: postSlugs
		});
		console.log(ids);
	} catch (error) {
		console.log('No new posts generated in database');
	}
}

await loader();

// export const handle: Handle = async ({ event, resolve }) => {
// 	const response = await resolve(event);

// 	return response;
// };
