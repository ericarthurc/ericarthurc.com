import type { PageServerLoad } from './$types';
import { postReducer } from '$lib/server/post-reducer';

export const load: PageServerLoad = async () => {
	const paths = import.meta.glob(`$posts/*.md`, { eager: true });

	const posts = postReducer(paths, false);

	return {
		posts
	};
};
