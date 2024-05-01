// import { SERVER_ENDPOINT } from '$env/static/private';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ url }) => {
	const itemId = url.searchParams.get('itemId');

	const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${itemId}.json`);
	const data = await res.json();
	if (!res.ok) {
		throw new Error(data.message);
	} else {
		return new Response(JSON.stringify(data), {
			headers: { 'content-type': 'application/json' }
		});
	}
};
