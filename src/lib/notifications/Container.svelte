<script>
    import {
        Content,
        toast,
        toastFlip,
        toastFlyIn,
        toastFlyOut
    } from "$lib/notifications"
</script>

<div class="flex flex-col lg:items-end items-center w-full gap-3 fixed top-3 lg:right-3 right-0 pointer-events-none z-[1000]">
    {#each $toast as item (item.id)}
        <div
            animate:toastFlip
            in:toastFlyIn
            out:toastFlyOut
            class="lg:max-w-[40%] lg:w-fit w-[90%]"
        >
            <Content {item} />
        </div>
    {/each}
</div>