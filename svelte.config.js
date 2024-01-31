import adapter from "@sveltejs/adapter-node"
import preprocess from "svelte-preprocess"

import { mdsvex, escapeSvelte } from "mdsvex"
import { getHighlighter } from "shiki"
import { fileURLToPath } from "url"
import { dirname } from "path"

import remarkUnwrapImages from "remark-unwrap-images"
import rehypeSlug from "rehype-slug"
import remarkToc from "remark-toc"
import remarkGfm from "remark-gfm"

/** @type {import("mdsvex").MdsvexOptions} */
const mdsvexOptions = {
	extensions: [".md"],
	highlight: {
		highlighter: async (code, lang = "text") => {
			const highlighter = await getHighlighter({
				themes: ["poimandres", "one-dark-pro"],
				langs: ["shell", "javascript", "css", "html", "svelte", "text"]
			})
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: "poimandres" }))
			return `{@html \`${html}\`}`
		}
	},
	remarkPlugins: [
		remarkUnwrapImages,
		remarkGfm,
		[remarkToc, { tight: true }]
	],
	rehypePlugins: [
		rehypeSlug
	],
	layout: {
		_: dirname(fileURLToPath(import.meta.url)) + '/src/mdsvex.svelte'
	}
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".md"],
	kit: {
		adapter: adapter({
			out: "build",
			precompress: true
		})
	},
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexOptions)
	],
	compilerOptions: {
		customElement: true
	}
}

export default config
