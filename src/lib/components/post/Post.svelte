<script>
    export let post
</script>

<a href="/blog/{post.slug}" class="flex flex-col gap-5 p-6 rounded bg-secondary-light/50 hover:bg-secondary-light/60 dark:hover:bg-secondary-dark/60 dark:bg-secondary-dark/50 transition relative justify-between hover:animate-scale basis-1/4 flex-grow min-w-[20rem]">
    <h1 class="text-3xl font-semibold">{post.title}</h1>
    <div class="flex flex-col gap-5">
        <span class="p-5 border-l-4 border-btn-light dark:border-secondary-dark rounded bg-nav-light/80 dark:bg-nav-dark/20">
            <p class="text-base text-secondary-light dark:text-secondary-dark">{post.description}</p>
        </span>
        {#if post.categories.length > 0}
            <div class="flex glex-col gap-2 flex-wrap items-end">
                {#each post.categories as category}
                    <div class="flex lg:flex-grow-0 flex-grow lg:justify-start justify-center py-1.5 px-2.5 rounded bg-nav-light dark:bg-secondary-dark">
                        <p class="text-secondary-light dark:text-secondary-dark text-sm">#{category}</p>
                    </div>
                {/each}
            </div>
        {/if}    
    </div>
</a>