---
title: Improving SEO results on your SvelteKit blog
description: Get some tips and tricks to enhance your blogs visibility and ranking in search engines.
date: '2023-8-19'
categories:
  - sveltekit
  - seo
published: true
sharable: true
---

## Table of contents

## Understand the magic of Meta tags

Meta tags are snippets of code in your HTML that provide essential information about your web page to search engines. They help search engines understand the content of your page and determine how it should be indexed and displayed in search results. We can optimize this in SvelteKit using the built in `<svelte:head>` tag to dynamically add these - hassle-free!

## Craft a Compelling Title Tag

The title tag (`<title>`) is perhaps the most critical meta tag. It appears in search results as the clickable headline for your blog post. Make it concise, engaging, and relevant to the content of your article.

## Master the Meta Description

The meta description (`<meta name="description">`) is a brief summary of your blog post's content. While it doesn't directly impact rankings, a well-crafted meta description can entice users to click through to your blog post. Keep it under 150 characters and make it compelling.

<br>

With these steps, you're well on your way to optimizing your SvelteKit blog's SEO through meta tags. Remember that SEO is an ongoing process, so consistently creating high-quality, relevant content will continue to boost your blog's visibility.

<br>

Below you will find a snippet of code that you can use which explains what each meta tag is used for:

```svelte
<svelte:head>
    <!-- The headline for your blog post in search results -->
	<title>Blog post title</title>

    <!-- This is the page type, which in our case, article would fit best -->
	<meta property="og:type" content="article" />

    <!-- This is the title for OpenGraph - find details here: https://ogp.me/ -->
	<meta property="og:title" content="title_here" />

    <!-- This is the description for OpenGraph - find details above -->
	<meta name="og:description" content="description_here" />

    <!-- This is, as mentioned above, the meta description -->
	<meta name="description" content="description_here" />

    <!-- This tells your browser when this blog post was published -->
    <!-- This should be formatted like so: 2023-08-19T23:00:00.000Z -->
	<meta name="article:published_time" content="2023-08-19T23:00:00.000Z">

    <!-- If your blog post contains tags, you should add each tag as its own article:tag -->
    <!-- in SvelteKit you can do this using {#each x as y}...{/each} -->
    <meta name="article:tag" content="tag_here">
</svelte:head>
```

<br>

Here is an example of my blog rankings when analyzed with [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/):

![Lighthouse](/blog/sveltekit-seo-for-blog-posts/screenshot_1.png)

<br>

I hope this guide was able to help in understanding how the basics of SEO works for blogs. Happy optimizing!