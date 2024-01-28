export const handle = async({ event, resolve }) => {
    const theme = event.cookies.get("color-scheme")
    if (!theme) {
        event.cookies.set("color-scheme", "dark", {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 365 // 1 Year
        })
        event.locals.theme = "dark"
    } else {
        event.locals.theme = theme
    }

    return await resolve(event, {
        transformPageChunk: ({ html }) => {
            return html.replace(/class="([a-z]*)"/, `class="${theme === "dark" ? "dark" : ""}"`)
        }
    })
}