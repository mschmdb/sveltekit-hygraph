<script>
	import { page } from '$app/stores'
	import Header from '../components/Header.svelte'
	import Hero from '../components/Hero.svelte'
</script>

<svelte:head>
	<title>Error</title>
</svelte:head>

<div>
	<Header />
	<Hero />
	<div class="error">
		<p class="status">
			{`${$page.status === 404 ? '404' : '500'}`}
		</p>
		<h1 class="msg">
			{`${$page.status === 404 ? 'Page not found' : 'Unexpected Error'}`}
		</h1>
		<p class="msg">
			{`${
				$page.status === 404
					? 'Sorry, we couldn’t find the page you’re looking for'
					: 'Oops! We have an problem in our server, try again later 😢'
			}`}
		</p>
	</div>
</div>

<style>
	.error {
		display: flex;
		flex-direction: column;
		text-align: center;
		margin: 3rem 0;
	}
	.status {
		padding: 0.5rem 0;
		font-size: 1.5rem;
	}

	.msg {
		padding: 0.5rem 0;
	}
</style>
