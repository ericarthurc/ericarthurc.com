<script lang="ts">
	export let href;
	export let title;
	export let className;
</script>

<a {href} class={`${className} link`}>{title}</a>
