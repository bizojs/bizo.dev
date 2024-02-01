import { AUTH_SECRET } from "$env/static/private"
import { error } from "@sveltejs/kit"

export async function load({ params, fetch }) {
    const { slug } = params
    try {
        await import(`../../../posts/${slug}.md`)
        try {
            await fetch("/api/views/update", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${AUTH_SECRET}`
                },
                body: JSON.stringify(slug)
            })
        } catch (e) {
            console.error(`[ViewCountUpdate]: ${e.message} for /api/views/update (${slug})`)
        }
        return { success: true }
    } catch {
        throw error(404, `Could not find post "${slug}"`)
    }
}