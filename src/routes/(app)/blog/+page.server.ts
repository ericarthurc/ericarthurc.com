import type { PageServerLoad } from './$types';
import { postReducer } from '$lib/server/post-reducer';
import prisma from '$lib/server/xata';

export const load: PageServerLoad = async () => {
	const paths = import.meta.glob(`$posts/*.md`, { eager: true });

	const posts = postReducer(paths, false);

	return {
		posts
	};
};
