---
title: Levelling up your components with Event Dispatchers
description: Today we will learn how to use SvelteKit's Event Dispatchers to handle data in your components
date: '2024-2-01'
categories:
  - sveltekit
published: true
sharable: true
---

# Table of contents

# Getting started
First off, of course, you will need a SvelteKit project. You can create one with the following command:

```
file:Terminal
npm create svelte@latest

```

<br>

# Creating the component

For this example, we will be making a dialog that will ask the user what their favourite color is.

```svelte
file:lib/components/Dialog.svelte
<script>
  import { createEventDispatcher } from "svelte"
  const dispatch = createEventDispatcher()

  $: input = ""

  export let title
  export let message

  function submit() {
    dispatch("complete" {
      response: input
    })
  }

  function cancel() {
    dispatch("cancel")
  }
</script>

<div class="dialog-container">
  <div class="dialog-box">
    <div class="dialog-title">
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
    <input type="text" bind:value={input} placeholder="Your answer" required/>
    <div class="buttons">
      <button on:click={cancel}>Cancel</button>
      <button on:click={submit}>Submit</button>
    </div>
  </div>
</div>
```

# Setting up the component

Now that the component has been created, we can start by importing it into our file

```svelte
file:src/routes/+page.svelte
<script>
  import Dialog from "$lib/components/Dialog.svelte"
</script>
```

Now we can set up the function that will handle our custom "complete" and "cancel" events

```svelte
file:src/routes/+page.svelte
<script>
  ...
  function handleComplete(e) {
    // e.detail is the data we sent from our component
    const { response } = e.detail
    alert(`Your favorite color is: ${response}!`)
  }
</script>
```

Now lets set up a variable and function to allow us to toggle the display the dialog

```svelte
file:src/routes/+page.svelte
<script>
  ...
  $: dialogOpen = false

  function toggleDialog() {
    dialogopen = !dialogOpen
  }
</script>
```

Okay now we can add the Dialog component and handle it's visibility using the "dialogOpen" variable we just created. We can also create a button to open the dialog.

```svelte
file:src/routes/+page.svelte
...

<button on:click={toggleDialog}>Answer question</button>

<!-- on:complete and on:cancel are the events that gets dispatched from our component! -->
{#if dialogOpen}
  <Dialog
    title="Question!"
    message="What's your favorite color?"
    on:complete={handleComplete}
    on:cancel={toggleDialog}
  />
{/if}
```

# Double check!

All in all, your code should look something like this:

```svelte
file:src/routes/+page.svelte
<script>
  import Dialog from "$lib/components/Dialog.svelte"

  $: dialogOpen = false

  function handleComplete(e) {
    const { response } = e.detail
    alert(`Your favorite color is: ${response}!`)
  }

  function toggleDialog() {
    dialogopen = !dialogOpen
  }
</script>

<button on:click={toggleDialog}>Answer question</button>

{#if dialogOpen}
  <Dialog
    title="Question!"
    message="What's your favorite color?"
    on:complete={handleComplete}
    on:cancel={toggleDialog}
  />
{/if}
```

# Done!

You now have a dialog component that can accept user inputs! This is a very basic example of what can be accomplished with Event Dispatchers. You can view an example [here](https://demo.bizo.dev/event-dispatcher)