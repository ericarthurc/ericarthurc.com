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

<style global lang="scss">
	@font-face {
		font-family: 'Inter';
		font-display: swap;
		font-style: normal;
		font-weight: normal;
		src: url('/fonts/Inter.ttf');
	}

	@font-face {
		font-family: 'FiraCode';
		font-display: swap;
		font-style: normal;
		font-weight: normal;
		src: url('/fonts/FiraCode.ttf');
	}

	@font-face {
		font-family: 'Geist';
		font-display: swap;
		font-style: normal;
		font-weight: normal;
		src: url('/fonts/Geist.ttf');
	}

	@font-face {
		font-family: 'GeistMono';
		font-display: swap;
		font-style: normal;
		font-weight: normal;
		src: url('/fonts/GeistMono.ttf');
	}
</style>
