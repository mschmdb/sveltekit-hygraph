<script>
	import { page } from '$app/stores'
</script>

<input
	type="text"
	bind:value={searchTerm}
	class="rounded-md px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
/>
<Button on:click={() => handleClick('')} color="dark">All</Button>
<Button color="alternative" on:click={() => handleClick('Matze')}>Matze</Button>
<Button color="alternative" on:click={() => handleClick('Gunnar')}>Gunnar</Button>
