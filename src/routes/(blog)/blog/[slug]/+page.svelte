<script lang="ts">
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

<div class="post-content-container">
	{@html data.content}
</div>
