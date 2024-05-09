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
			<button on:click={goBack} class="sticky">
				<div class="md:hover:text-primary flex items-center gap-1">
					<Icon icon="material-symbols:arrow-back" class="h-5 w-5" />
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

		<div class="text-primary mt-2 text-sm">
			@{data.by}
		</div>

		{#if data.text}
			<div class="my-5 font-thin italic md:text-lg lg:text-xl">
				{@html data.text}
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

	<div class="text-primary mt-10 text-xl font-bold">comments:</div>

	<div class="my-2 flex snap-y snap-mandatory flex-col gap-2">
		{#if sortedComments.length > 0}
			{#each comments as comment}
				{#if comment.text}
					<div class="card bg-base-300 snap-center">
						<div class="card-body break-words p-5">
							<div class="text-primary/70 text-xs">
								{formatUnixTimestamp(comment.time)}
							</div>
							{@html comment.text}

							<div class="text-primary mt-2 text-sm">
								@{comment.by}
							</div>
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
