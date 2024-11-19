<script lang="ts">
	import { base } from '$app/paths';
	import type { PostMeta } from '@/types';

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
		<p class="post-listing-date">
			{new Date(date).toLocaleDateString('en-us', {
				month: 'long',
				day: 'numeric',
				year: 'numeric'
			})}
		</p>
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
