<script lang="ts">
	import type { PageData } from './$types';
	import PostListing from '#/PostListing.svelte';

	export let data: PageData;

	let featuredPosts = data.posts.filter((post) => post.featured);
	let nonFeaturedPosts = data.posts.filter((post) => !post.featured);
</script>

<div class="page-title-box">
	<h3>Blog</h3>
</div>
<div class="post-list-box">
	{#if featuredPosts.length > 0}
		<div class="post-list-featured">
			<h4>Featured Posts</h4>
			<ul class="post-list">
				{#each featuredPosts as p}
					<PostListing {...p} />
				{/each}
			</ul>
		</div>
	{/if}
	{#if nonFeaturedPosts.length > 0}
		<div class="post-list-non-featured">
			<h4>Posts</h4>
			<ul class="post-list">
				{#each nonFeaturedPosts as p}
					<PostListing {...p} />
				{/each}
			</ul>
		</div>
	{/if}
</div>
