<script>
    import { fade, scale } from "svelte/transition"
    import { createEventDispatcher } from "svelte"
    import { clickOutside } from "$lib/util"
    import { quintOut } from "svelte/easing"
    import { goto } from "$app/navigation"
    import { onMount } from "svelte"

    export let pages = []
    $: filtered = structuredClone(pages)
    $: query = ""

    onMount(() => {
        document.querySelector("#search").focus()
    })

    function search() {
        if (!query) filtered = pages
        filtered = filtered.filter(page => page.name.toLowerCase().includes(query.toLowerCase()))
    }

    const dispatch = createEventDispatcher()
    function redirectTo(page) {
        dispatch("navigate")
        goto(page.url)
    }
</script>

<div transition:fade={{ duration: 300 }} class="flex justify-center z-50 w-full h-full fixed top-0 left-0 bg-black/30 backdrop-blur-[1px]">
    <div
        use:clickOutside
        on:outclick={() => dispatch("close")}
        on:escape={() => dispatch("close")}
        transition:scale={{ duration: 350, start: 0.9, easing: quintOut }}
        class="flex flex-col lg:min-w-[40%] lg:w-[40%] w-full min-h-[12rem] h-1/2 rounded-lg py-6 px-6 lg:mt-10"
    >
        <div class="relative w-full">
            <svg class="w-8 h-8 stroke-primary-dark dark:stroke-primary-light absolute top-1/2 -translate-y-1/2 left-2" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
            </svg>
            <input type="text" autocomplete="new-password" class="hidden">
            <input id="search" type="text" bind:value={query} on:keyup={search} class="flex gap-2 items-center rounded-t-lg bg-primary-light/95 dark:bg-primary-dark/95 hover:bg-secondary-light dark:hover:bg-secondary-dark/60 transition pl-12 p-3 text-lg w-full placeholder:text-base border-2 border-b border-border-light/30 dark:border-border-dark/30" placeholder="Search..." autocomplete="off">
        </div>
        <div class="flex flex-col gap-1 bg-primary-light/95 dark:bg-primary-dark/95 rounded-b-lg p-2 h-full border-2 border-t border-border-light/30 dark:border-border-dark/30">
            {#each filtered as page}
                <button on:click={() => redirectTo(page)} class="flex justify-between items-center p-3 hover:bg-secondary-light dark:hover:bg-secondary-dark/30 w-full text-start rounded transition text-primary-light/60 dark:text-primary-dark/60 hover:text-primary-light dark:hover:text-primary-dark group">
                    <p>{page.name}</p>
                    <svg class="w-6 h-6 stroke-primary-dark/0 dark:stroke-primary-light/0 group-hover:stroke-primary-dark dark:group-hover:stroke-primary-light transition" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12.5 16h-8.5a1 1 0 0 1 -1 -1v-10a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v8" />
                        <path d="M7 20h5.5" />
                        <path d="M9 16v4" />
                        <path d="M16 22l5 -5" />
                        <path d="M21 21.5v-4.5h-4.5" />
                    </svg>
                </button>
            {/each}
        </div>
    </div>
</div>