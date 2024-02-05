<svelte:head>
	<title>bizo7L</title>
</svelte:head>

<script>
    import { fade, crossfade } from "svelte/transition"
	import { Project, Social } from "$lib/components"
	import { swipe, swipeMove } from "$lib/actions"

	import IconDiscord from "~icons/tabler/brand-discord"
	import IconGithub from "~icons/tabler/brand-github"
	import IconReddit from "~icons/tabler/brand-reddit"
	import IconTwitter from "~icons/tabler/brand-x"
	import IconResize from "~icons/f7/resize-v"
	import IconEmail from "~icons/tabler/at"

	$: selected = 0
	$: tab = "projects"
	$: direction = null

	const [send, receive] = crossfade({
		duration: 500,
	})

	const projects = [
		{
			id: 1,
			name: "Snippet Generator",
			description: "Generate custom code snippets for Visual Studio Code",
			image: "/favicon.png",
			website: "/snippet"
		},
		{
			id: 2,
			name: "Demos",
			description: "The website of all demos that I make for SvelteKit. Each demo will have an interactive view of how it works.",
			image: "/favicon.png",
			github: "bizojs/demo.bizo.dev",
			website: "https://demo.bizo.dev"
		},
		{
			id: 3,
			name: "Rada",
			description: "An intuitive Discord bot to help with all your moderation / management needs.",
			image: "/projects/Rada.png",
			github: "RadaBot/Rada",
			website: "https://rada.bizo.dev"
		},
		{
			id: 4,
			name: "Temple MDW",
			description: "The guardian of The Sheep Pen Discord server for the streamer bebanteeni.",
			image: "/projects/TempleMDT.png",
			github: "bizojs/temple-mdw"
		},
		{
			id: 5,
			name: "Lightable",
			description: "Open-source chatting. Free, Open-source, Forever.",
			image: "/projects/Lightable.png",
			github: "Lightable/Lightable"
		},
		{
			id: 6,
			name: "The Sheep Guardian",
			description: "The guardian of The Sheep Pen Discord server for the streamer bebanteeni.",
			image: "/projects/TheSheepGuardian.png",
			website: "https://discord.gg/MZsAS3pBUa"
		}
	]

	function handleSwipe(event) {
		direction = event.detail.direction
		if (direction === "down") {
			if (selected + 1 > projects.length - 1) return selected = 0
			++selected
		} else if (direction === "up") {
			if (selected - 1 < 0) return selected = projects.length - 1
			--selected
		}
	}
	function setTab(page) {
		tab = page
	}
</script>

<div class="flex flex-col lg:mx-40">
	<p class="text-6xl lg:text-left text-center lg:my-16 my-8 font-semibold">Hey there.</p>
	<div class="flex flex-col">
		<p class="text-lg dark:text-primary-dark/80 lg:text-left text-center">A self-taught developer from the <span class="font-semibold">UK</span>.</p>
		<p class="text-lg dark:text-primary-dark/80 lg:text-left text-center">Primary focus: <span class="font-semibold">frontend web development</span>.</p>
	</div>
	<div class="flex lg:justify-start justify-center items-center mb-10">
		<button on:click={() => setTab("projects")} class="lg:mt-28 mt-16 pb-4 dark:text-primary-dark/90 text-lg font-semibold px-3 pr-5 border-b-2 dark:border-secondary-dark transition {tab === "projects" ? "!border-export" : ""}">Projects</button>
		<button on:click={() => setTab("socials")} class="lg:mt-28 mt-16 pb-4 dark:text-primary-dark/90 text-lg font-semibold px-5 border-b-2 dark:border-secondary-dark transition {tab === "socials" ? "!border-export" : ""}">Socials</button>
	</div>
	{#if tab === "projects"}
		<div in:fade use:swipe on:swiped={handleSwipe} class="flex relative items-center transition-all w-full">
			{#each projects as project, i (project.id)}
				{#key selected}
					<div
						in:send={{ key: i }}
						out:receive={{ key: i }}
						use:swipeMove
						class="flex-shrink-0 w-full absolute top-0 left-0 transition-transform duration-[25ms] cursor-ns-resize {i === selected ? "z-20" : "z-10"} {i < selected || i > selected ? "opacity-10" : ""}"
					>
						<Project item={project} />
						<div class="flex gap-2 justify-center items-center select-none absolute top-0 left-0 w-full h-full rounded-lg backdrop-blur-sm bg-black/10 transition-opacity duration-700" style="opacity: 0">
							<p class="text-2xl text-primary-light/70 dark:text-primary-dark/70 animate-pulse">Release to change slide</p>
							<IconResize class="w-10 h-10 animate-pulse" />
						</div>
					</div>
				{/key}
			{/each}
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