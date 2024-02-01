import { writable } from "svelte/store"
import { uuid } from "$lib/util"

function createToast() {
    const { subscribe, update } = writable([])
    
    /**
     * Add a new toast to the store
     * @param {Object}  options             - The options for the toast
     * @param {string}  options.message     - The message to display
     * @param {string}  options.type        - The type of toast (default, success, error, warning, info)
     * @param {number}  options.duration    - The duration of the toast (in ms)
     * @param {boolean} options.dismissible - Whether the toast is dismissible (default: true)
    */
    function add(options) {
        const toast = { id: uuid(), ...options, initial: 1, next: 0 }
        update((toasts) => [toast, ...toasts])
    }

    /**
     * Remove a toast message
     * @param {string} id - The id of the toast
    */
    function remove(id) {
        update((n) => n.filter((i) => i.id !== id))
    }

    return { subscribe, add, remove }

}

export const toast = createToast()