---
title: Creating your own toast notifications
description: This guide will show you how to add toast notifications for your sveltekit application.
date: '2024-1-31'
categories:
  - sveltekit
  - stores
published: true
sharable: true
---

## Table of contents

# Prerequisites

- A SvelteKit application.

<br>

In this example we will be using TailwindCSS for our styling. You can use anything you like. If you don't know how to set up TailwindCSS in a SvelteKit application, Refer to [Adding TailwindCSS to your SvelteKit website](/blog/adding-tailwindcss-to-your-sveltekit-website)

<br>

# Creating the store

First of all we want to create a store for the notifications. Later on we will extend this and export functions like `notification.success(...)`

```js
file:lib/notifications/stores.js
import { writable } from "svelte/store"

function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 12).padStart(12, 0)
}

function createToast() {
    const { subscribe, update } = writable([])

    function add(options) {
        const toast = {
            id: generateID(),
            ...options,
            initial: 1,
            next: 0
        }
        update((toasts) => [toast, ...toasts])
    }

    function remove(id) {
        update((toasts) => toasts.filter((toast) => toast.id !== id))
    }

    return { subscribe, add, remove }
}

export const toast = createToast()
```

<br>

# Animations

This step is optional if you don't want animations or if you want to use your own. We are going to create custom wrappers for existing sveltekit transitions. This is because their default behaviour acts strange.

Credit [@legowhales](https://github.com/sveltejs/svelte/issues/4910#issuecomment-959339988)

```js
file:lib/notifications/animation.js
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
```

<br>

# Create the toast components

We will be creating 2 components for the toasts. One will be the container and the other will be the content.

```svelte
file:lib/notifications/Container.svelte
<script>
    import {
        Content,
        toast,
        toastFlip,
        toastFlyIn,
        toastFlyOut
    } from "$lib/notifications"
</script>

<div class="flex flex-col lg:items-end items-center w-full gap-3 fixed top-3 lg:right-3 right-0 pointer-events-none z-[1000]">
    {#each $toast as item (item.id)}
        <div
            animate:toastFlip
            in:toastFlyIn
            out:toastFlyOut
            class="lg:max-w-[40%] lg:w-fit w-[90%]"
        >
            <Content {item} />
        </div>
    {/each}
</div>
```

Now we can create the Content component

```svelte
file:lib/notifications/Content.svelte
<script>
    import { toast } from "$lib/notifications"
    import { tweened } from "svelte/motion"
    import { linear } from "svelte/easing"
    import { onMount } from "svelte"
    
    export let item

    let next = item.initial
    let prev = next

    const progress = tweened(item.initial, { duration: item.duration, easing: linear })

    function close() {
        toast.remove(item.id)
    }

    function autoclose() {
        if ($progress === 1 || $progress === 0) close()
    }

    $: if (next !== item.next) {
        next = item.next
        prev = $progress
        progress.set(next).then(autoclose)
    }

    onMount(() => {
        const d = (item.duration)
        const duration = d - d * (($progress - prev) / (next - prev))
        progress.set(next, { duration }).then(autoclose)
    })
</script>
<div class="border-r-[5px] border-blue-500 bg-gray-700 flex items-center justify-between lg:gap-20 gap-2 pt-2 pb-3.5 px-5 w-full shadow-lg relative pointer-events-auto rounded overflow-hidden" role="status">
    <div class="flex flex-col my-2">
        <p class="font-semibold text-sm uppercase">
            {item.type}
        </p>
        <p class="text-sm">{@html item.message}</p>
    </div>
    <!-- This is the close button. You can replace "x" with anything you like -->
    {#if item.dismissable}
        <button on:click={close}>
            x
        </button>
    {/if}
    <!-- This is the progress bar -->
    {#if item.duration}
        <span
            class="bg-blue-500 h-[5px] absolute rounded-[1px] bottom-0 left-0"
            style="width: {100 * $progress}%"
        />
    {/if}
</div>
```

<br>

# Exporting everything we need

We need to export our functions from the index.js file so we can access them across the site

```js
file:lib/notifications/index.js
export { default as Notification } from "./Container.svelte"
export { default as Content } from "./Content.svelte"
export { toastFlip, toastFlyIn, toastFlyOut } from "./animation.js"
export { toast } from "./stores.js"

...
```

Now we can create the helper functions (`notification.success(...)`) that we mentioned earlier


```js
file:lib/notifications/index.js
...

function show(
    { message = "Message not provided", duration = 5000, type = "default", dismissable = true } =
    { message: "Message not provided", duration: 5000, type: "default", dismissable: true } 
) {
    toast.add({ message, duration, type, dismssable })
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
```

# Add the toast container to our layout

Finally we can add our toast container component to our +layout file.

```svelte
file:src/routes/+layout.svelte
<script>
    import { Notifications } from "$lib/notifications"
</script>

<Notifications />

...
```

<br>

# Done

Just like that, your project should now have a dark mode toggle! [Demo]()