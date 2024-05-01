import { error as kitError } from '@sveltejs/kit';

// Define a type for the error object if you expect a specific structure, such as an Error with a message property.
type FetchError = {
    message: string;
    code?: number;  // Optional error code
}

export const load = async () => {
    // your fetch logic here
    const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
    const postIds = await res.json();

    if (!res.ok) {
        return kitError(500, {
            message: "Error fetching post IDs from Hacker News",
        });
    }

    const postsPromises = postIds.slice(0, 100).map(async (postId:number) => {
        const postRes = await fetch(`https://hacker-news.firebaseio.com/v0/item/${postId}.json`);
        if (!postRes.ok) {
            throw new Error('Failed to fetch post data');
        }
        return postRes.json();
    });

    try {
        const posts = await Promise.all(postsPromises);
        return {
            props: { posts }
        };
    } catch (error) {
        // Here you can assert the error's type to FetchError
        const typedError = error as FetchError;
        return kitError(500, {
            message: `Error fetching post details: ${typedError.message}`,
        });
    }
};

