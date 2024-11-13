<script lang="ts">
	import Link from '#/Link.svelte';

	let theme = 'dark';

	try {
		theme = localStorage.theme;
	} catch (e) {}

	const toggle = () => {
		// @ts-ignore
		const { classList } = document.querySelector('html');
		if (classList.length === 0) {
			theme = 'dark';
		} else {
			classList.remove(theme);
			theme = theme === 'light' ? 'dark' : 'light';
		}
		classList.add(theme);

		try {
			localStorage.theme = theme;
		} catch (e) {
			// ignore
		}
	};
</script>

<header>
	<div class="nav-container">
		<nav class="nav">
			<div></div>
			<div class="nav-links">
				<Link href="/" className="nav-logo-container">
					<svg
						class="link-logo"
						width="100%"
						height="100%"
						viewBox="0 0 656 670"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						xml:space="preserve"
						style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
					>
						<g transform="matrix(1,0,0,1,-172.267,-165.25)">
							<g transform="matrix(1,0,0,1,-7.10543e-14,6.25)">
								<g transform="matrix(0.984925,0,0,0.984925,5.07538,11.2613)">
									<circle cx="502.5" cy="249.5" r="99.5" style="fill:rgb(0,170,107);" />
								</g>
								<g transform="matrix(0.984925,0,0,0.984925,5.07538,254.261)">
									<circle cx="502.5" cy="249.5" r="99.5" style="fill:rgb(0,170,107);" />
								</g>
								<path
									d="M291.345,462L172.267,462L172.267,500.767C172.267,681.648 319.119,828.5 500,828.5C680.881,828.5 827.733,681.648 827.733,500.767L827.733,462L708.655,462L708.655,355L643.655,355L643.655,499.345C643.655,578.63 579.285,643 500,643C420.715,643 356.345,578.63 356.345,499.345L356.345,355L291.345,355L291.345,462ZM705.075,536C686.922,632.723 601.951,706 500,706C398.049,706 313.078,632.723 294.925,536L247.99,536C264.511,660.394 371.121,756.5 500,756.5C628.879,756.5 735.489,660.394 752.01,536L705.075,536Z"
									style="fill:rgb(0,170,107);"
								/>
							</g>
						</g>
					</svg>
				</Link>
				<!-- <Link href="/">Home</Link> -->
				<Link href="/blog">Blog</Link>
				<Link href="/projects">Projects</Link>
				<Link href="/about-me">About</Link>
			</div>
			<div class="nav-th-toggle">
				<button onclick={toggle} type="button" class="th-toggler icon" aria-label="Toggle theme">
				</button>
			</div>
		</nav>
	</div>
</header>

<style lang="scss">
	.nav-th-toggle {
		display: grid;

		.th-toggler {
			outline: none;
			position: absolute;
			// margin-top: 3px;
			margin-right: 10px;
			justify-self: end;
			color: currentColor;
			background-color: #5c4e4e80;
			border: none;
			// padding: 10px 10px;
			border-radius: 1rem;
		}

		.icon {
			cursor: pointer;
			background-position: 50%;
			background-repeat: no-repeat;
			// background-size: 27px 27px;
			width: 27px;
			height: 27px;
		}
	}

	:global(html.dark) {
		.th-toggler {
			background-image: url('/images/megid.svg');
		}
	}

	:global(html.light) {
		.th-toggler {
			background-image: url('/images/grants.svg');
		}
	}
</style>
