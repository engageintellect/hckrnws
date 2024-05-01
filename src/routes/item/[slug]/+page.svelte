<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import Post from '$lib/components/Post.svelte';
	import { fade, slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let comments: any[] = [];

	const fetchComments = async (kid: any) => {
		const res = await fetch(`/api/getCommentData/?itemId=${kid}`);
		if (res.ok) {
			const json = await res.json();
			return json;
		} else {
			console.error('Failed to fetch comments:', res.statusText);
			return [];
		}
	};

	onMount(async () => {
		comments = await Promise.all(data.kids.map((kid: any) => fetchComments(kid)));
	});

	console.log('this is data', data);

	if (!data.text && !data.kids) {
		window.open(data.url, '_blank');
	}
</script>

<div class=" px-2">
	<div class="">
		<div>
			{data.date}
		</div>
		<div class="mt-5 text-3xl font-bold">
			{data.title}
		</div>

		<div class="text-primary text-sm">
			{data.by}
		</div>

		{#if data.url}
			<a href={data.url} class="btn btn-primary my-5 w-full sm:w-fit">Read Article</a>
		{/if}

		{#if data.text}
			<div class="my-5">
				{@html data.text}
			</div>
		{/if}
	</div>

	<div class="text-xl font-bold">Comments:</div>

	<div class="my-2 flex flex-col gap-2">
		{#each comments as comment}
			{#if comment.text}
				<div class="card bg-base-300">
					<div class="card-body break-words p-5">
						{@html comment.text}

						<div class="text-primary font-thin">
							{comment.by}
						</div>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>
