export async function load({ fetch }) {
    const req = await fetch("api/posts")
    const posts = await req.json()
    return { posts }
}