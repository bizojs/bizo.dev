<script>
    $: width = 0

    export let color = "bg-export"
    export let height = "h-1"

    function handleScroll() {
        const { scrollHeight, clientHeight, scrollTop } = document.documentElement
        const winScroll = document.body.scrollTop || scrollTop
        const winHeight = scrollHeight - clientHeight
        const scrolled = (winScroll / winHeight) * 100
        width = winHeight > 0 ? scrolled : 0
    }
</script>

<div
    style="width: {width}%"
    class="{color} {height} m-0 p-0 fixed lg:block hidden top-0 left-0 z-[999] transition-[width] duration-200 ease-out"
/>

<svelte:window on:scroll={handleScroll} />