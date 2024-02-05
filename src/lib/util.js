import { notification } from "$lib/notifications"

/**
 * Generates a UUID
 * @return {String} 
 */
export function uuid() {
    return (Date.now().toString(16) + Number(Math.random().toString().slice(12)).toString(16))
}

Date.prototype.format = (function() {
    return this.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })
})

/**
 * Copy text to the clipboard
 * @param  {String} text - The text to copy
 * @return {void}
 */
export function copy(text) {
    try {
        navigator.clipboard.writeText(text)
        return notification.success({ message: "Copied to clipboard" })
    } catch (e) {
        console.error(e)
        return notification.error({ message: "Failed to copy. Check console for details." })
    }
}

export function scroll(bool) {
    document.documentElement.style.overflowY = bool ? "auto" : "hidden"
}

export function focus(element) {
    document.querySelector(element).focus()
}

/**
 * Removes `...` comments and `file:...` text from codeblocks
 * @param {String} code - The code to format
 * @return {String}
 */
export function formatCode(code) {
	return code
        .replace(/(\.{3,})\s*/g, "")              // ... comments
        .replace(/^file:(.*)$/gm, "")             // file:line
        .trim()
}

export function formatFile(code) {
    return firstLineIsFile(code) ? code.replace(/file:/g, "") : "File not set"
}

export function firstLineIsFile(file) {
    return file.match(/file:/g)
}

export function handleCodeblocks() {
    const codeblocks = document.querySelectorAll("pre")
    for (const codeblock of codeblocks) {
        // create the new container
        const container = document.createElement("div")
        container.id = "pre-wrap"
        // create the button
        const button = document.createElement("button")
        // create titlebar
        const titlebar = document.createElement("div")
        titlebar.id = "titlebar"
        // create title for file
        const file = document.createElement("p")
        file.id = "file-name"
        file.innerText = formatFile(codeblock.children[0].children[0].innerText ?? "File not set")

        button.id = "copy-to-clipboard"
        button.innerHTML =
        `<svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h3m9 -9v-5a2 2 0 0 0 -2 -2h-2" />
            <path d="M13 17v-1a1 1 0 0 1 1 -1h1m3 0h1a1 1 0 0 1 1 1v1m0 3v1a1 1 0 0 1 -1 1h-1m-3 0h-1a1 1 0 0 1 -1 -1v-1" />
            <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
        </svg>`
        button.onclick = () => {
            copy(formatCode(codeblock.innerText))
        }

        const pre = codeblock.cloneNode(true)
        pre.innerHTML = pre.children[0].innerHTML

        if (firstLineIsFile(codeblock.children[0]?.innerText)) {
            pre.children[0].remove()
        }

        // add the button and codeblock to the container
        titlebar.appendChild(file)
        titlebar.appendChild(button)
        container.appendChild(titlebar)
        container.appendChild(pre)
        // replace the codeblock with the new container
        codeblock.replaceWith(container)
    }
}