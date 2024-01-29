<svelte:head>
    <title>bizo7L - snippet generator</title>
    <meta name="description" content="Create custom snippets for Visual Studio Code" />
    <meta name="og:description" content="Create custom snippets for Visual Studio Code" />
</svelte:head>

<script>
    import { copy } from "$lib/util"
    let description = ""
    let trigger = ""
    let content = ""
    $: snippet = `"${description}": {
    "prefix": "${trigger}",
    "body": [
        ${content.replace(/"/gi, "'").split("\n").map(line => {
            if (line !== content.split("\n")[content.split("\n").length - 1]) {
                return "\"" + line + "\"," 
            } else {
                return "\"" + line + "\"" 
            }
        }).join("\n\t\t")}
    ],
    "description": "${description}"
}`

    function copySnippet() {
        if (!description || !trigger || !content) return
        copy(snippet)
    }
</script>

<div class="flex flex-col gap-10 justify-center my-10 text-center lg:mx-40">
    <h1 class="lg:text-6xl text-4xl font-semibold">Visual Studio Code Snippet Creator</h1>
    <blockquote class="pt-7 text-start">
        <p class="text-lg text-primary-light/70 dark:text-primary-dark/70">
            To import this snippet into VS Code, use the shortcut <code id="code">CTRL</code> + <code id="code">SHIFT</code> + <code id="code">P</code> to open the Command Pallet, type <code id="code">config</code> - it should say <span class="text-theme-text">"Snippets: Configure User Snippets"</span>.<br />
            Select that option and then type the name of the language you are creating the snippet for ex. "html". A .json file should pop up - Paste the snippet you copied into that file.
        </p>
    </blockquote>
</div>

<div class="flex lg:flex-row flex-col flex-wrap justify-between gap-2 lg:mx-40">
    <div class="flex flex-col gap-2 flex-grow lg:w-1/3 w-full">
        <div class="flex h-12 gap-2 w-full">
            <input class="px-4 py-2 text-lg w-full h-fit rounded bg-secondary-light/70 dark:bg-secondary-dark/40 hover:bg-secondary-light dark:hover:bg-secondary-dark/60 transition placeholder:text-primary-light/60 dark:placeholder:text-primary-dark/70" type="text" placeholder="Description" bind:value={description}>
            <input class="px-4 py-2 text-lg w-full h-fit rounded bg-secondary-light/70 dark:bg-secondary-dark/40 hover:bg-secondary-light dark:hover:bg-secondary-dark/60 transition placeholder:text-primary-light/60 dark:placeholder:text-primary-dark/70" type="text" placeholder="Text trigger" bind:value={trigger}>
        </div>
        <div class="flex flex-grow w-full h-full">
            <textarea bind:value={content} class="px-4 py-2 text-lg min-h-[10rem] w-full rounded bg-secondary-light/70 dark:bg-secondary-dark/40 hover:bg-secondary-light dark:hover:bg-secondary-dark/60 resize-none transition" type="text"></textarea>
        </div>
    </div>
    <div class="flex flex-col gap-2 flex-grow lg:w-1/3 w-full relative">
        <pre class="px-4 py-2 text-lg w-full h-fit rounded bg-secondary-light/90 dark:bg-secondary-dark/40 pb-5 max-h-[40rem] overflow-y-auto">
            {snippet}
        </pre>
        <button tabindex="0" class="bg-secondary-light/70 dark:bg-secondary-dark/40 hover:bg-secondary-light dark:hover:bg-secondary-dark/60 transition-all p-2 cursor-pointer select-none rounded" on:click={copySnippet}>
            Copy Snippet
        </button>
    </div>
</div>