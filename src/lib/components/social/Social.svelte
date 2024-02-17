<script>
    import { createEventDispatcher } from "svelte"
    const dispatch = createEventDispatcher()

    export let url = false
</script>

{#if url}
    <a href={url} target="_blank" rel="noreferrer" class="transition group">
        <slot />
    </a>
{:else}
    <button on:click={() => dispatch("click")} class="transition group">
        <slot />
    </button>
{/if}