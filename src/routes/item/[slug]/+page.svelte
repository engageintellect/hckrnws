<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import Post from '$lib/components/Post.svelte';
	import { fade, slide } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Icon from '@iconify/svelte';
	import { formatUnixTimestamp } from '$lib/utils';

	let comments: any[] = [];

	$: sortedComments = comments.sort((a, b) => b.time - a.time);

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

	function goBack(): void {
		// Check if it's safe to go back
		if (window.history.length > 1) {
			window.history.back();
		} else {
			console.log('No history to go back to.');
		}
	}
</script>

<div class="">
	<div class="">
		<div class="">
			<button on:click={goBack} class="group/backButton sticky">
				<div class="flex items-center gap-1 md:hover:text-primary">
					<Icon
						icon="material-symbols:arrow-back"
						class="h-5 w-5 transition-all duration-200 md:group-hover/backButton:-translate-x-1"
					/>
					<div>back</div>
				</div>
			</button>
		</div>
		<div class="mt-5 text-sm font-thin">
			{formatUnixTimestamp(data.time)}
		</div>
		<div class="mt-2 text-5xl font-bold drop-shadow">
			{data.title}
		</div>

		<div class="mt-2">
			<a class=" text-xl font-thin text-primary" href={`/user/${data.by}`}>
				@{data.by}
			</a>
		</div>

		{#if data.text}
			<div class="card">
				<div
					class="card-body my-5 rounded-lg border border-primary bg-base-300 p-5 text-lg font-thin md:text-xl"
				>
					{@html data.text}
				</div>
			</div>
		{/if}

		{#if data.url}
			<a href={data.url} class="btn btn-primary my-5">
				<div class="flex items-center gap-2">
					<Icon icon="material-symbols:post" class="h-5 w-5" />
					<div>read article</div>
				</div>
			</a>
		{/if}
	</div>

	<div class="flex items-center justify-between">
		<div class="mt-5 text-xl font-bold text-primary">comments:</div>

		<a
			href={`https://news.ycombinator.com/item?id=${data.id}`}
			class="btn btn-primary mt-2 flex w-fit items-center gap-2"
		>
			<div>add comment</div>
			<div>
				<Icon icon="fluent:comment-add-12-filled" class="h-5 w-5" />
			</div>
		</a>
	</div>

	<div class="my-2 flex snap-y snap-mandatory flex-col gap-2">
		{#if sortedComments.length > 0}
			{#each comments as comment}
				{#if comment.text}
					<div class="card snap-center bg-base-300/50">
						<div class="card-body break-words p-5">
							<div class="text-xs text-primary">
								{formatUnixTimestamp(comment.time)}
							</div>
							{@html comment.text}

							<a href={`/user/${comment.by}`} class="mt-2 text-sm text-primary">
								@{comment.by}
							</a>
						</div>
					</div>
				{/if}
			{/each}
		{:else}
			<div class="flex items-center gap-2">
				<div class="loading loading-ring loading-md"></div>
				<div>loading comments...</div>
			</div>
		{/if}
	</div>
</div>
