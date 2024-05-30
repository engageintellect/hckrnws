<script lang="ts">
	import { onMount } from 'svelte';
	import { formatUnixTimestamp, timeSince } from '$lib/utils';
	import Icon from '@iconify/svelte';

	export let comment: any;
	export let depth: number = 0;
	export let cardBg: boolean = true;
	export let cardPadding: boolean = true;

	let children: any[] = [];

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

	const getChildren = async () => {
		children = await Promise.all(comment.kids.map((kid: any) => fetchComments(kid)));
	};

	onMount(async () => {
		if (comment.kids) {
			getChildren();
		}
	});
</script>

<div
	class={`card snap-center bg-none ${cardBg ? 'bg-base-300/50' : 'bg-none'}`}
	style="margin-left: {depth * 2}px"
>
	<div class={`card-body break-words ${cardPadding ? 'p-5' : 'p-2'}`}>
		<div class="flex flex-col">
			<div class="text-primary text-xs font-bold">
				{timeSince(comment.time)}
			</div>

			<div class="text-base-content/50 text-xs">
				{formatUnixTimestamp(comment.time)}
			</div>
		</div>

		{@html comment.text}
		<a href={`/user/${comment.by}`} class="text-primary mt-2">
			@{comment.by}
		</a>

		{#if comment.kids}
			<div class="">
				{#each children as child}
					{#if child.text}
						<div class="border-base-100 flex items-start border-t">
							<div class="">
								<Icon icon="mdi:chevron-up" class="text-primary h-5 w-5" />
							</div>
							<div class="overflow-hidden">
								<div class="break-words">
									<svelte:self
										cardBg={false}
										cardPadding={false}
										comment={child}
										depth={depth + 1}
									/>
								</div>
							</div>
						</div>
					{/if}
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
</style>
