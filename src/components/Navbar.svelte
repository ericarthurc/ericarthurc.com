<script>
	import Link from '#/Link.svelte';
</script>

<header>
	<div class="header-logo">
		<svg
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
						<circle id="top" cx="502.5" cy="249.5" r="99.5" style="fill:currentcolor" />
					</g>
					<g transform="matrix(0.984925,0,0,0.984925,5.07538,254.261)">
						<circle id="bottom" cx="502.5" cy="249.5" r="99.5" style="fill:currentcolor" />
					</g>
					<path
						id="outer"
						d="M291.345,462L172.267,462L172.267,500.767C172.267,681.648 319.119,828.5 500,828.5C680.881,828.5 827.733,681.648 827.733,500.767L827.733,462L708.655,462L708.655,355L643.655,355L643.655,499.345C643.655,578.63 579.285,643 500,643C420.715,643 356.345,578.63 356.345,499.345L356.345,355L291.345,355L291.345,462ZM705.075,536C686.922,632.723 601.951,706 500,706C398.049,706 313.078,632.723 294.925,536L247.99,536C264.511,660.394 371.121,756.5 500,756.5C628.879,756.5 735.489,660.394 752.01,536L705.075,536Z"
						style="fill:currentcolor;"
					/>
				</g>
			</g>
		</svg>
	</div>
	<div class="nav-container">
		<nav class="nav-links">
			<!-- <Link href="/" className="nav-logo-container">
				<svg
					class="link-logo"
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					viewBox="0 0 32 32"
					{...$$props}
				>
					<path
						fill="currentColor"
						d="m22.509 12.689l-6-3.55a1 1 0 0 0-1.018.001l-6 3.55a1 1 0 0 0-.491.86v6.9c0 .354.187.681.491.86l6 3.55a.99.99 0 0 0 1.018 0l6-3.55a1 1 0 0 0 .491-.86v-6.9a1 1 0 0 0-.491-.861M21 19.88l-5 2.958l-5-2.958v-5.76l5-2.958l5 2.958z"
					/>
					<path
						fill="currentColor"
						d="M6 20.184V11.07l6.2-3.664l-1.017-1.722l-6.692 3.955A1 1 0 0 0 4 10.5v9.684A3 3 0 0 0 2 23c0 1.654 1.346 3 3 3s3-1.346 3-3a3 3 0 0 0-2-2.816M5 24a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2m22-4c-1.654 0-3 1.346-3 3c0 .353.072.687.185 1.002L16 28.838l-6.404-3.784l-1.017 1.722l6.912 4.084a1 1 0 0 0 1.018.001l8.96-5.295c.45.269.97.434 1.531.434c1.654 0 3-1.346 3-3s-1.346-3-3-3m0 4a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2M16 7c.731 0 1.392-.273 1.913-.708L26 11.071V18h2v-7.5a1 1 0 0 0-.491-.861l-8.567-5.062q.056-.28.058-.577c0-1.654-1.346-3-3-3s-3 1.346-3 3s1.346 3 3 3m0-4a1.001 1.001 0 1 1-1 1c0-.552.449-1 1-1"
					/>
				</svg>
			</Link> -->
			<Link href="/">Home</Link>
			<Link href="/blog">Blog</Link>
			<Link href="/projects">Projects</Link>
			<Link href="/about-me">About Me</Link>
		</nav>
	</div>
</header>
