export const prerender = true

import * as config from "$lib/config"

export async function GET({ fetch, url }) {
    const req = await fetch("api/posts")
    const posts = await req.json()

    const headers = { "Content-Type": "application/xml" }

    const xml = `
        <rss xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
            <channel>
                <title>${config.title}</title>
                <description>${config.description}</description>
                <link>${url.origin}</link>
                <atom:link href="${url.href}" rel="self" type="application/rss+xml"/>
                ${posts
                    .map(
                        (post) => `
                        <item>
                            <title>${post.title}</title>
                            <description>${post.description}</description>
                            <link>${url.origin}/${post.slug}</link>
                            <guid isPermaLink="true">${url.origin}/blog/${post.slug}</guid>
                            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
                        </item>
                    `
                    )
                    .join("")}
            </channel>
        </rss>
    `.trim()

    return new Response(xml, { headers })
}