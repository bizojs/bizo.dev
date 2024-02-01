import { AUTH_SECRET } from "$env/static/private"
import { json } from "@sveltejs/kit"
import { db } from "$lib/database"

export async function POST({ request }) {
    const slug = await request.json()
    const auth = request.headers.get("authorization")?.split(" ")?.pop()

    if (!auth || auth !== AUTH_SECRET) {
        return json({ success: false, message: "401: Unauthorized" }, { status: 401 })
    }
    
    const pageData = await db.views.findUnique({
        where: { slug }
    })

    if (!pageData) {
        await db.views.create({ data: { slug, views: 1 } })
    } else {
        await db.views.update({
            where: { slug },
            data : { views: { increment: 1 } }
        })
    }

    return json({
        success: true,
        message: `Updated view count for ${slug}: ${pageData?.views ? pageData.views + 1 : 1}`
    }, {
        status: 200
    })

}