import { json } from "@sveltejs/kit"
import { db } from "$lib/database"

export async function GET() {
    let views = await db.views.findMany({
        select: {
            slug: true,
            views: true
        }
    })
    return json(views)
}