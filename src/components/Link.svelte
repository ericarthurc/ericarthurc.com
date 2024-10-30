<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	export let href;
	export let title;
	export let className;
</script>

<a href={`${base}${href}`} class:active={$page.url.pathname === href} class={`${className} link`}
	>{title}</a
>
