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

	const { project } = await hygraph.request(
		`query PostsIndex ($slug: String!) {
            project (where: {slug: $slug}) {
              title
			  jobtitle
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
		project
	}
}
