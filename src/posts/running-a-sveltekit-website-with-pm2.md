---
title: Running a SvelteKit website with PM2
description: This guide will show you how you can host your SvelteKit website on ubuntu using PM2.
date: '2023-8-18'
editedAt: '2023-8-25'
categories:
  - sveltekit
  - pm2
published: true
sharable: true
---

## Table of contents


# Getting started

To begin, you will need to install the `adapter-node` package from sveltejs to use the node adapter

```shell
file:Terminal
npm i @sveltejs/adapter-node
```

<br>

# Updating your svelte config

Once you've installed that package, you will want to navigate to your `svelte.config.js` file in the root of your directory and update your config to use the new node adapter:

```js
file:svelte.config.js
// import adapter from "@sveltejs/adapter-auto"
import adapter from "@sveltejs/adapter-node"

/** @type {import("@sveltejs/kit").Config} */
const config = {
  kit: {
    // adapter: adapter()
		adapter: adapter({
			out: "build"
		})
	}
}
```

## Brotli compression

Optionally, you can have your app compressed using [brotli](https://en.wikipedia.org/wiki/Brotli) compression. A few benefits of using brotli compression are:

- Improving your website loading time
- Your build files will be smaller

<br>

To use brotli compression, simply just add `precompress: true` to your adapter config.


<br>

# Building your project

You can build your project files for production with the following command (may require sudo):
- `npm run build`

> You may be required to run as sudo here otherwise it could fail to build
  
Now your project should begin building!

# Running your project with pm2

Make sure you have PM2 installed on your machine (`npm i -g pm2`), then you can run the command:

```shell
file:Terminal
PORT=<port> pm2 start build/index.js --name <name>
```

Replacing `<port>` and `<name>` with the your desired port and name for pm2. For example it should look like this:

```shell
file:Terminal
PORT=3008 pm2 start build/index.js --name my-website
```

<br>

> **Note #1**<br>
> you may need to add `ORIGIN=https://domain.com` to the start script if your app uses form actions. The command would look like this:

```shell
file:Terminal
PORT=<port> ORIGIN=<url> pm2 start build/index.js --name <name>
```
<br>

> **Note #2**<br>
> If you are using Windows to host your bot, `PORT=XXXX ORIGIN=XXX` will not work. Instead you can use $:env in powershell:

```shell
file:Powershell
$env:PORT=XXXX $env:ORIGIN="https://domain.com" pm2 start build/index.js --name <name>
```

## Done!

Your project should now be running with PM2 and look something like this when you run `pm2 ls`:

| id  |    name    | namespace | version | ...  | status | ... |
| :-: |    :-:     |    :-:    |   :-:   |  :-: |   :-:  | :-: |
|  0  | my-website |  default  |  1.0.0  | ...  | online | ... |