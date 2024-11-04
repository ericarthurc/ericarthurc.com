<script lang="ts">
	import { base } from '$app/paths';
	import { page } from '$app/stores';

	interface Props {
		children: any;
		href: string;
		className?: string;
	}

	let { children, href, className = '' }: Props = $props();
</script>

<a href={`${base}${href}`} class:active={$page.url.pathname === href} class={`link ${className}`}>
	{@render children?.()}
</a>
