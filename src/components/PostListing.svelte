<script lang="ts">
	import { base } from '$app/paths';
	import { supabase } from '$lib/supbaseClient';
	import type { PostMeta } from '@/types';

	async function fetchPostViews() {
		return await supabase.from('post_views_counter').select().eq('slug', slug).maybeSingle();
	}

	let {
		slug,
		title,
		date,
		snippet,
		categories,
		skills_svgs,
		featured = false
	}: PostMeta = $props();
</script>

<li class="post-listing" class:featured>
	<div class="post-listing-header">
		<a class="post-listing-anchor" href={`${base}/blog/${slug}`}
			><p class="post-listing-title">
				{title}
			</p>
		</a>
		<div class="post-listing-info-box">
			<p class="post-listing-date">
				{new Date(date).toLocaleDateString('en-us', {
					month: 'long',
					day: 'numeric',
					year: 'numeric'
				})}
			</p>
			<span>&nbsp;～&nbsp;</span>
			<span class="post-listing-count-suffix">Views:&nbsp;</span>
			{#await fetchPostViews()}
				<span class="post-listing-count"></span>
			{:then post}
				{#if post}
					<span class="post-listing-count">{post.data?.count || 0}</span>{/if}
			{/await}
		</div>
		{#if featured}
			<p class="post-listing-snippet">{snippet}</p>
		{/if}
	</div>
	<div class="post-listing-categories">
		{#each categories as c}
			<span class="post-listing-category">{c}</span>
		{/each}
	</div>
	{#if skills_svgs}
		<div class="post-listing-skills">
			{#each skills_svgs as s}
				{@html s}
			{/each}
		</div>
	{/if}
</li>
