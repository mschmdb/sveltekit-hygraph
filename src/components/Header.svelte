<header>
	<div class="container">
		<div class="navbar">
			<a data-sveltekit-prefetch href="/" class="logo">Blogy</a>

			<nav>
				<ul>
					<li><a href="https://ysnirix.live" target="_blank">Who?</a></li>
					<li><a href="https://github.com/Ysn4Irix" target="_blank">Github</a></li>
				</ul>
			</nav>
		</div>
	</div>
</header>

<style>
	.container {
		margin: 0 auto;
		width: 90%;
	}
	header {
		background: #8800ff;
		padding: 1em 0;
		border-top-left-radius: 25px;
		border-top-right-radius: 25px;
		text-align: center;
	}
	.navbar {
		display: flex;
		justify-content: space-between;
		font-weight: bold;
	}

	nav {
		display: flex;
	}
	ul {
		list-style-type: none;
		padding: 0;
		display: flex;
	}
	li a {
		font-size: 1.2rem;
		letter-spacing: 1px;
		text-decoration: none;
		padding: 0.5em;
		transition: all 0.3s ease;
	}
	li a:hover {
		color: var(--darkenBlue);
		transition-duration: 0.1s;
	}
	a {
		color: white;
		font-size: 1.5rem;
		letter-spacing: 1px;
		text-decoration: none;
	}
</style>
