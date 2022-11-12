<script>
	import Hero from '../components/Hero.svelte'
	import Header from '../components/HeaderIndex.svelte'
	import { fly } from 'svelte/transition'

	/** @type {import('./$types').PageData} */
	export let data
	let first = 3
</script>

<svelte:head>
	<title>mtc.berlin</title>
	<meta name="title" content="mtc.berlin" />
	<meta name="description" content="mtc.berlin" />
	<meta name="robots" content="index," />
	<link rel="canonical" href="/" />
</svelte:head>

<div>
	<Header />
	<!-- <Hero /> -->
	<main>
		<section class="bg-white dark:bg-gray-900">
			<div class="container px-6 py-10 mx-auto">
				<h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
					Who we are
				</h1>
				{#each data.posts.slice(0, first) as post}
					<div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
						<img
							class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
							src={post.image.url}
							alt={post.image.id}
						/>

						<div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
							<p class="text-sm text-blue-500 uppercase">{post.jobtitle}</p>

							<a
								href={`/post/${post.slug}`}
								class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl"
							>
								{post.title}
							</a>

							<p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
								{post.content.text.substr(0, 180)} ...
							</p>

							<a
								href={`/post/${post.slug}`}
								class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a
							>

							<div class="flex items-center mt-6">
								<!-- <img
									class="object-cover object-center w-10 h-10 rounded-full"
									src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
									alt=""
								/> -->

								<div class="mx-4">
									<h1 class="text-sm text-gray-700 dark:text-gray-200">Skills tbd</h1>
									<p class="text-sm text-gray-500 dark:text-gray-400">Softskills tbd</p>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
			{#if first < data.posts.length}
				<div class="flex flex-col justify-center items-center py-8">
					<button
						on:click={() => (first = first + 3)}
						class="flex bg-[#890c58] self-center justify-center w-full px-2 py-1 text-white transition-colors duration-300 transform rounded-md focus:outline-none sm:w-auto sm:mx-1 focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-40"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-5 h-5 mx-1"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
							/>
						</svg>
						<span class="mx-4"> load more </span>
					</button>
				</div>
			{/if}
		</section>
	</main>
</div>
