import { error } from "@sveltejs/kit"

export async function load({ params }) {
    const { slug } = params
    try {
        const post = await import(`../../../posts/${slug}.md`)

        if (!post?.metadata?.published) {
            throw error(404, `Could not find post "${slug}"`)
        }

        return {
            content: post.default,
            meta: post.metadata
        }
    } catch {
        throw error(404, `Could not find post "${slug}"`)
    }
}