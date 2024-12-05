<script lang="ts">
	import type { PageData } from './$types';
	import PostContainer from '#/PostContainer.svelte';

	export let data: PageData;

	let featuredPosts = data.posts.filter((post) => post.featured);
	let nonFeaturedPosts = data.posts.filter((post) => !post.featured);
</script>

<div class="page-title-box">
	<h3>Blog</h3>
</div>
<PostContainer posts={data.posts} nonFeatured={true} />
