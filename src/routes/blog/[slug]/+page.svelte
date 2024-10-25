<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h4>{data.meta.title}</h4>
<h4>{data.meta.slug}</h4>
<h4>{new Date(data.meta.date).toDateString()}</h4>

{#each data.meta.categories as c}
	<h5>{c}</h5>
{/each}

<ul>
	{#each Object.entries(data.meta) as [key, value]}
		<li>
			<span>{key}:</span>
			<span>{value}</span>
		</li>
	{/each}
</ul>
<svelte:component this={data.content} />
