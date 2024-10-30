<script lang="ts">
	import { base } from '$app/paths';
	import Dev from '#/Dev.svelte';
	import Navbar from '#/Navbar.svelte';
	import '@/styles/main.scss';
</script>

<svelte:head>
	<link rel="preload" as="font" href={`${base}/fonts/Geist.ttf`} crossorigin="anonymous" />
	<link rel="preload" as="font" href={`${base}/fonts/GeistMono.ttf`} crossorigin="anonymous" />
</svelte:head>

<Dev />
<div class="main-layout">
	<Navbar />
	<slot />
</div>
