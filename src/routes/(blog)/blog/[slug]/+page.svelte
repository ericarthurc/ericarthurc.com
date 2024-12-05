<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	onMount(async () => {
		await fetch(`/api/posts/${data.meta.slug}`, { method: 'PATCH' });
	});

	const { data }: { data: PageData } = $props();
</script>

<div class="post-content-container">
	{@render data.content()}
</div>
