import { error } from '@sveltejs/kit'
export const load = async () => {

	const res = await fetch('https://jsonplaceholder.typicode.com/todos/1') 
	const data = await res.json()

	if (!res.ok) {
		return(error(
			500, {
				message: "error hitting /routes/+page.server.ts API",

			}

		))
	} else {
		return data
	}

}




