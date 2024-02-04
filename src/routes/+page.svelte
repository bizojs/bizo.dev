<svelte:head>
	<title>bizo7L</title>
</svelte:head>

<script>
	import { Project, Social } from "$lib/components"
    import { scale, fade } from "svelte/transition"

	import IconDiscord from "~icons/tabler/brand-discord"
	import IconGithub from "~icons/tabler/brand-github"
	import IconReddit from "~icons/tabler/brand-reddit"
	import IconTwitter from "~icons/tabler/brand-x"
	import IconEmail from "~icons/tabler/at"

	$: selected = 0
	$: tab = "projects"

	const projects = [
		{
			name: "Demos",
			description: "The website of all demos that I make for SvelteKit. Each demo will have an interactive view of how it works.",
			image: "/favicon.png",
			github: "bizojs/demo.bizo.dev",
			website: "https://demo.bizo.dev"
		},
		{
			name: "Snippet Generator",
			description: "Generate custom code snippets for Visual Studio Code",
			image: "/favicon.png",
			website: "/snippet"
		},
		{
			name: "Rada",
			description: "An intuitive Discord bot to help with all your moderation / management needs.",
			image: "/projects/Rada.png",
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
	function nextPage() {
		if (selected + 1 > projects.length - 1) return selected = 0
		++selected
	}
	function previousPage() {
		if (selected - 1 < 0) return selected = projects.length - 1
		--selected
	}
	function setTab(page) {
		tab = page
	}
</script>

<div class="flex flex-col lg:mx-40">
	<p class="text-6xl lg:text-left text-center lg:my-20 my-8 font-semibold">Hey there.</p>
	<div class="flex flex-col">
		<p class="text-lg dark:text-primary-dark/80 lg:text-left text-center">A self-taught developer from the <span class="font-semibold">UK</span>.</p>
		<p class="text-lg dark:text-primary-dark/80 lg:text-left text-center">Primary focus: <span class="font-semibold">frontend web development</span>.</p>
	</div>
	<div class="flex lg:justify-start justify-center items-center">
		<button on:click={() => setTab("projects")} class="mt-32 pb-4 dark:text-primary-dark/90 text-lg font-semibold px-3 pr-5 border-b-2 dark:border-secondary-dark transition {tab === "projects" ? "!border-export" : ""}">Projects</button>
		<button on:click={() => setTab("socials")} class="mt-32 pb-4 dark:text-primary-dark/90 text-lg font-semibold px-5 border-b-2 dark:border-secondary-dark transition {tab === "socials" ? "!border-export" : ""}">Socials</button>
	</div>
	{#if tab === "projects"}
		<div in:scale={{ start: 0.99, opacity: 0.3, duration: 1000 }} class="flex flex-col gap-5 items-center justify-center mt-6">
			{#key selected}
				<Project
					bind:item={projects[selected]}
					on:scroll-left={nextPage}
					on:scroll-right={previousPage}
				/>
				<div class="flex items-center gap-2">
					{#each projects as project, i}
						<button on:click={() => setPage(i)} class="py-1 lg:px-12 px-5 rounded-full cursor-pointer bg-btn-light {projects[selected].name === project.name ? "bg-btn-light dark:bg-nav-dark" : "bg-btn-light/40 dark:bg-secondary-dark hover:!bg-export"} transition"></button>
					{/each}
				</div>
			{/key}
		</div>
	{:else if tab === "socials"}
		<div in:fade class="flex gap-4 items-center flex-wrap lg:justify-start justify-center mt-10">
			<Social url="mailto:contact@bizo.dev">
				<IconEmail class="lg:w-8 lg:h-8 w-6 h-6" />
			</Social>
			<Social url="https://discord.com/users/286509757546758156">
				<IconDiscord class="lg:w-8 lg:h-8 w-6 h-6" />
			</Social>
			<Social url="https://github.com/bizojs">
				<IconGithub class="lg:w-8 lg:h-8 w-6 h-6" />
			</Social>
			<Social url="https://x.com/bizo7L">
				<IconTwitter class="lg:w-8 lg:h-8 w-6 h-6" />
			</Social>
			<Social url="https://reddit.com/u/bizo7L">
				<IconReddit class="lg:w-8 lg:h-8 w-6 h-6" />
			</Social>
		</div>
	{/if}
</div>