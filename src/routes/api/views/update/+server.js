import { db } from "$lib/database"

export async function POST({ request }) {
    const slug = await request.json()

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

    return new Response(undefined, {
		status: 303,
		headers: { location: "/" }
	})

}