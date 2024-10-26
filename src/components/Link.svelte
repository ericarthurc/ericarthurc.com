<script lang="ts">
	export let href;
	export let title;
</script>

<a {href} class="link">{title}</a>

<style lang="scss">
	a {
		text-decoration: none;
		text-transform: none;
		color: #fffff5db;
		font-size: 14px;
		font-weight: 500;
		padding: 10px;

		&:hover {
			color: #8c8a91;
		}
		&:visited {
		}
	}
</style>
