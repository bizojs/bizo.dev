export function follow(node) {

    node.classList.add("follow")
    
    function handleMove(event) {
        const x = event.clientX
        const y = event.clientY

        const middleX = node.offsetLeft + node.offsetWidth  / 2
        const middleY = node.offsetTop  + node.offsetHeight / 2

        const offsetX = ((x - middleX) / middleX) * 15
        const offsetY = ((y - middleY) / middleY) * 10
        node.style.setProperty("--rotateX", -1 * offsetY + "deg")
        node.style.setProperty("--rotateY", offsetX + "deg")

    }

    document.addEventListener("mousemove", handleMove)

    return {
        destroy() {
            document.removeEventListener("mousemove", handleMove)
            node.classList.remove("follow")
        }
    }

}