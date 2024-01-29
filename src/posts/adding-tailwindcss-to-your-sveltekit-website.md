---
title: Adding TailwindCSS to your SvelteKit website
description: This step-by-step guide will show you everthing you need to know about adding TailwindCSS to your website.
date: '2023-8-18'
categories:
  - sveltekit
  - tailwindcss
published: true
sharable: true
---

## Table of contents

# Lets get started

## Installing packages

To begin, we need to install a few packages:

```shell
# Terminal
npm i -D tailwindcss postcss autoprefixer svelte-preprocess
```

<br>

## Initialize Tailwind

And then we need to initialize the tailwindcss config file:

```shell
# Terminal
npx tailwindcss init tailwind.config.cjs -p
```

<br>

## SvelteKit preprocess

Now you need to edit SvelteKit's preprocess configuration in `svelte.config.js`

```js
// svelte.config.js
import preprocess from "svelte-preprocess"

const config = {
  preprocess: [
    preprocess({
      postcss: true
    })
  ]
}
```

<br>

## Set up Tailwind Config

Then you need to set up some things for tailwindcss, starting with the config file:

```js
// tailwind.config.cjs
/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"]
  ...
}
```

<br>

## Tailwind components and utilities

Now we can set up tailwind components and utilities. Create a `app.css` file in your `src` directory and paste the following code in there:

```css
/* src/app.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

<br>

## Import CSS file

Then you can import the css file you just made in your Svelte layout:

```svelte
<!-- src/routes/+layout.svelte -->
<script>
  import "../app.css"
</script>

<slot />
```

# Done

Just like that, your project now supports TailwindCSS!