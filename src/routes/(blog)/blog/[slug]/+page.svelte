<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { canViewPost, updateViewedPost } from '$lib/viewCooldown';

	onMount(async () => {
		if (canViewPost(data.meta.slug)) {
			await fetch(`/api/posts/${data.meta.slug}`, { method: 'PATCH' });
			updateViewedPost(data.meta.slug);
		}
	});

	const { data }: { data: PageData } = $props();
</script>

<div class="post-content-container">
	{@render data.content()}
</div>
