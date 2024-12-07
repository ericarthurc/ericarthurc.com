import type { PageServerLoad } from './$types';
import prisma from '$lib/server/xata';
import { canViewPostCookie, updateViewedPostCookie } from '$lib/viewCooldown';

export const load: PageServerLoad = async ({ params, cookies }) => {
	if (canViewPostCookie(cookies, params.slug)) {
		(async () => {
			await prisma.post_views.update({
				where: { slug: params.slug },
				data: { views: { increment: 1 } }
			});
		})();
		updateViewedPostCookie(cookies, params.slug);
	}

	return;
};
