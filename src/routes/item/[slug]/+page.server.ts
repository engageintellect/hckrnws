import { error as kitError } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';


// Define a type for the error object if you expect a specific structure, such as an Error with a message property.


export const load: PageServerLoad = async ({ params }) => {
    // your fetch logic here
    const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${params.slug}.json`)
    const result = await res.json();

    if (!res.ok) {
        return kitError(500, {
            message: "Error fetching post IDs from Hacker News",
        });
    }


        return result;
}