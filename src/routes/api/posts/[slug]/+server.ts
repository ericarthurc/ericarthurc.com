import prisma from '$lib/server/xata';
import { error, json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	const post_views = await prisma.post_views.findFirst({ where: { slug: params.slug } });

	if (!post_views) {
		error(404, `${params.slug} not found`);
	}

	return json(post_views);
};

export const PATCH: RequestHandler = async ({ params }) => {
	await prisma.post_views.update({
		where: { slug: params.slug },
		data: { views: { increment: 1 } }
	});

	return json({});
};
