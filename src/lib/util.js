export function clickOutside(node, { trigger } = { trigger: null }) {
    const handleClick = (event) => {
        if (trigger && event.target.id === trigger) return
        if (!node.contains(event.target)) {
            node.dispatchEvent(new CustomEvent("outclick"))
        }
    }
    const handleKeyUp = (event) => {
        if (event.key === "Escape") {
            node.dispatchEvent(new CustomEvent("outclick"))
        }
    }
    document.addEventListener("click", handleClick, true)
    document.addEventListener("keyup", handleKeyUp, true)
    return {
        destroy() {
            document.removeEventListener("click", handleClick, true)
            document.removeEventListener("keyup", handleKeyUp, true)
        }
    }
}

export function formatDate(date, dateStyle = "medium", locale = "en") {
    return new Intl.DateTimeFormat(locale, { dateStyle })
        .format(new Date(date))
}

export function copy(text) {
    navigator.clipboard.writeText(text)
}

export function scroll(bool) {
    document.documentElement.style.overflowY = bool ? "auto" : "hidden"
}

export function focus(element) {
    document.querySelector(element).focus()
}

export function formatCode(code) {
	return code
        .replace(/(\.{3,})\s*/g, "")              // ... comments
        .replace(/(\<\!\-\-\s(.*)\-\-\>*)/gm, "") // html comments
        .replace(/(\/\/[^\n\r]*)/gm, "")          // js comments
        .replace(/(\/\*[\s\S]*?\*\/)/g, "")       // css comments
        .replace(/(^\#\s.*)/gm, "")               // # comments
        .trim()
}