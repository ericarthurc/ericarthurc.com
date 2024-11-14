<script lang="ts">
	import type { PageData } from './$types';
	import PostListing from '#/PostListing.svelte';

	export let data: PageData;
</script>

<div class="page-title-box">
	<h3>Home</h3>
</div>
<div class="home-info-box">
	<div>
		<h4>[Ericarthurc]</h4>
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
