---
title: Testing markdown styles
description: This blog post is for testing markdown styling.
date: '2023-8-18'
categories:
  - markdown
  - testing
  - css
published: false
sharable: false
---

# Markdown

## Autolink literals
www.example.com, https://example.com and contact@example.com

## Normal links using `[]()`
[example.com](https://example.com)

## Markdown styles

`Inline code` using `&#96;text&#96;`

__bold__ using `__` or **bold** using `**`

_italic_ using `_` or *italic* using `*`

___bold italic___ using `___` or ___bold italic___ using `***`

<span><u>underline</u> using <code>u</code> element</span>


> Testing markdown styles testing markdown styles testing markdown styles testing markdown styles testing markdown styles

## Footnote

A note[^1]

[^1]: Big note.

## Strikethrough

~~two~~ tildes (`~~text here~~`).

## Table

|  a  |  b  |   c   |  d  |  e  |  f  |  g  |  h  |  i  |  j  |  k  |  l  |  m  |  n  |  o  |  p  |  q  |  r  |  s  |  t  |  u  |
| :-: | :-: |  :-:  |  :-:  | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |  :-:  | :-: | :-: | :-: | :-: | :-: | :-: | :-: | :-: |
| hey | hey | hey | hey | hey | hey | hey | hey | hey | hey | hey | hey | hey | hey | hey | hey | hey | hey | hey | hey | hey |

# Tasklist

* [ ] to do
* [x] done

# Checkbox as html

<input type="checkbox">

# Unordered List

- Go to the store
- Buy fruit
    - Blueberries
    - Watermelon

# Ordered List

1. Go to the store
2. Buy fruit
    - Blueberries
    - Watermelon
  
# Codeblock with highlighting

```js
// routes/+layout.js

export const prerender = true

export async function load({ url }) {
	return {
		url: url.pathname
	}
}
```

![Rada](/projects/Rada.png)