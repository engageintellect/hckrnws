<script lang="ts">
	import { onMount } from 'svelte';
	import { formatUnixTimestamp } from '$lib/utils';

	export let comment: any;
	export let depth: number = 0;

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

{#await children}
	{JSON.stringify(children)}
{/await}

<div class="card bg-base-300/50 snap-center" style="margin-left: {depth * 20}px">
	<div class="card-body break-words p-5">
		<div class="text-primary text-xs">
			{formatUnixTimestamp(comment.time)}
		</div>
		{@html comment.text}

		<a href={`/user/${comment.by}`} class="text-primary mt-2 text-sm">
			@{comment.by}
		</a>

		{#if children.length > 0}
			<div class="mt-2">
				{#each children as child}
					<div class="" style="margin-left: {depth * 20}px">
						<div class="card-body break-words p-5">
							<div class="text-primary text-xs">
								{formatUnixTimestamp(child.time)}
							</div>

							<div class="prose">
								{@html child.text}
							</div>

							<a href={`/user/${child.by}`} class="text-primary mt-2 text-sm">
								@{child.by}
							</a>
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
</style>
