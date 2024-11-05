<script lang="ts">
	import type { PageData } from '../$types';
	import PostListing from '#/PostListing.svelte';

	export let data: PageData;
</script>

<h2>Home</h2>
<!-- 
<h3>
	I am an EHR application specialist in the medical field. I am certified in Epic's OpTime and
	Anethesia applications with a subspecialty in secuity and analytic.
</h3> -->
<h4 style="font-weight: 500;color: #BADA55;">[Featured Posts]</h4>

<ul class="post-list">
	{#each data.posts as p}
		<PostListing {...p} />
	{/each}
</ul>
