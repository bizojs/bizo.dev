<script>
    export let item
    const external = item.website && item.website.startsWith("/") ? false : true
</script>

<div
    class="flex w-full p-8 rounded-lg bg-secondary-light dark:bg-secondary-dark relative select-none"
>
    <div class="flex justify-between w-full items-center gap-5 flex-grow">
        <div class="flex flex-col gap-5 justify-between">
            <div class="flex flex-col lg:gap-2 gap-5">
                <div class="flex items-center justify-between">
                    <h1 class="lg:text-4xl text-xl font-semibold">{item.name}</h1>
                    <img src={item.image} draggable="false" class="h-10 w-auto block lg:hidden rounded-lg select-none drop-shadow-lg" alt="">
                </div>
                <p class="lg:text-base text-sm text-secondary-light dark:text-secondary-dark lg:w-[80%] w-full lg:break-normal break-all">{item.description}</p>
            </div>
            <div class="flex gap-4 items-center lg:justify-start justify-center">
                {#if item.github}
                    <a href={"https://github.com/" + item.github} target="_blank" rel="noreferrer" class="flex items-center gap-2 bg-btn-light/60 hover:bg-btn-light dark:hover:bg-btn-dark dark:bg-btn-dark/60 transition px-6 py-2 rounded">
                        Github
                    </a>
                {/if}
                {#if item.website}
                    <a
                        href={item.website}
                        target={external ? "_blank" : ""}
                        rel={external ? "external" : ""}
                        class="flex items-center gap-2 bg-btn-light/60 hover:bg-btn-light dark:hover:bg-btn-dark dark:bg-btn-dark/60 transition px-6 py-2 rounded"
                    >
                        Website
                    </a>
                {/if}
            </div>
        </div>
        <img src={item.image} draggable="false" class="lg:h-36 lg:w-auto lg:block hidden rounded-lg select-none drop-shadow-lg" alt="">
    </div>
</div>