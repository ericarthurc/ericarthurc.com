import prisma from '$lib/server/xata';
import { json, type RequestHandler } from '@sveltejs/kit';

export const PATCH: RequestHandler = async ({ params, request }) => {
	await prisma.post_views.update({
		where: { slug: params.slug },
		data: { views: { increment: 1 } }
	});

	return json({});
};
