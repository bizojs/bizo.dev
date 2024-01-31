import { writable } from "svelte/store"
import { uuid } from "$lib/util"

function createToast() {
    const { subscribe, update } = writable(new Array())
    /**
     * @param {string} message
     * @param {string} type
     * @param {boolean} dismissable
     * @param {number} duration
     * @return {number} 
    */
    function add(options) {
        const toast = { id: uuid(), ...options, initial: 1, next: 0 }
        update((toasts) => [toast, ...toasts])
    }

    /**
     * Remove a toast message
     * @param {number} id The id of the toast
     * @return {number}
    */
    function remove(id) {
        update((n) => n.filter((i) => i.id !== id))
    }

    return { subscribe, add, remove }

}

export const toast = createToast()