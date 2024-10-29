<div class="dev-bar">
	<div class="dev-container">
		<span class="dev-text">This website is under heavy development!</span>
	</div>
</div>

<style lang="scss">
	.dev-bar {
		background-color: #ec644b;
		animation: wheelHueColor 20s infinite;
		padding: 5px 30px;
		display: flex;
		// margin-bottom: 10px;
		justify-content: center;
	}

	// .dev-container {
	// }

	.dev-text {
		color: #fff;
	}

	@keyframes wheelHueColor {
		from,
		to {
			background-color: #ec644b;
		}
		25% {
			background-color: #db0a2d;
		}
		50% {
			background-color: #ec644b;
		}
		75% {
			background-color: #f7d74c;
		}
	}
</style>
