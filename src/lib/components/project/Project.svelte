<script>
    import IconGithub from "~icons/tabler/brand-github"
    import IconLink from "~icons/tabler/external-link"

    export let project

    const external = project.website && project.website.startsWith("/") ? false : true

    const progress = {
        get title() {
            if (project.progress <    0) return "Paused"
            if (project.progress <=  30) return "Early development"
            if (project.progress <=  70) return "In progress"
            if (project.progress <=  99) return "Closing development"
            if (project.progress >= 100) return "Complete"
        },
        get bg() {
            if (project.progress <    0) return `bg-secondary-light dark:bg-secondary-dark`
            if (project.progress <=  30) return `bg-red-500 dark:bg-red-500`
            if (project.progress <=  70) return `bg-yellow-400 dark:bg-yellow-400`
            if (project.progress <=  99) return `bg-sky-500 dark:bg-sky-500`
            if (project.progress >= 100) return `bg-green-500 dark:bg-green-500`
        },
        get text() {
            if (project.progress <    0) return `text-secondary-light dark:text-secondary-dark`
            if (project.progress <=  30) return `text-red-500 dark:text-red-500`
            if (project.progress <=  70) return `text-yellow-400 dark:text-yellow-400`
            if (project.progress <=  99) return `text-sky-500 dark:text-sky-500`
            if (project.progress >= 100) return `text-green-500 dark:text-green-500`
        }
    }
</script>

<div class="flex flex-col gap-5 p-6 lg:w-1/3 w-full flex-grow rounded-2xl bg-project dark:bg-project-dark select-none drop-shadow-sm hover:animate-scale">
    <div class="flex justify-between items-center w-full gap-10 flex-grow">
        <div class="flex flex-col gap-2">
            <h2 class="font-semibold text-lg drop-shadow-sm">{project.name}</h2>
            <p class="text-secondary-light dark:text-secondary-dark text-sm">{project.description}</p>
            {#if project.progress}
                <div class="flex gap-2 items-center w-full">
                    <span class="p-1 {progress.bg} rounded-full" />
                    <p class="{progress.text} text-sm">
                        <span class="!text-inherit">{progress.title}</span>
                        {#if project?.paused}
                            <span class="text-primary-light/20 dark:text-primary-dark/40 text-sm">(paused)</span>
                        {/if}
                    </p>
                </div>
            {/if}
        </div>
        <img src={project.logo} alt="" draggable="false" class="h-16 w-auto rounded-full drop-shadow-lg">
    </div>
    <div class="flex gap-2">
        {#if project.github}
            <a href={"https://github.com/" + project.github} target="_blank" rel="noreferrer" class="flex items-center gap-1 bg-accent/10 hover:bg-accent/20 px-3 py-1.5 rounded-lg transition-all">
                <IconGithub class="w-5 h-5" />
                <p class="text-sm">Source</p>
            </a>
        {/if}
        {#if project.website}
            <a
                href={project.website}
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