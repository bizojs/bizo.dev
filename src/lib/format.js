const baseUrl = "https://bizo.dev"

export function x({ title, url }) {
    return "https://x.com/intent/tweet?text=" + encodeURIComponent(`${title} - ${baseUrl + url}`)
}

export function twitter({ title, url }) {
    return "https://twitter.com/intent/tweet?text=" + encodeURIComponent(`${title} - ${baseUrl + url}`)
}

export function linkedin({ url }) {
    return "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(baseUrl + url)
}

export function reddit({ title, url }) {
    return "https://www.reddit.com/submit?title=" + encodeURIComponent(title) + "&text=" + encodeURIComponent(`Check out this blog post: ${baseUrl + url}`)
}