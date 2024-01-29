<script>
    import { createEventDispatcher } from "svelte"
    const dispatch = createEventDispatcher()

    export let url = false
</script>

{#if url}
    <a href={url} target="_blank" rel="noreferrer" class="flex p-3 bg-secondary-light/80 dark:bg-secondary-dark/50 w-fit rounded-lg border-2 border-border-light/10 dark:border-border-dark/20 hover:bg-secondary-light dark:hover:bg-secondary-dark/70 hover:border-border-light/40 dark:hover:border-border-dark/30 transition group">
        <slot />
    </a>
{:else}
    <button on:click={() => dispatch("click")} class="flex p-3 bg-secondary-light/80 dark:bg-secondary-dark/50 w-fit rounded-lg border-2 border-border-light/10 dark:border-border-dark/20 hover:bg-secondary-light dark:hover:bg-secondary-dark/70 hover:border-border-light/40 dark:hover:border-border-dark/30 transition group">
        <slot />
    </button>
{/if}