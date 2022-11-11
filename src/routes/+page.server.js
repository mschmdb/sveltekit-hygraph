import { GraphQLClient } from 'graphql-request'
import { API_URL, API_TOKEN } from '$env/static/private'
export const prerender = true
export const load = async () => {
	const hygraph = new GraphQLClient(API_URL, {
		headers: {
			Authorization: `Bearer ${API_TOKEN}`
		}
	})

	const { posts } = await hygraph.request(
		`query PostsIndex {
      posts {
        id
        slug
        title
        image {
          id
          url
        }
        content {
          text
        }
        publishedBy {
          id
          name
          picture
        }
}}`
	)

	return {
		posts
	}
}
