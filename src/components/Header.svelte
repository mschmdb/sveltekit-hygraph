<script>
	import { page } from '$app/stores'
	let isOpen = false
	let showMenu = false
	function toggleNavbar() {
		showMenu = !showMenu
	}
</script>

<header class="bg-white dark:bg-gray-900">
	<nav class="border-b dark:border-gray-700">
		<div class="container px-6 py-4 mx-auto lg:flex lg:justify-between lg:items-center">
			<div class="flex items-center justify-between">
				<div>
					<a
						class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
						href="/">mtc.berlin</a
					>
				</div>

				<!-- Mobile menu button -->
				<div class="flex lg:hidden">
					<button
						x-cloak
						on:click={toggleNavbar}
						type="button"
						class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400 flex md:hidden"
						aria-label="toggle menu"
					>
						<svg
							x-show="bind:isOpen={isOpen}"
							xmlns="http://www.w3.org/2000/svg"
							class="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
						</svg>

						<!-- <svg
							x-show="bind:isOpen={isOpen}"
							xmlns="http://www.w3.org/2000/svg"
							class="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg> -->
					</button>
				</div>
			</div>

			<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
			<div
				class="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center
				{showMenu ? 'flex' : 'hidden'}"
			>
				<div class="flex flex-col space-y-8 lg:flex-row lg:items-center lg:space-y-0 lg:-px-8">
					<a
						class="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline"
						href="/">Home</a
					>
					<a
						class="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline"
						href="#">Menu Item</a
					>
					<a
						class="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline"
						href="#">Projects?</a
					>
					<a
						class="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline"
						href="/imprint">Imprint</a
					>
				</div>
			</div>
		</div>
	</nav>
</header>
