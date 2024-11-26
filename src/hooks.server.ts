import type { PostMeta } from '@/types';
import { SUPABASE_SERVICE } from '$env/static/private';

import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/supabase';

export const supabasePrivate = createClient<Database>(
	'https://ahixgcqifvllefpafjim.supabase.co',
	SUPABASE_SERVICE
);

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

	let counter = 0;
	await Promise.all(
		postSlugs.map(async (p) => {
			try {
				await supabasePrivate.from('posts').insert({ slug: p.slug, views: 0 });
				counter++;
			} catch (_) {}
		})
	);
	console.log(`Posts Generated: ${counter}`);
}

await loader();
