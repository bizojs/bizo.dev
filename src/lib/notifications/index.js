export { default as Notifications } from "./Container.svelte"
export { default as Content } from "./Content.svelte"
export { default as Icon } from "./Icons.svelte"

export { toastFlip, toastFlyIn, toastFlyOut } from "./animation.js"
export { toast } from "./stores.js"

import { toast } from "./stores.js"

function show (
    { message = "Message not provided", duration = 5000, type = "default", dismissable = true } = 
    { message: "Message not provided", duration: 5000, type: "default", dismissable: true }
) {
    toast.add({ message, duration, type, dismissable })
}

function addToast() {
    return {
        show,
        success: ({ message, duration, dismissable }) => {
            show({ message, duration, type: "success", dismissable })
        },
        error: ({ message, duration, dismissable }) => {
            show({ message, duration, type: "error", dismissable })
        },
        info: ({ message, duration, dismissable }) => {
            show({ message, duration, type: "info", dismissable })
        },
        warning: ({ message, duration, dismissable }) => {
            show({ message, duration, type: "warning", dismissable })
        }
    }
}

export const notification = addToast()