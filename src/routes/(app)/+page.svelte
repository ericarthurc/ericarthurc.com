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
		I am a 29-year-old EHR application specialist, certified in Epic's OpTime and Anesthesia
		modules. Alongside my work with Epic solutions, I focus on end-user security and clinical
		analytics. I also have extensive experience in system administration, including networking,
		cloud solutions, domain management, technical implementations, and hardware deployments. With
		nearly a decade of coding experience, I am passionate about exploring web technologies and
		staying ahead of the evolving landscape of HTTP.
	</p>
</div>
<PostContainer posts={data.posts} nonFeatured={false} />
