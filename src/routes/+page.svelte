<script lang="ts">
	import type { PageData } from './$types';
	import { base } from '$app/paths';
	// import { skillsSvgMap } from '$lib/server/skills-svg-map';

	export let data: PageData;
</script>

<h2>Home</h2>
<h4 style="font-weight: 500;color: #BADA55;">[Featured Posts]</h4>

<ul class="post-list">
	{#each data.posts as p}
		<li class="post">
			<p>{p.title}</p>
			<p>{new Date(p.date).toDateString()}</p>
			<a href={`${base}/blog/${p.slug}`}>{p.slug}</a>
			<div>
				{#each p.categories as c}
					<span>{c}{' / '}</span>
				{/each}
			</div>
			{#if p.skills_svgs}
				<div class="post-skills-container">
					{#each p.skills_svgs as s}
						{@html s}
					{/each}
				</div>
			{/if}
		</li>
	{/each}
</ul>
