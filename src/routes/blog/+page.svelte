<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h2>Blog</h2>
<h4 style="font-weight: 500;color: #BADA55;">[Posts]</h4>

<ul class="post-list">
	{#each data.posts as p}
		<li class="post">
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
