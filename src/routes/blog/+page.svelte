<svelte:head>
    <title>bizo7L - blog</title>
    <meta property="og:title" content="bizo7L - blog" />
    <meta name="description" content="Welcome to my corner of the internet." />
    <meta name="og:description" content="Welcome to my corner of the internet." />
</svelte:head>

<script>
    import { Post } from "$lib/components"
    export let data
</script>

<div class="flex justify-center lg:my-20 gap-4 flex-wrap items-stretch lg:mt-36 mt-28 mb-20">
    {#each data.posts as post}
        <Post {post} />
    {/each}
</div>