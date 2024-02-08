<script>
    import IconGithub from "~icons/tabler/brand-github"
    import IconLink from "~icons/tabler/external-link"

    export let item

    const external = item.website && item.website.startsWith("/") ? false : true

    const progress = {
        get title() {
            if (item.progress <    0) return "Paused"
            if (item.progress <=  30) return "Early development"
            if (item.progress <=  70) return "In progress"
            if (item.progress <=  99) return "Closing development"
            if (item.progress >= 100) return "Complete"
        },
        get bg() {
            if (item.progress <    0) return `bg-secondary-light dark:bg-secondary-dark`
            if (item.progress <=  30) return `bg-red-500`
            if (item.progress <=  70) return `bg-yellow-400`
            if (item.progress <=  99) return `bg-sky-500`
            if (item.progress >= 100) return `bg-green-500`
        },
        get text() {
            if (item.progress <    0) return `text-secondary-light dark:text-secondary-dark`
            if (item.progress <=  30) return `text-red-500 dark:text-red-500`
            if (item.progress <=  70) return `text-yellow-400 dark:text-yellow-400`
            if (item.progress <=  99) return `text-sky-500 dark:text-sky-500`
            if (item.progress >= 100) return `text-green-500 dark:text-green-500`
        }
    }
</script>

<div class="flex flex-col gap-5 p-6 lg:w-1/3 w-full flex-grow rounded-2xl bg-project dark:bg-project-dark select-none drop-shadow-sm">
    <div class="flex justify-between items-center w-full gap-10 flex-grow">
        <div class="flex flex-col gap-2">
            <h2 class="font-semibold text-lg drop-shadow-sm">{item.name}</h2>
            <h2 class="text-secondary-light dark:text-secondary-dark text-sm">{item.description}</h2>
            <div class="flex gap-2 items-center w-full">
                <span class="p-1 {progress.bg} rounded-full"></span>
                <p class="{progress.text} text-sm">
                    <span class="!text-inherit">{progress.title}</span>
                    {#if item?.paused}
                        <span class="text-primary-light/20 dark:text-primary-dark/40 text-sm">(paused)</span>
                    {/if}
                </p>
            </div>
        </div>
        <img src={item.logo} alt="" draggable="false" class="h-16 w-auto rounded-full drop-shadow-lg">
    </div>
    <div class="flex gap-2">
        {#if item.github}
            <a href={"https://github.com/" + item.github} target="_blank" rel="noreferrer" class="flex items-center gap-1 bg-accent/10 hover:bg-accent/20 px-3 py-1.5 rounded-lg transition-all">
                <IconGithub class="w-5 h-5" />
                <p class="text-sm">Source</p>
            </a>
        {/if}
        {#if item.website}
            <a
                href={item.website}
                target={external ? "_blank" : ""}
                rel={external ? "external" : ""}
                class="flex items-center gap-1 bg-accent/10 hover:bg-accent/20 px-3 py-1.5 rounded-lg transition-all"
            >
                <IconLink class="w-5 h-5" />
                <p class="text-sm">Visit</p>
            </a>
        {/if}
    </div>
</div>

<!-- 
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
</div> -->