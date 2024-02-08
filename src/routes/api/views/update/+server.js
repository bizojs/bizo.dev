import { AUTH_SECRET } from "$env/static/private"
import { json } from "@sveltejs/kit"
import { db } from "$lib/database"

export async function POST({ request, cookies }) {
    const slug = await request.json()
    const auth = request.headers.get("authorization")?.split(" ")?.pop()
    const cookieString = `post_${slug.split("-").slice(0, 3).join("_")}_${slug.split("-").at(-1)}`
    const cookie = cookies.get(cookieString)

    if (!auth || auth !== AUTH_SECRET) {
        return json({ success: false, message: "401: Unauthorized" }, { status: 401 })
    }

    if (cookie) {
        return json({ success: false }, { status: 200 })
    } else {
        cookies.set(cookieString, slug, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 365 // 1 Year
        })
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
        }, { status: 200 })
    }
}