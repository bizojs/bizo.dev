<svelte:head>
	<title>bizo7L</title>
</svelte:head>

<script>
	import { Project, Social } from "$lib/components"
    import { fade } from "svelte/transition"
	
	import IconDiscord from "~icons/tabler/brand-discord"
	import IconGithub from "~icons/tabler/brand-github"
	import IconReddit from "~icons/tabler/brand-reddit"
	import IconTwitter from "~icons/tabler/brand-x"
	import IconEmail from "~icons/tabler/at"

	const projects = [
		{
			name: "Snippet Generator",
			description: "Generate custom code snippets for Visual Studio Code",
			image: "/projects/snippets.png",
			website: "/snippet"
		},
		{
			name: "Demos",
			description: "The website of all demos that I make for SvelteKit. Each demo will have an interactive view of how it works.",
			image: "/projects/bizo-demos.png",
			github: "bizojs/demo.bizo.dev",
			website: "https://demo.bizo.dev"
		},
		{
			name: "Rada",
			description: "The dashboard for Rada - An intuitive Discord bot to help with all your moderation / management needs.",
			image: "/projects/rada-web.png",
			github: "RadaBot/Rada",
			website: "https://rada.bizo.dev"
		},
		{
			name: "Temple MDW",
			description: "A work-in-progress MDT (mobile data terminal) meant for use in FiveM RP servers such as OCRP, DOJRP, etc...",
			image: "/projects/temple-mdw.png",
			github: "bizojs/temple-mdw"
		},
		{
			name: "Lightable",
			description: "Open-source chatting. Free, Open-source, Forever.",
			image: "/projects/lightable-app.png",
			github: "Lightable/Lightable",
			website: "https://lightable.app"
		}
	]
</script>

<section class="flex flex-col gap-20 justify-center lg:items-start items-center lg:mt-56 mt-36">
	<div class="profile-img lg:hidden flex"></div>
	<div class="flex gap-10 w-full h-fit items-center justify-between select-none lg:text-left text-center">
		<div class="flex flex-col gap-2 lg:w-1/2 w-full h-fit">
			<h1 class="text-6xl font-bold">Full-Stack SvelteKit Developer 💫</h1>
			<p class="text-lg lg:w-2/3 w-full text-secondary-light dark:text-secondary-dark">Hey there, I'm Brad. I'm a Full-Stack Sveltekit Developer from the UK. 📍</p>
			<div in:fade class="flex gap-4 items-center flex-wrap lg:justify-start justify-center my-5">
				<Social url="mailto:contact@bizo.dev">
					<IconEmail class="w-8 h-8 social" />
				</Social>
				<Social url="https://discord.com/users/286509757546758156">
					<IconDiscord class="w-8 h-8 social" />
				</Social>
				<Social url="https://github.com/bizojs">
					<IconGithub class="w-8 h-8 social" />
				</Social>
				<Social url="https://x.com/bizo7L">
					<IconTwitter class="w-8 h-8 social" />
				</Social>
				<Social url="https://reddit.com/u/bizo7L">
					<IconReddit class="w-8 h-8 social" />
				</Social>
			</div>
		</div>
		<div class="profile-img lg:flex hidden"></div>
	</div>
	<div class="flex flex-col flex-wrap lg:gap-4 gap-6 h-fit lg:items-start items-center justify-center select-none w-full my-10">
		<div class="flex lg:flex-row flex-col lg:gap-8 gap-2">
			<p class="font-medium border-b-2 border-btn-light dark:border-btn-dark pb-1">Tech Stack</p>
		</div>
		<div class="flex lg:flex-row flex-col gap-8">
			<img src="https://skillicons.dev/icons?i=html,css" alt="" draggable="false" class="select-none lg:h-max h-20 w-auto hover:-translate-y-3 transition-all duration-500">
			<img src="https://skillicons.dev/icons?i=svelte,tailwindcss" alt="" draggable="false" class="select-none lg:h-max h-20 w-auto hover:-translate-y-3 transition-all duration-500">
			<img src="https://skillicons.dev/icons?i=js,mongodb,git" alt="" draggable="false" class="select-none lg:h-max h-20 w-auto hover:-translate-y-3 transition-all duration-500">
		</div>
	</div>
</section>

<section class="flex flex-col gap-10 justify-center items-center mt-56 mb-20 scroll-smooth">
	<a href="#portfolio" id="portfolio" class="!text-accent font-semibold uppercase self-start lg:text-3xl text-lg scroll-smooth">Portfolio</a>
	{#each projects as project, i}
		{@const left = i % 2 === 0}
		<Project {left} item={project} />
	{/each}
</section>