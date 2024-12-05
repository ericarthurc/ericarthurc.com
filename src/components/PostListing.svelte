<script lang="ts">
	import { base } from '$app/paths';
	import type { PostMeta } from '@/types';
	import { browser } from '$app/environment';

	interface Props {
		meta: PostMeta;
		views: number | undefined;
	}

	let { meta, views }: Props = $props();
</script>

<li class="post-listing" class:featured={meta.featured}>
	<div class="post-listing-header" data-sveltekit-preload-data="false">
		<a class="post-listing-anchor" href={`${base}/blog/${meta.slug}`}
			><p class="post-listing-title">
				{meta.title}
			</p>
		</a>
		<div class="post-listing-info-box">
			<p class="post-listing-date">
				{new Date(meta.date).toLocaleDateString('en-us', {
					month: 'long',
					day: 'numeric',
					year: 'numeric'
				})}
			</p>
			{#if browser}
				<span class="post-listing-views-suffix">&nbsp;&nbsp;Views:&nbsp;</span>
				<span class="post-listing-views">{views}</span>
			{/if}
		</div>
		{#if meta.featured}
			<p class="post-listing-snippet">{meta.snippet}</p>
		{/if}
	</div>
	<div class="post-listing-categories">
		{#each meta.categories as c}
			<span class="post-listing-category">{c}</span>
		{/each}
	</div>
	{#if meta.skills_svgs}
		<div class="post-listing-skills">
			{#each meta.skills_svgs as s}
				{@html s}
			{/each}
		</div>
	{/if}
</li>
