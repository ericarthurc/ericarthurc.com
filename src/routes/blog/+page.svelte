<script lang="ts">
	import type { PageData } from './$types';
	import PostListing from '#/PostListing.svelte';

	export let data: PageData;
</script>

<h2>Blog</h2>
<h4 style="font-weight: 500;color: #BADA55;">[Posts]</h4>

<ul class="post-list">
	{#each data.posts as p}
		<PostListing {...p} />
	{/each}
</ul>
