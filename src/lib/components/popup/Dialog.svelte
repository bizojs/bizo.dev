<script>
    import { fade, fly, scale } from "svelte/transition"
    import { backInOut, quintOut } from "svelte/easing"
    import { clickOutside, scroll } from "$lib/util"
    import { createEventDispatcher } from "svelte"
    import { onMount } from "svelte"

    import IconX from "~icons/tabler/x"

    export let title = ""

    const dispatch = createEventDispatcher()

    onMount(() => scroll(false))

    function close() {
        scroll(true)
        dispatch("close")
    }
</script>

<div
    transition:fade={{ duration: 100 }}
    class="flex items-center justify-center z-50 w-full h-full fixed top-0 left-0 bg-black/30 backdrop-blur-sm"
>
    <div
        use:clickOutside 
        on:outclick={close}
        on:escape={close}
        transition:scale={{ duration: 150, start: 0.9, easing: quintOut }}
        class="flex flex-col lg:min-w-[30%] lg:w-[30%] w-[90%] min-h-[12rem] bg-primary-light dark:bg-primary-dark rounded-lg gap-10 py-6 px-6 border-2 border-secondary-light dark:border-secondary-dark"
    >
        <button
            on:click={close}
            in:fly={{ y: -20, duration: 600, easing: backInOut }}
            id="close"
            class="p-1 rounded-full bg-btn-light dark:bg-btn-dark/40 absolute top-8 right-10"
        >
            <IconX class="w-5 h-5" />
        </button>
        <h1 class="font-semibold text-lg">{title ? title : "Information!"}</h1>
        <p class="text-secondary text-sm">
            <slot />
        </p>
    </div>
</div>