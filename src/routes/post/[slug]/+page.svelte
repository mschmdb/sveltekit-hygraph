<script>
	import Hero from '$src/components/Hero.svelte'
	import Header from '$src/components/Header.svelte'
	import { fly } from 'svelte/transition'

	/** @type {import('./$types').PageData} */
	export let data
</script>

<svelte:head>
	<!-- Primary Meta Tags -->
	<title>{data.post.title}</title>
	<meta name="title" content={data.post.title} />
</svelte:head>

<div>
	<Header />
	<Hero />

	<div class="container">
		<main>
			<div
				in:fly={{ y: 50, duration: 500, delay: 500 }}
				out:fly={{ duration: 500 }}
				class="content"
			>
				<a data-sveltekit-noscroll data-sveltekit-prefetch class="back" href="/" alt="back">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="35"
						height="35"
						viewBox="0 0 24 24"
						style="fill: rgba(0, 0, 0, 1);"
					>
						<path
							d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"
						/>
					</svg>
				</a>
				<h1>{data.post.title}</h1>
				<img src={data.post.image.id} alt={data.post.image.id} />
				<div class="wrapper">{@html data.post.content.text}</div>
			</div>
		</main>
	</div>
</div>

<style>
	h1 {
		color: black;
		text-align: center;
		padding-bottom: 25px;
	}
	.content {
		background: white;
		border-radius: 1em;
		padding: 1em;
	}
	main {
		padding: 50px;
	}
	.content img {
		width: 100%;
		border-radius: 25px;
	}
	.wrapper {
		padding: 3em;
	}
	.back {
		text-decoration: none;
	}
	@media only screen and (min-width: 768px) {
		.content {
			padding: 2em;
		}
	}
</style>
