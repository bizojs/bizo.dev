---
title: Adding a dark mode toggle to your website with cookies
description: This guide will show you everthing you need to know about adding a dark mode toggle to your SvelteKit website with TailwindCSS using cookies.
date: '2024-1-28'
categories:
  - sveltekit
  - tailwindcss
published: true
sharable: true
---

## Table of contents

# Prerequisites

- A SvelteKit website with TailwindCSS integrated. Refer to [Adding TailwindCSS to your SvelteKit website](/blog/adding-tailwindcss-to-your-sveltekit-website) for details
- Setting "darkMode" to `class` in your Tailwind config
- Adding `class="dark"` to the HTML element in your app.html file
- Tailwind classes for both themes for example bg-primary-light and dark:bg-primary-dark

<br>

# Add the toggle logic

In this case, we are going to use our Nav component. We are also going to use a form with SvelteKits progressive enhancements so the backend can handle the cookies.

```svelte
file:lib/components/Nav.svelte
<script>
  import { enhance, applyAction } from "$app/forms"
  import { invalidateAll } from "$app/navigation"
  import { page } from "$app/stores"

  $: theme = $page.data.theme
  $: dark = theme === "dark"

  function toggleTheme() {
    document.documentElement.classList.toggle("dark")
  }
</script>

<nav class="flex items-center justify-between">
  <a href="/">Home</a>
  <form
    method="post"
    action="/?/setTheme"
    use:enhance={() => {
      return async({ result }) => {
        invalidateAll()
        if (result.data?.success) toggleTheme()
        await applyAction(result)
      }
    }}
  >
  	<button type="submit">
  		<input
            class="cursor-pointer pointer-events-none"
            type="checkbox"
            name="theme"
            bind:checked={dark}
        >
  	</button>
  </form>
</nav>
```

<br>

# Create the form action

We need to create the form action that the toggle is going to be using.

```js
file:src/routes/+page.server.js
export const actions = {
  setTheme: async ({ request, cookies }) => {
    const data = await request.formData()
    const toggle = data.get("theme")
    const theme = toggle === "on" ? "light" : "dark"
    cookies.set("color-scheme", theme, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 365
    })
    return { success: true }
  }
}
```

<br>

# Update our server hooks

Now we need to use `hooks.server.js` to fetch our cookie and return it to the app

```js
file:src/hooks.server.js
export const handle = async({ event, resolve }) => {
  const theme = event.cookies.get("color-scheme")
  const defaultTheme = "dark"
  if (!theme) {
    event.cookies.set("color-scheme", defaultTheme, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 365
    })
    event.locals.theme = defaultTheme
  } else {
    event.locals.theme = theme
  }
  return await resolve(event, {
    // Here we change the class for our HTML element.
    // We are doing this instead of using onMount in our layout to prevent flickering
    transformPageChunk: ({ html }) => {
      return html.replace(/class="([a-z]*)"/, `class="${theme === "dark" ? "dark" : ""}"`)
    }
  })
}
```

<br>

# Update our layout

We can use the `hooks.server.js` we created to get our "theme" data that we use in the Nav component.

```js
file:src/routes/+layout.server.js
export const load = async ({ locals }) => {
  return {
    theme: locals.theme
  }
}
```

# Done

Just like that, your project should now have a dark mode toggle! [View demo](https://demo.bizo.dev/theme-switcher)