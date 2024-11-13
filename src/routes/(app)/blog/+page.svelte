<script lang="ts">
	import type { PageData } from './$types';
	import PostListing from '#/PostListing.svelte';

	export let data: PageData;
</script>

<ul class="post-list">
	{#each data.posts as p}
		<PostListing {...p} />
	{/each}
</ul>
