export function keybind(node, { key }) {
    if (!key) return
    const handleKeybind = (event) => {
        if (event.key === key && event.shiftKey) {
            node.dispatchEvent(new CustomEvent("keybind"))
        }
    }
    document.addEventListener("keyup", handleKeybind)
    return {
        destroy() {
            document.removeEventListener("keyup", handleKeybind)
        }
    }
}

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