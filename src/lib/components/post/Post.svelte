<script>
    import IconViews from "~icons/tabler/eye"
    export let post
</script>

<a href="/blog/{post.slug}" class="flex flex-col gap-5 p-6 lg:w-1/3 w-full flex-grow rounded-2xl bg-project dark:bg-project-dark select-none drop-shadow-sm hover:animate-scale">
    <div class="flex justify-between items-center w-full gap-10 flex-grow">
        <div class="flex flex-col gap-2">
            <h2 class="font-semibold text-lg drop-shadow-sm">{post.title}</h2>
            <p class="text-secondary-light dark:text-secondary-dark text-sm">{post.description}</p>
        </div>
    </div>
    <div class="flex justify-between gap-5">
        <div class="flex gap-2 flex-wrap">
            {#each post.categories as category}
                <div class="flex items-center gap-1 bg-accent/10 hover:bg-accent/20 px-3 py-1.5 rounded-lg transition-all">
                    <p class="text-sm">{category}</p>
                </div>
            {/each}
        </div>
        <div class="flex items-center gap-1 bg-accent/10 hover:bg-accent/20 px-3 py-1.5 rounded-lg transition-all self-end">
            <IconViews class="w-5 h-5" />
            <p class="text-sm">
                {post.views.toLocaleString()}
            </p>
        </div>
    </div>
</a>