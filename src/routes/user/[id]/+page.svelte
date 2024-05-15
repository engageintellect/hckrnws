<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	import UserSubmitted from '$lib/components/UserSubmitted.svelte';
	import Icon from '@iconify/svelte';
	import { formatUnixTimestamp } from '$lib/utils';

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

		<div class="card bg-base-300">
			<div class="card-body p-5">
				<div class="">
					<div>
						<div class="text-5xl font-bold drop-shadow">
							{data.user.id}
						</div>

						<div class="mt-2 text-xs text-primary">
							{formatUnixTimestamp(data.user.created)}
						</div>
					</div>

					<div class="mt-5">
						<div class="text-base-content">Karma:</div>

						<div class="text-5xl font-bold text-primary">
							{data.user.karma}
						</div>
					</div>
				</div>
			</div>
		</div>

		{#if data.user.about}
			<div class="mx-2 mt-5 text-2xl font-bold text-primary">about</div>
			<div class="card">
				<div
					class="card-body rounded-lg border border-primary bg-base-300 p-5 text-lg font-thin md:text-xl"
				>
					<div class="break-all">
						{@html data.user.about}
					</div>
				</div>
			</div>
		{/if}
	</div>

	<div class="mx-2 mt-5 text-2xl font-bold text-primary">submitted</div>

	<div class="my-2 flex snap-y snap-mandatory flex-col gap-2">
		{#each data.posts as post}
			{#if post.title || post.url}
				<UserSubmitted
					id={post.id}
					time={post.time}
					user={post.by}
					title={post.title}
					url={post.url}
					kids={post.kids}
					descendants={post.descendants}
					score={post.score}
				/>
			{/if}
		{/each}
	</div>
</div>
