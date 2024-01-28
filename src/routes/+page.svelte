<svelte:head>
	<title>bizo7L</title>
</svelte:head>

<script>
	import { Project } from "$lib/components/project"

	$: selected = 0

	const projects = [
		{
			name: "Demos",
			description: "The website of all demos that I make for SvelteKit. Each demo will have an interactive view of how it works.",
			image: "/projects/favicon.svg",
			github: "bizojs/demo.bizo.dev",
			website: "https://demo.bizo.dev"
		},
		{
			name: "Blog",
			description: "My personal blog for thoughts and creations. Most posts will relate to SvelteKit and TailwindCSS.",
			image: "/projects/favicon.svg",
			github: "bizojs/demo.bizo.dev",
			website: "https://demo.bizo.dev"
		},
		{
			name: "Rada",
			description: "An intuitive Discord bot to help with all your moderation / management needs.",
			image: "/projects/Rada.png",
			github: "RadaBot/Rada",
			website: "https://rada.bizo.dev"
		},
		{
			name: "Snippet Generator",
			description: "Generate custom code snippets for Visual Studio Code",
			image: "/projects/favicon.svg",
			github: "RadaBot/Rada",
			website: "https://rada.bizo.dev"
		},
		{
			name: "Temple MDW",
			description: "The guardian of The Sheep Pen Discord server for the streamer bebanteeni.",
			image: "/projects/TempleMDT.png",
			github: "bizojs/temple-mdw"
		},
		{
			name: "Lightable",
			description: "Open-source chatting. Free, Open-source, Forever.",
			image: "/projects/Lightable.png",
			github: "Lightable/Lightable"
		},
		{
			name: "The Sheep Guardian",
			description: "The guardian of The Sheep Pen Discord server for the streamer bebanteeni.",
			image: "/projects/TheSheepGuardian.png",
			website: "https://discord.gg/MZsAS3pBUa"
		}
	]

	function setPage(page) {
		selected = page
	}
</script>

<div class="flex flex-col lg:m-40">
	<p class="text-6xl lg:text-left text-center my-10 font-semibold">Hey there.</p>
	<div class="flex flex-col">
		<p class="text-lg dark:text-primary-dark/80">A self-taught developer from the <span class="font-semibold">UK</span>.</p>
		<p class="text-lg dark:text-primary-dark/80">Primary focus: <span class="font-semibold">frontend web development</span>.</p>
	</div>
	<p class="mt-32 dark:text-primary-dark/90 text-lg font-semibold">Check out some of my stuff</p>
	<div class="flex flex-col gap-3 items-center justify-center mt-6">
		{#key selected}
			<Project bind:item={projects[selected]} />
			<div class="flex items-center gap-2">
				{#each projects as project, i}
					<button on:click={() => setPage(i)} class="p-2 cursor-pointer rounded-full bg-btn-light {projects[selected].name === project.name ? "bg-nav-light dark:bg-nav-dark" : "bg-btn-light/40 dark:bg-secondary-dark hover:!bg-export"} transition"></button>
				{/each}
			</div>
		{/key}
	</div>
</div>