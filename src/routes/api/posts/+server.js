import { json } from "@sveltejs/kit"
import { db } from "$lib/database"

async function getPosts() {
    let posts = []

    const paths = import.meta.glob("/src/posts/*.md", { eager: true })

    const postViews = await db.views.findMany({
        select: { slug: true, views: true },
    })

    for (const path in paths) {
        const file = paths[path]
        const slug = path.split("/").at(-1).replace(".md", "")
        
        if (file && typeof file === "object" && "metadata" in file && slug) {
            const metadata = file.metadata
            const post = {
                ...metadata,
                slug,
                views: postViews.filter(posts => posts.slug === slug)[0]?.views ?? 0
            }
            post.published && posts.push(post)
        }
    }

    posts = posts.sort((first, second) => 
        new Date(second.date).getTime() - new Date(first.date).getTime()
    )

    return posts
}

export async function GET() {
    const posts = await getPosts()
    return json(posts)
}