const VIEW_STORAGE_KEY = 'viewedPosts';
const VIEW_COOLDOWN = 10800000;

function getViewedPosts() {
	const data = localStorage.getItem(VIEW_STORAGE_KEY);
	return data ? JSON.parse(data) : {};
}

export function updateViewedPost(slug: string) {
	const viewedPosts = getViewedPosts();
	viewedPosts[slug] = Date.now();
	localStorage.setItem(VIEW_STORAGE_KEY, JSON.stringify(viewedPosts));
}

export function canViewPost(slug: string) {
	const viewedPosts = getViewedPosts();
	const lastViewed = viewedPosts[slug];
	if (!lastViewed) return true;
	return Date.now() - lastViewed > VIEW_COOLDOWN;
}
