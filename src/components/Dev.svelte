<script lang="ts">
	import { PUBLIC_COMMIT } from '$env/static/public';
</script>

<div class="dev-bar">
	<div class="dev-container">
		<span>Alpha | Compiled commit: {PUBLIC_COMMIT}</span>
	</div>
</div>

<style lang="scss">
	.dev-bar {
		color: #fff;
		background-color: #1a1b20;
		animation: wheelHueColor 20s infinite;
		padding: 3px 0;
		display: flex;
		font-size: 12px;
		justify-content: center;
		margin-bottom: -10px;
		border-bottom: 1px solid #464853;
	}
</style>
