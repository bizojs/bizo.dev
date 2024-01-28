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