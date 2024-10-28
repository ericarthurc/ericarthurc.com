<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Home</h1>
<ul>
	{#each data.posts as p}
		<li>
			<p>{p.title}</p>
			<p>{new Date(p.date).toDateString()}</p>
			<a href={`/blog/${p.slug}`}>{p.slug}</a>
			<div>
				{#each p.categories as c}
					<span>{c}{' / '}</span>
				{/each}
			</div>
		</li>
	{/each}
</ul>

<style lang="scss">
	ul {
		list-style-type: none;
		padding: 0px 10px;
	}

	a {
		text-decoration: none;
		color: #ff0000;

		&:hover {
			color: #990f0f;
		}
	}
</style>
