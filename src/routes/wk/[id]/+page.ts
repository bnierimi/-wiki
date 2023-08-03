import { error } from '@sveltejs/kit'

export async function load({ params }: any) {
  let paramsId: string = params.id.replaceAll("-", " ")   // Replace every `-` in `id` with " " to get the title back
//   const firstLetter: string = paramsId.charAt(0).toUpperCase()             // Convert the first letter to uppercase
//   const paramsName: string = `${firstLetter}${paramsId.slice(1)}`
	try {
		const post = await import(`../../../posts/${paramsId}.md`)

		return {
			content: post.default,
			meta: post.metadata,
			paramsId: params.id
		}
	} catch (e) {
		throw error(404, `Could not find "${paramsId}"`)
	}
}