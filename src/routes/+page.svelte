<script>
	import Hero from '$src/components/Hero.svelte'
	import Header from '$src/components/Header.svelte'
	import { fly } from 'svelte/transition'

	/** @type {import('./$types').PageData} */
	export let data
	let first = 3
</script>

<svelte:head>
	<title>Blogy</title>
	<meta name="title" content="Blogy" />
	<meta
		name="description"
		content="blogy all about Technology, Programming, Web development topis."
	/>
	<meta name="robots" content="index," />
	<link rel="canonical" href="/" />
</svelte:head>

<div>
	<Header />
	<Hero />

	<div class="container">
		<main>
			<h2>Latest thoughts</h2>
			<ul>
				{#each data.posts.slice(0, first) as post}
					<li
						data-sveltekit-noscroll
						in:fly={{ y: 50, duration: 500, delay: 500 }}
						out:fly={{ duration: 500 }}
						id={post.id}
					>
						<div class="image-content">
							<img src={post.image.url} alt={post.image.id} />
						</div>
						<div class="content">
							<div class="author-section">
								<img class="authorImg" src={post.publishedBy.picture} alt={post.publishedBy.id} />
								<span class="author">{post.publishedBy.name}</span>
							</div>
							<a data-sveltekit-prefetch href={`/post/${post.slug}`}>{post.title}</a>
							<p s-let>
								{post.content.text.substr(0, 180)} ...
							</p>
							<br />
						</div>
					</li>
				{/each}
			</ul>
			{#if first < data.posts.length}
				<div class="btn">
					<button on:click={() => (first = first + 3)} class="hire" type="button">
						Load more
					</button>
				</div>
			{/if}
		</main>
	</div>
</div>

<style>
	.container ul {
		list-style-type: none;
		padding: 0 50px;
	}

	main li {
		background: white;
		border-radius: 1em;
		padding: 2em;
		margin: 1.5em 0;
		box-shadow: 15px 21px 40px 0px rgba(0, 0, 0, 0.04);
	}
	img {
		width: 100%;
		height: 100%;
		border-radius: 0.5em;
	}
	.content {
		align-items: center;
		padding: 0.5em;
	}
	a {
		font-size: 1.5em;
		text-decoration: none;
		color: black;
		padding: 15px 0 0 0;
		font-weight: bold;
		display: block;
		margin: -0.1em 0 0.2em;
	}
	h2 {
		margin-top: 3em;
		text-transform: uppercase;
		font-size: 0.9em;
		text-align: center;
	}
	.author-section {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-bottom: 5px;
	}
	.author {
		color: var(--darkenBlue);
		text-align: start;
		padding-left: 0.5rem;
		text-transform: capitalize;
	}
	.authorImg {
		width: 40px;
		border-radius: 100%;
		height: 40px;
	}
	.btn {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.hire {
		background: var(--darkenBlue);
		padding: 1.2em 8em;
		margin: 2em 0 3em;
		text-align: center;
		border: none;
		cursor: pointer;
		border-radius: 10px;
		color: #fff;
		text-decoration: none;
		transition: all 0.3s ease;
	}
	.hire:hover {
		box-shadow: rgba(91, 99, 211, 0.5) 0 2px 18px;
		transition-duration: 0.1s;
	}
	.hire:active {
		transform: scale(0.95);
	}
	@media only screen and (min-width: 768px) {
		main li {
			display: grid;
			grid-template-columns: 180px auto;
			grid-column-gap: 1em;
		}
	}
</style>
