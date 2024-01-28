<script>
    export let item
</script>

<div class="flex w-full p-8 rounded-lg bg-secondary-light/80 dark:bg-secondary-dark/50">
    <div class="flex justify-between w-full items-center gap-5 flex-grow">
        <div class="flex flex-col gap-4 justify-between">
            <div class="flex flex-col gap-2">
                <h1 class="lg:text-3xl text-xl font-semibold">{item.name}</h1>
                <p class="lg:text-base text-sm text-secondary-light dark:text-secondary-dark lg:w-[70%] w-full">{item.description}</p>
            </div>
            <div class="flex gap-4 items-center">
                {#if item.github}
                    <a href={"https://github.com/" + item.github} target="_blank" rel="noreferrer" class="flex items-center gap-2 bg-btn-light/60 hover:bg-btn-light/80 dark:hover:bg-secondary-dark/60 dark:bg-secondary-dark transition px-6 py-2 rounded">
                        Github
                    </a>
                {/if}
                {#if item.website}
                    <a href={item.website} target="_blank" rel="noreferrer" class="flex items-center gap-2 bg-btn-light/60 hover:bg-btn-light/80 dark:hover:bg-secondary-dark/60 dark:bg-secondary-dark transition px-6 py-2 rounded">
                        Website
                    </a>
                {/if}
            </div>
        </div>
        <img src={item.image} draggable="false" class="lg:w-32 w-20 lg:h-32 h-20 rounded-lg select-none" alt="">
    </div>
</div>