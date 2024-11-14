<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="post-content-container">
	{@render data.content?.()}
</div>
