<svelte:head>

</svelte:head>

<script>
    import { page } from "$app/stores"
</script>

<div class="flex h-full w-full flex-grow justify-center items-center my-20">
    <div class="flex flex-col gap-5 items-center justify-center lg:py-10 px-6 py-6 lg:w-1/2 w-full rounded-lg bg-secondary-light/40 dark:bg-secondary-dark/40">
        <h1 class="text-5xl font-semibold">{$page.status}</h1>
        <p class="lg:text-xl text-base text-secondary-light dark:text-secondary-dark">{$page.error?.message}</p>
    </div>
</div>