<script lang="ts">
	import Comment from '$lib/components/Comment.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import { formatUnixTimestamp, timeSince } from '$lib/utils';

	export let data: PageData;

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

	if (!data.text && !data.kids) {
		window.open(data.url, '_blank');
	}

	function goBack(): void {
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
			<button on:click={goBack} class="group/backButton">
				<div class="md:hover:text-primary flex items-center gap-1">
					<Icon
						icon="material-symbols:arrow-back"
						class="h-5 w-5 transition-all duration-200 md:group-hover/backButton:-translate-x-1"
					/>
					<div>back</div>
				</div>
			</button>
		</div>
		<div class="mt-5 text-sm font-thin">
			<div class="text-primary font-bold">
				{timeSince(data.time)}
			</div>

			<div>
				{formatUnixTimestamp(data.time)}
			</div>
		</div>
		<div class="mt-2 text-4xl font-bold drop-shadow transition-all duration-300 lg:text-5xl">
			{data.title}
		</div>

		<div class="mt-2">
			<a class=" text-primary text-2xl font-bold" href={`/user/${data.by}`}>
				@{data.by}
			</a>
		</div>

		{#if data.text}
			<div class="card">
				<div
					class="card-body border-primary bg-base-300 my-5 rounded-lg border p-5 text-lg font-thin md:text-xl"
				>
					{@html data.text}
				</div>
			</div>
		{/if}

		{#if data.url}
			<a href={data.url} class="btn btn-primary group my-5">
				<div class="flex items-center gap-2">
					<div>read article</div>
					<Icon
						icon="mdi:arrow-right"
						class="h-5 w-5 transition-transform duration-300 md:group-hover:translate-x-1"
					/>
				</div>
			</a>
		{/if}
	</div>

	<div class="mt-5 flex items-center justify-between">
		<div class="text-primary text-3xl font-bold">comments:</div>

		<a
			href={`https://news.ycombinator.com/item?id=${data.id}`}
			class="btn btn-sm btn-primary group flex w-fit items-center gap-2"
		>
			<div>add comment</div>
			<div>
				<Icon
					icon="fluent:comment-add-12-filled"
					class="h-5 w-5 transition-transform duration-300 md:group-hover:scale-110 md:group-hover:scale-110"
				/>
			</div>
		</a>
	</div>

	<div class="my-2 flex snap-y snap-mandatory flex-col gap-2">
		{#if sortedComments.length > 0}
			{#each sortedComments as comment}
				<Comment {comment} depth={0} />
			{/each}
		{:else}
			<div class="flex items-center gap-2">
				<div class="loading loading-ring loading-md"></div>
				<div>loading comments...</div>
			</div>
		{/if}
	</div>
</div>
