import type { Cookies } from '@sveltejs/kit';

const VIEW_STORAGE_KEY = 'viewedPosts';
const VIEW_COOLDOWN = 10800000;

function getViewedPostsCookie(cookies: Cookies) {
	const data = cookies.get(VIEW_STORAGE_KEY);

	return data ? JSON.parse(data) : {};
}

export function updateViewedPostCookie(cookies: Cookies, slug: string) {
	const viewedPosts = getViewedPostsCookie(cookies);
	viewedPosts[slug] = Date.now();

	cookies.set(VIEW_STORAGE_KEY, JSON.stringify(viewedPosts), {
		maxAge: 365 * 24 * 60 * 60 * 1000,
		httpOnly: true,
		path: '/',
		secure: true
	});
}

export function canViewPostCookie(cookies: Cookies, slug: string) {
	const viewedPosts = getViewedPostsCookie(cookies);
	const lastViewed = viewedPosts[slug];
	if (!lastViewed) return true;
	return Date.now() - lastViewed > VIEW_COOLDOWN;
}
