<script lang="ts">
	import type { PageData } from './$types';
	import PostContainer from '#/PostContainer.svelte';

	export let data: PageData;
</script>

<div class="page-title-box">
	<h3>Home</h3>
</div>
<div class="home-info-box">
	<h4>Ericarthurc</h4>
	<p>
		I’m a 29 year old EHR application specialist in the medical field, certified in Epic's OpTime
		and Anesthesia modules, with a focus on security and analytics. With nearly a decade of coding
		experience, I have a deep interest in web technologies and the evolving landscape of HTTP.
	</p>
</div>
<PostContainer posts={data.posts} nonFeatured={false} />
