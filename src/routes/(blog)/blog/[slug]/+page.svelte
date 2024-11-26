<script lang="ts">
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { supabaseAnon } from '$lib/supbaseClient';

	const { data }: { data: PageData } = $props();

	onMount(async () => {
		const response = await supabaseAnon
			.from('posts')
			.select('views')
			.eq('slug', data.meta.slug)
			.maybeSingle();

		if (response.error) {
			return;
		}

		supabaseAnon
			.from('posts')
			.update({ views: (response.data?.views || 0) + 1 })
			.eq('slug', data.meta.slug);
	});
</script>

<div class="post-content-container">
	{@render data.content?.()}
</div>
