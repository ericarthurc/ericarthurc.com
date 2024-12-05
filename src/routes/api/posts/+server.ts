import prisma from '$lib/server/xata';
import { json, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({}) => {
	const post_views_array = await prisma.post_views.findMany();

	return json(post_views_array);
};
