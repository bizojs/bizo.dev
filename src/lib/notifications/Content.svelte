<script>
    import { Icon, toast } from "$lib/notifications"
    import { tweened } from "svelte/motion"
    import { linear } from "svelte/easing"
    import { onMount } from "svelte"

    import DismissIcon from "~icons/tabler/x"
    
    export let item

    let next = item.initial
    let prev = next

    const progress = tweened(item.initial, { duration: item.duration, easing: linear })

    function close() {
        toast.remove(item.id)
    }

    function autoclose() {
        if ($progress === 1 || $progress === 0) close()
    }

    $: if (next !== item.next) {
        next = item.next
        prev = $progress
        progress.set(next).then(autoclose)
    }

    onMount(() => {
        const d = (item.duration)
        const duration = d - d * (($progress - prev) / (next - prev))
        progress.set(next, { duration }).then(autoclose)
    })

    const theme = {
        border: {
            default: "border-notif-default-progress-light dark:border-notif-default-progress-dark",
            success: "border-notif-success-toast",
            error: "border-notif-error-toast",
            info: "border-notif-info-toast",
            warning: "border-notif-warning-toast",
        },
        progress: {
            default: "bg-notif-default-progress-light dark:bg-notif-default-progress-dark",
            success: "bg-notif-success-progress",
            error: "bg-notif-error-progress",
            info: "bg-notif-info-progress",
            warning: "bg-notif-warning-progress",
        },
        close: {
            default: "hover:bg-secondary-light/80 dark:hover:bg-secondary-dark/50",
            success: "hover:bg-notif-success-toast/20",
            error: "hover:bg-notif-error-toast/20",
            info: "hover:bg-notif-info-toast/20",
            warning: "hover:bg-notif-warning-toast/20",
        },
        icon: {
            default: "bg-secondary-light/60 dark:bg-secondary-dark/50",
            success: "bg-notif-success-toast/10",
            error: "bg-notif-error-toast/10",
            info: "bg-notif-info-toast/10",
            warning: "bg-notif-warning-toast/10",
        }
    }

    const textColor = item.type === "default"
        ? "text-primary-light/80 dark:text-primary-dark/80"
        : "text-primary-dark/80 dark:text-primary-dark/80"
</script>

<div class="{theme.border[item.type]} border-r-[5px] bg-notif-default-toast-light dark:bg-notif-default-toast-dark flex items-center justify-between lg:gap-20 gap-2 pt-2 pb-3.5 px-5 w-full shadow-lg relative pointer-events-auto rounded overflow-hidden" role="status">
    <div class="flex gap-5 items-center">
        <span class="{theme.icon[item.type]} lg:p-2.5 p-2 rounded-full">
            <Icon type={item.type} />
        </span>
        <div class="flex flex-col my-2">
            <p class="font-semibold text-sm uppercase">{item.type === "default" ? "Notification" : item.type}</p>
            <p class="{textColor} text-sm">{@html item.message}</p>
        </div>
    </div>
    {#if item.dismissable}
        <button on:click={close} class="{theme.close[item.type]} p-1 rounded-lg transition">
            <DismissIcon class="w-5 h-5 pointer-events-none" />
        </button>
    {/if}
    {#if item.duration}
        <span
            class="{theme.progress[item.type]} h-[5px] absolute rounded-[1px] bottom-0 left-0"
            style="width: {100 * $progress}%"
        />
    {/if}
</div>