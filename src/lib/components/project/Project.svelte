<script>
    import IconGithub from "~icons/tabler/brand-github"
    import IconLink from "~icons/tabler/external-link"

    export let item
    export let left
    const external = item.website && item.website.startsWith("/") ? false : true
</script>

<div class="flex lg:flex-row flex-col justify-between bg-secondary-light/20 dark:bg-secondary-dark/5 rounded-lg overflow-x-hidden shadow">
    {#if left}
        <img src={item.image} alt="" class="lg:flex hidden w-1/2 h-auto shadow-lg" draggable="false">
    {/if}
    <img src={item.image} alt="" class="lg:hidden flex shadow-sm" draggable="false">
    <div class="flex flex-col justify-between w-full items-center py-10 gap-10">
        <div class="flex flex-col gap-4 items-center">
            <h1 class="text-4xl font-semibold text-center">{item.name}</h1>
            <p class="lg:mx-20 mx-5 text-center">{item.description}</p>
        </div>
        <div class="flex justify-center items-center gap-5">
            {#if item.github}
                <a href={"https://github.com/" + item.github} target="_blank" rel="noreferrer" class="flex items-center gap-2 group">
                    <p class="group-hover:text-accent transition-all">View Code</p>
                    <IconGithub class="w-6 h-6" />
                </a>
            {/if}
            {#if item.website}
                <a
                    href={item.website}
                    target={external ? "_blank" : ""}
                    rel={external ? "external" : ""}
                    class="flex items-center gap-2 group"
                >
                    <p class="group-hover:text-accent transition-all">Visit Page</p>
                    <IconLink class="w-6 h-6" />
                </a>
            {/if}
        </div>
    </div>
    {#if !left}
        <img src={item.image} alt="" class="lg:flex hidden w-1/2 shadow-lg" draggable="false">
    {/if}
</div>