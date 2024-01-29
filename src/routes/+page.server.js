export const prerender = false

export const actions = {

    setTheme: async ({ request, cookies }) => {
        const data = await request.formData()
        const toggle = data.get("theme")
        const dark = toggle === "on" ? "light" : "dark"
        cookies.set("color-scheme", dark, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
            maxAge: 60 * 60 * 24 * 365 // 1 Year
        })
        return { success: true }
    }

}