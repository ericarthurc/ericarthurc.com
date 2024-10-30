<script lang="ts">
	import { base } from '$app/paths';
	import Dev from '#/Dev.svelte';
	import Navbar from '#/Navbar.svelte';
	import '@/styles/main.scss';
</script>

<Dev />
<div class="main-layout">
	<Navbar />
	<slot />
</div>
