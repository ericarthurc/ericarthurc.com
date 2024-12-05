<script lang="ts">
	import { base } from '$app/paths';
	import Navbar from '#/Navbar.svelte';
	import '@/styles/main.scss';
	import { browser } from '$app/environment';
	import SnowFall from '#/SnowFall.svelte';
	import Dev from '#/Dev.svelte';
</script>

<svelte:head>
	<title>Eric Christensen</title>
	<link rel="preload" as="font" href={`${base}/fonts/Geist.ttf`} crossorigin="anonymous" />
	<link rel="preload" as="font" href={`${base}/fonts/GeistMono.ttf`} crossorigin="anonymous" />
</svelte:head>

<Dev />
<Navbar />
<slot />

{#if browser}
	<SnowFall />
{/if}
