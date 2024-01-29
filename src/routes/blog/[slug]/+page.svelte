<svelte:head>
    <title>{data.meta.title} - bizo7L</title>
    <meta property="og:type" content="article" />
    <meta property="og:title" content={data.meta.title} />
    <meta name="description" content={data.meta.description} />
    <meta name="og:description" content={data.meta.description} />
    <meta name="date.available" content={new Date(data.meta.date)}>
    <meta name="article:published_time" content={new Date(data.meta.date)}>
    {#if data.meta?.categories?.length > 0}
		{#each data.meta.categories as tag}
			<meta name="article:tag" content={tag}>
		{/each}
	{/if}
</svelte:head>

<script>
    import { formatDate, formatCode, copy } from "$lib/util"
    import { Dialog, Social, Scroll } from "$lib/components"
    import { x, linkedin, reddit } from "$lib/format"
    import { page } from "$app/stores"
    import { onMount } from "svelte"

    import IconLinkedIn from "~icons/tabler/brand-linkedin"
    import IconShare from "~icons/tabler/clipboard-copy"
    import IconReddit from "~icons/tabler/brand-reddit"
    import IconX from "~icons/tabler/brand-x"

    $: shareDialogOpen = false

    onMount(() => {
        const codeblocks = document.querySelectorAll("pre")
        for (const codeblock of codeblocks) {
            let button = document.createElement("button")
			button.id = "copy-to-clipboard"
            button.innerHTML = 
            `<svg class="w-6 h-6 stroke-secondary-dark dark:stroke-secondary-light" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
            </svg>`
            button.onclick = () => {
                copy(formatCode(codeblock.innerText))
            }
            codeblock.appendChild(button)
        }
    })

    function toggleShareDialog() {
        shareDialogOpen = !shareDialogOpen
    }

    export let data
</script>

<Scroll color="bg-export" height="h-1.5" />

<article class="flex flex-col w-full items-center mt-20 gap-12">
    <div class="flex flex-col gap-5 lg:w-1/2 w-full items-center">
        <hgroup class="flex flex-col gap-4 items-center">
            <h1 class="text-5xl font-semibold break-words text-center">{data.meta.title}</h1>
            <div class="flex gap-2 items-center">
                <div class="flex lg:flex-grow-0 flex-grow lg:justify-start justify-center py-1.5 px-2.5 rounded bg-nav-light dark:bg-secondary-dark select-none">
                    <p class="text-primary-light dark:text-primary-dark text-base">
                        Published on {formatDate(data.meta.date)}
                    </p>
                </div>
                <button on:click={toggleShareDialog} class="flex lg:flex-grow-0 flex-grow lg:justify-start justify-center py-1.5 px-2.5 rounded bg-nav-light dark:bg-secondary-dark select-none">
                    <p class="text-primary-light dark:text-primary-dark text-base">
                        Share
                    </p>
                </button>
            </div>
        </hgroup>
        <div class="flex items-center gap-2 flex-wrap justify-center select-none">
            {#each data.meta.categories as category}
                <div class="flex lg:flex-grow-0 flex-grow lg:justify-start justify-center py-1.5 px-2.5 rounded bg-nav-light dark:bg-secondary-dark">
                    <p class="text-secondary-light dark:text-secondary-dark text-sm">{category}</p>
                </div>
            {/each}
        </div>
    </div>
    <div id="post-content" class="prose flex flex-col gap-3 lg:w-1/2 w-full justify-center">
        <svelte:component this={data.content} />
    </div>
</article>

{#if shareDialogOpen}
    <Dialog title="Share this post..." on:close={toggleShareDialog}>
        <div class="flex gap-2 flex-wrap">
            <Social url={x({ title: data.title, url: $page.url.pathname })}>
                <IconX class="w-6 h-6" />
            </Social>
            <Social url={linkedin({ url: $page.url.pathname })}>
                <IconLinkedIn class="w-6 h-6" />
            </Social>
            <Social url={reddit({ title: data.title, url: $page.url.pathname })}>
                <IconReddit class="w-6 h-6" />
            </Social>
            <Social on:click={() => copy($page.url.href)}>
                <IconShare class="w-6 h-6" />
            </Social>
        </div>
    </Dialog>
{/if}