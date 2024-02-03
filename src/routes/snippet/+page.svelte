<svelte:head>
    <title>bizo7L - snippet generator</title>
    <meta name="description" content="Create custom snippets for Visual Studio Code" />
    <meta name="og:description" content="Create custom snippets for Visual Studio Code" />
</svelte:head>

<script>
    import IconHelp from "~icons/tabler/help-circle"
    
    import { Dialog } from "$lib/components"
    import { copy } from "$lib/util"
    let description = ""
    let trigger = ""
    let content = ""
    $: helpOpen = false
    $: snippet = `"${description}": {
    "prefix": "${trigger}",
    "body": [
        ${content.replace(/"/gi, "\\\"").split("\n").map(line => {
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
    function toggleHelp() {
        helpOpen = !helpOpen
    }
</script>

<div class="flex flex-col gap-10 justify-center mt-10 mb-6 text-center lg:mx-40">
    <h1 class="lg:text-6xl text-4xl font-semibold">Visual Studio Code Snippet Creator</h1>
    <blockquote class="text-start">
        <p class="text-base text-primary-light/70 dark:text-primary-dark/70">
            You can use placeholders in your snippets such as <code id="code">$1</code>, <code id="code">$2</code>, etc. The placeholder <code id="code">$0</code> will determine where the cursor will end. You can also provide a default value for placeholders for example: <code id="code">$1:hello</code>
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
            <textarea bind:value={content} class="px-4 py-2 text-lg min-h-[10rem] w-full rounded bg-secondary-light/70 dark:bg-secondary-dark/40 hover:bg-secondary-light dark:hover:bg-secondary-dark/60 resize-none transition font-code" type="text"></textarea>
        </div>
    </div>
    <div class="flex flex-col gap-2 flex-grow lg:w-1/3 w-full relative">
        <pre class="px-4 py-2 text-lg w-full h-fit rounded bg-secondary-light/90 dark:bg-secondary-dark/40 pb-5 max-h-[40rem] overflow-y-auto">{snippet}</pre>
        <div class="flex gap-2">
            <button tabindex="0" class="bg-secondary-light/70 dark:bg-secondary-dark/40 hover:bg-secondary-light dark:hover:bg-secondary-dark/60 transition-all p-2 cursor-pointer select-none rounded flex-grow" on:click={copySnippet}>
                Copy Snippet
            </button>
            <button tabindex="0" class="bg-secondary-light/70 dark:bg-secondary-dark/40 hover:bg-secondary-light dark:hover:bg-secondary-dark/60 transition-all p-2 cursor-pointer select-none rounded group" on:click={toggleHelp}>
                <IconHelp class="w-6 h-6 help group" />
            </button>
        </div>
    </div>
</div>

<!-- <blockquote class="pt-7 text-start">
    <p class="text-base text-primary-light/70 dark:text-primary-dark/70">
        To import this snippet into VS Code, use the shortcut <code id="code">CTRL</code> + <code id="code">SHIFT</code> + <code id="code">P</code> to open the Command Pallet, type <code id="code">config</code> - it should say <span class="text-theme-text">"Snippets: Configure User Snippets"</span>.<br />
        Select that option and then type the name of the language you are creating the snippet for ex. "html". A .json file should pop up - Paste the snippet you copied into that file.
    </p>
</blockquote> -->

{#if helpOpen}
    <Dialog title="How to use these snippets?" on:close={toggleHelp}>
        <div class="flex flex-col gap-1">
            <p class="text-primary-light/80 dark:text-primary-dark/80">You can import these snippets into VSCode by doing the following:</p>
            <ol class="list-decimal list-inside ml-2">
                <li class="text-primary-light/80 dark:text-primary-dark/80">Open the command pallete with the keybind <code id="code" class="!text-xs">CTRL + SHIFT + P</code></li>
                <li class="text-primary-light/80 dark:text-primary-dark/80">Type <span>"snippets"</span> into the command pallete and select the first option which should be <span>"Snippets: Configure User Snippets"</span></li>
                <li class="text-primary-light/80 dark:text-primary-dark/80">Start typing the language that the snipper is for, and it should show a json file for that language.</li>
                <li class="text-primary-light/80 dark:text-primary-dark/80">Now you can paste the snippet into the aforementioned json file.</li>
                <li class="text-primary-light/80 dark:text-primary-dark/80">Done! You can activate the snippet by typing the trigger into VS Code.</li>
            </ol>
        </div>
    </Dialog>
{/if}