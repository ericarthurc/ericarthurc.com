<script>
	import { cubicOut, backIn } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	const SNOWFLAKES_COUNT = 40;
	const SNOWFLAKE_MIN_SCALE = 0.4;
	const MAX_FALL_DURATION = 20000;
	const MELTING_WAIT = 0;
	const MELTING_DURATION = 300;
	const WIND_FORCE = 0.25;
	const SNOW_ICONS = ['❆', '❅', '❄'];

	const MAX_TOTAL_TIME = MAX_FALL_DURATION + MELTING_WAIT + MELTING_DURATION;

	function randomSnowflakeConfig(i) {
		const scale = SNOWFLAKE_MIN_SCALE + Math.random() * (1 - SNOWFLAKE_MIN_SCALE);
		const xStart = Math.random() * (1 + WIND_FORCE) - WIND_FORCE;
		return {
			visible: false,
			scale,
			inDelay: Math.random() * MAX_TOTAL_TIME,
			inDuration: (1 + SNOWFLAKE_MIN_SCALE - scale) * MAX_FALL_DURATION,
			xStart,
			xEnd: xStart + scale * WIND_FORCE,
			snowIcon: SNOW_ICONS[i % SNOW_ICONS.length]
		};
	}

	let snowflakes = new Array(SNOWFLAKES_COUNT)
		.fill()
		.map((_, i) => randomSnowflakeConfig(i))
		.sort((a, b) => a.scale - b.scale);

	function fall(_node, { delay = 0, duration, xStart = 0.1, xEnd = 0.5, scale = 1.0 }) {
		return {
			duration,
			delay,
			css: (t) => {
				const x_t = backIn(t);
				const y_t = t;

				const x_coord = (xEnd - xStart) * x_t + xStart;
				return `
            transform: scale(${scale}) rotate(${x_t * 720}deg);
            left: ${x_coord * 100}%;
            bottom: ${100 - y_t * 100}%;
          `;
			}
		};
	}

	onMount(async () => {
		setTimeout(() => {
			snowflakes = snowflakes.map((sf) => ({ ...sf, visible: true }));
		}, 50);
	});
</script>

<div class="snowframe" aria-hidden="true">
	{#each snowflakes as flake}
		{#if flake.visible}
			<div
				class="snowflake"
				style={`transform: scale(${flake.scale}); left: ${flake.xEnd * 100}%`}
				in:fall={{
					delay: flake.inDelay,
					duration: flake.inDuration,
					scale: flake.scale,
					xStart: flake.xStart,
					xEnd: flake.xEnd
				}}
				out:fade={{ delay: MELTING_WAIT, duration: MELTING_DURATION, easing: cubicOut }}
				on:introend={() => (flake.visible = false)}
				on:outroend={() => (flake.visible = true)}
			>
				{flake.snowIcon}
			</div>
		{/if}
	{/each}
</div>

<style>
	.snowflake {
		color: #e8f2fd;
		font-size: 1.2rem;
		line-height: 1.2rem;
		font-family: Arial, sans-serif;
		text-shadow: 0 0 5px #000;
		position: absolute;
		z-index: 1000;
		overflow: hidden;
		bottom: 0;
	}

	.snowframe {
		pointer-events: none;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		overflow: hidden;
		z-index: 1000;
	}
</style>
