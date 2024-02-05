let startY = 0
let threshold = 50

function handleStart(event) {
    startY = event.clientY || event.touches[0].clientY
}

function handleMove(event, node) {
    if (startY === 0) return
    let currentEventY = event.clientY || event.touches[0].clientY
    const deltaY = currentEventY - startY
    let currentY = deltaY
    if (Math.abs(deltaY) > threshold) {
        currentY = deltaY < 0 ? -threshold : threshold
        node.children[1].style.opacity = 1
    } else {
        currentY = deltaY
        node.children[1].style.opacity = 0
    }
    node.style.transform = `translateY(${currentY}px)`
}

function handleEnd(event, node) {
    const touchEndY = event.clientY || event.changedTouches[0].clientY
    const deltaY = touchEndY - startY

    if (Math.abs(deltaY) > threshold) {
        const direction = deltaY > 0 ? "up" : "down"
        node.dispatchEvent(new CustomEvent("swiped", { detail: { direction } }))
    }
    startY = 0
}

function moveElementBack(node) {
    node.style.transform = "translateY(0px)"
}

/**
 * SvelteKit Action to handle which direction an element is swiped
 * @param   {HTMLElement} node - The element that the action is used on
 * @listens event:touchstart
 * @listens event:touchend
 * @listens event:mousedown
 * @listens event:mouseup
 * @fires   swiped             - Use with `on:swiped` - Use `<Event>.detail.direction` to get the swipe direction
 * @example
 * <div bind:page={pages[current]} use:swipe on:swiped={(event) => handleSwipe(event.detail.direction)}>
 * ...
 * </div>
 */
export function swipe(node) {
    node.addEventListener("touchstart", (event) => handleStart(event))
    node.addEventListener("touchend", (event) => handleEnd(event, node))
    node.addEventListener("mousedown", (event) => handleStart(event, node))
    node.addEventListener("mouseup", (event) => handleEnd(event, node))
    return {
        destroy() {
            node.removeEventListener("touchstart", (event) => handleStart(event))
            node.removeEventListener("touchend", (event) => handleEnd(event, node))
            node.removeEventListener("mousedown", (event) => handleStart(event, node))
            node.removeEventListener("mouseup", (event) => handleEnd(event, node))
        }
    }
}

/**
 * SvelteKit Action to handle moving element while swiping
 * @param   {HTMLElement} node - The element that the action is used on
 * @listens event:touchstart
 * @listens event:touchmove
 * @listens event:touchend
 * @listens event:mousedown
 * @listens event:mousemove
 * @listens event:mouseup
 * @example
 * <div use:swipe on:swiped={(event) => handleSwipe(event.detail.direction)}>
 *     <div use:swipeMove />
 * </div>
 */
export function swipeMove(node) {
    // mobile swiping
    node.addEventListener("touchstart", (event) => handleStart(event, node))
    node.addEventListener("touchmove", (event) => handleMove(event, node))
    node.addEventListener("touchend", () => moveElementBack(node))
    // desktop mouse
    node.addEventListener("mousedown", (event) => handleStart(event, node))
    node.addEventListener("mousemove", (event) => handleMove(event, node))
    node.addEventListener("mouseup", () => moveElementBack(node))
    return {
        destroy() {
            // mobile swiping
            node.removeEventListener("touchstart", (event) => handleStart(event, node))
            node.removeEventListener("touchmove", (event) => handleMove(event, node))
            node.removeEventListener("touchend", () => moveElementBack(node))
            // desktop mouse
            node.removeEventListener("mousedown", (event) => handleStart(event, node))
            node.removeEventListener("mousemove", (event) => handleMove(event, node))
            node.removeEventListener("mouseup", () => moveElementBack(node))
        }
    }
}