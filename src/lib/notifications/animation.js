import { fly } from "svelte/transition"
import { flip } from "svelte/animate"

export function toastFlip(node, fromTo) {
    if (node.style.animation) node.style = null
    return flip(node, fromTo, { duration: 500 })
}

export function toastFlyOut(node) {
    if (node.style.animation) node.style = null
    return fly(node, { x: 100, duration: 400 })
}

export function toastFlyIn(node) {
    if (node.style.animation) return
    return fly(node, { x: 100, duration: 400 })
}