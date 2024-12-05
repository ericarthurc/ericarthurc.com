import { postReducer } from '$lib/server/post-reducer';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const paths = import.meta.glob(`$posts/*.md`, { eager: true });

	const posts = postReducer(paths, true);

	return {
		posts
	};
};
