<script lang="ts">
	import type { PageData } from './$types';
	import PostListing from '#/PostListing.svelte';

	export let data: PageData;
</script>

<div style="margin-bottom: 20px">
	<h3
		style="padding-left: 15px; border-left: 2px solid var(--c-green4);margin: 0;
		margin-bottom: 20px;
		font-weight: 300;
		color: var(--c-green4);"
	>
		Home
	</h3>
	<div
		style="border-left: 2px solid var(--c-purple1); padding-left: 15px; margin: 0; line-height: 1.5;"
	>
		<h4
			style="margin: 0;
		font-weight: 300;
		color: var(--c-purple1); margin-bottom: 10px;"
		>
			[Ericarthurc]
		</h4>
		<p style="margin: 0;">
			I’m a 29 year old EHR application specialist in the medical field, certified in Epic's OpTime
			and Anesthesia modules, with a focus on security and analytics. With nearly a decade of coding
			experience, I have a deep interest in web technologies and the evolving landscape of HTTP.
		</p>
	</div>
</div>

{#if data.posts.length > 0}
	<div class="post-list-featured">
		<h4>[Featured Posts]</h4>
		<ul class="post-list">
			{#each data.posts as p}
				<PostListing {...p} />
			{/each}
		</ul>
	</div>
{/if}
