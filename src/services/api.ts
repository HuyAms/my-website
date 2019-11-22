export const fetchBlogs = () => {
	const blogEndPoint =
		'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/shot-code'
	return fetch(blogEndPoint)
		.then(res => res.json())
		.then(data => data.items)
}
