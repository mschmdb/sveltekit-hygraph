<script>
	import { page } from '$app/stores'
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
						type="button"
						class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
						aria-label="toggle menu"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M4 8h16M4 16h16" />
						</svg>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-6 h-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
			</div>

			<!-- Mobile Menu open: "block", Menu closed: "hidden" -->
			<div class="translate-x-0 opacity-100">
				<!-- <div class="flex flex-col space-y-8 lg:flex-row lg:items-center lg:space-y-0 lg:-px-8">
					<a
						class="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline"
						href="#">glasses Search</a
					>
					<a
						class="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline"
						href="#">How it works!</a
					>
					<a
						class="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline"
						href="#">Why us?</a
					>
					<a
						class="block font-medium text-gray-700 dark:text-gray-200 lg:mx-8 hover:text-gray-900 dark:hover:text-gray-400 hover:underline"
						href="#">Contact</a
					>

					<button
						class="flex items-center justify-center px-6 py-2.5 text-sm font-medium tracking-wide text-center text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
					>
						Get in touch
					</button>
				</div> -->
			</div>
		</div>
	</nav>
	<div
		class="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center"
	>
		<div class="w-full lg:w-1/2">
			<div class="lg:max-w-lg">
				<h1 class="text-2xl font-medium tracking-wide text-gray-800 dark:text-white lg:text-4xl">
					We are Moving Targets Consulting.
				</h1>
				<h2>Software Consulting & Solutions since 2005.</h2>
				<p class="mt-2 text-gray-600 dark:text-gray-300">
					“moving targets” is our name and our program. For us, adaptation is part of the craft of
					consulting, development and services. Conception and implementation of new, as well as
					expansion and refactoring of existing, business applications and websites. Continuous
					maintenance and support over the entire life cycle.
				</p>
				<div class="grid gap-6 mt-8 sm:grid-cols-1">
					<div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
						<svg
							class="w-5 h-5 mx-3"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>

						<span class="mx-3">Founded in 1997</span>
					</div>

					<div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
						<svg
							class="w-5 h-5 mx-3"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>

						<span class="mx-3">
							New establishment through management buyout in 2006 with 10 employees</span
						>
					</div>

					<div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
						<svg
							class="w-5 h-5 mx-3"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>

						<span class="mx-3">Owner-managed</span>
					</div>

					<div class="flex items-center text-gray-800 -px-3 dark:text-gray-200">
						<svg
							class="w-5 h-5 mx-3"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M5 13l4 4L19 7"
							/>
						</svg>

						<span class="mx-3"
							>Organic growth with headquarters in Berlin with 60 permanent employees as of 2021</span
						>
					</div>
				</div>
			</div>
		</div>

		<div class="flex items-center justify-center">
			<img class="w-full h-full max-w-2xl rounded-md" src="betonlogo_550_366.png" alt="mtc logo" />
		</div>
	</div>
</header>
