<svelte:head>
	<title>bizo demos</title>
</svelte:head>

<script>
	import Navigation from "$lib/components/Navigation.svelte"
	import { keybind } from "$lib/util"

	$: navigating = false

	const pages = [
		{
			name: "Theme Switcher",
			url: "/theme-switcher"
		}
	]

	function toggleNavigation() {
		navigating = !navigating
	}
</script>

<div use:keybind={{ key: "N" }} on:keybind={toggleNavigation} class="flex flex-col gap-10 lg:m-40">
	<p class="text-4xl lg:text-left text-center my-10">Welcome to bizo demos</p>
	<div class="select-none w-full">
		<button on:click={toggleNavigation} class="flex gap-2 items-center rounded-lg bg-secondary-light/80 hover:bg-secondary-light dark:bg-secondary-dark/40 dark:hover:bg-secondary-dark/60 w-full p-3 justify-between transition">
			<div class="flex items-center gap-4">
				<svg class="w-8 h-8 stroke-primary-dark dark:stroke-primary-light" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
					<path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
					<path d="M21 21l-6 -6" />
				  </svg>
				  <p class="text-lg text-secondary-light/80 dark:text-secondary-dark/80">Search...</p>
			</div>
			<div class="lg:flex hidden gap-2 items-center">
				<span class="py-1 px-3.5 rounded relative border-2 border-btn-light dark:border-border-dark/20">
					<p class="text-lg">⇧</p>
				</span>
				<span class="py-1 px-3.5 rounded relative border-2 border-btn-light dark:border-border-dark/20">
					<p class="text-lg">N</p>
				</span>
			</div>
			<button class="lg:hidden flex relative">
				<svg class="w-8 h-8 stroke-secondary-dark dark:stroke-secondary-light" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
					<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
					<path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />
					<path d="M11 11.5v-2a1.5 1.5 0 1 1 3 0v2.5" />
					<path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />
					<path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
				  </svg>
			</button>
		</button>
	</div>
</div>

{#if navigating}
	<Navigation
		{pages}
		on:close={toggleNavigation}
		on:navigate={toggleNavigation}
	/>
{/if}