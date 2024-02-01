import { error } from "@sveltejs/kit"
export async function load({ params, fetch }) {
    const { slug } = params
    try {
        const post = await import(`../../../posts/${slug}.md`)

        if (!post?.metadata?.published) {
            throw error(404, `Could not find post "${slug}"`)
        }

        try {
            await fetch("/api/views/update", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(slug)
            })
        } catch (e) {
            console.error(`[ViewCountUpdate]: ${e.message} for /api/views/update (${slug})`)
        }
        
        return {
            content: post.default,
            meta: post.metadata
        }
    } catch {
        throw error(404, `Could not find post "${slug}"`)
    }
}