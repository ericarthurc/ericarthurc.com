<script lang="ts">
	import type { PostMeta } from '@/types';
	import PostListing from './PostListing.svelte';
	import { onMount } from 'svelte';
	import type { post_views } from '@prisma/client';

	interface Props {
		posts: PostMeta[];
		nonFeatured: boolean;
	}

	let views_array: post_views[] | undefined = $state();

	onMount(async () => {
		try {
			const resp = await fetch(`/api/posts`, { method: 'GET' });
			const xata_post = await resp.json();

			views_array = xata_post;
		} catch (_error) {}
	});

	let { posts, nonFeatured }: Props = $props();

	let featuredPosts = posts.filter((post) => post.featured);
	let nonFeaturedPosts = posts.filter((post) => !post.featured);

	function getViews(slug: string) {
		return views_array?.find((view) => view.slug == slug)?.views;
	}
</script>

{#if featuredPosts.length > 0}
	<div class="post-list-featured">
		<h4>Featured Posts</h4>
		<ul class="post-list">
			{#each featuredPosts as p}
				<PostListing meta={p} views={getViews(p.slug)} />
			{/each}
		</ul>
	</div>
{/if}
{#if nonFeatured}
	{#if nonFeaturedPosts.length > 0}
		<div class="post-list-non-featured">
			<h4>Posts</h4>
			<ul class="post-list">
				{#each nonFeaturedPosts as p}
					<PostListing meta={p} views={getViews(p.slug)} />
				{/each}
			</ul>
		</div>
	{/if}
{/if}
