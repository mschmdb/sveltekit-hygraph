import { GraphQLClient } from 'graphql-request'
import { API_URL, API_TOKEN } from '$env/static/private'
import "../../../app.css";

export const prerender = true
/**
 * @param {any} params
 */

export const load = async ({ params }) => {
	const { slug } = params
	const hygraph = new GraphQLClient(API_URL, {
		headers: {
			Authorization: `Bearer ${API_TOKEN}`
		}
	})

	const { post } = await hygraph.request(
		`query PostsIndex ($slug: String!) {
            post (where: {slug: $slug}) {
              title
              content {
				text
              }
              image {
                url
              }
            }
        }`,
		{
			slug
		}
	)

	return {
		post
	}
}
