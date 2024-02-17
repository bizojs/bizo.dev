<svelte:head>
	<title>bizo7L</title>
</svelte:head>

<script>
	import { Project, Social } from "$lib/components"
    import { fade } from "svelte/transition"
	import { projects } from "$lib/projects"
	
	import IconDiscord from "~icons/tabler/brand-discord"
	import IconGithub from "~icons/tabler/brand-github"
	import IconReddit from "~icons/tabler/brand-reddit"
	import IconTwitter from "~icons/tabler/brand-x"
	import IconEmail from "~icons/tabler/at"
</script>

<section class="flex flex-col lg:gap-20 gap-10 justify-center lg:items-start items-center lg:mt-56 mt-28">
	<div class="profile-img lg:hidden flex" />
	<div class="flex gap-10 w-full h-fit items-center justify-between select-none lg:text-left text-center">
		<div class="flex flex-col gap-2 lg:w-1/2 w-full h-fit">
			<h1 class="text-6xl font-bold drop-shadow">
				Full-Stack SvelteKit Developer 💫
			</h1>
			<p class="text-lg lg:w-2/3 w-full text-secondary-light dark:text-secondary-dark">
				Hey there, I'm Brad. I'm a Full-Stack Sveltekit Developer from the UK. 📍
			</p>
			<div in:fade class="flex gap-4 items-center flex-wrap lg:justify-start justify-center my-5">
				<Social url="mailto:contact@bizo.dev">
					<IconEmail class="w-8 h-8 social drop-shadow" />
				</Social>
				<Social url="https://discord.com/users/286509757546758156">
					<IconDiscord class="w-8 h-8 social drop-shadow" />
				</Social>
				<Social url="https://github.com/bizojs">
					<IconGithub class="w-8 h-8 social drop-shadow" />
				</Social>
				<Social url="https://x.com/bizo7L">
					<IconTwitter class="w-8 h-8 social drop-shadow" />
				</Social>
				<Social url="https://reddit.com/u/bizo7L">
					<IconReddit class="w-8 h-8 social drop-shadow" />
				</Social>
			</div>
		</div>
		<div class="profile-img lg:flex hidden hover:scale-105 transition-all duration-500" />
	</div>
	<div class="flex flex-col flex-wrap lg:gap-4 gap-6 h-fit lg:items-start items-center justify-center select-none w-full my-10">
		<div class="flex lg:flex-row flex-col lg:gap-8 gap-2">
			<p class="font-medium border-b-2 border-btn-light dark:border-btn-dark pb-1">
				Tech Stack
			</p>
		</div>
		<div class="flex lg:flex-row flex-col gap-8">
			<img src="https://skillicons.dev/icons?i=html,css" alt="" draggable="false" class="select-none lg:h-max h-20 w-auto lg:hover:scale-105 transition-all duration-500">
			<img src="https://skillicons.dev/icons?i=svelte,tailwindcss" alt="" draggable="false" class="select-none lg:h-max h-20 w-auto lg:hover:scale-105 transition-all duration-500">
			<img src="https://skillicons.dev/icons?i=js,mongodb,git" alt="" draggable="false" class="select-none lg:h-max h-20 w-auto lg:hover:scale-105 transition-all duration-500">
		</div>
	</div>
</section>

<section class="flex flex-col gap-5 justify-center items-center mt-56 mb-10 scroll-smooth">
	<h2 id="portfolio" class="font-bold self-start lg:text-5xl text-4xl scroll-smooth">
		Portfolio
	</h2>
	<div class="flex gap-4 flex-wrap w-full justify-center">
		{#each projects as project}
			<Project {project} />
		{/each}
	</div>
</section>