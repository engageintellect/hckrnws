<script lang="ts">
	export let id: any;
	export let time: any;
	export let user: any;
	export let title: any;
	export let url: any;
	export let kids: any;
	export let descendants: any;
	export let score: any;
	import Icon from '@iconify/svelte';
	import { formatUnixTimestamp } from '$lib/utils';
</script>

<a href={title && id ? `/item/${id}` : `${url}`} target="">
	<div class="card bg-base-300">
		<div class="card-body relative p-5">
			<div class="">
				<div class="text-content mt-2 text-sm font-thin">
					{formatUnixTimestamp(time)}
				</div>
				<div class="mt-2 text-xl font-extrabold drop-shadow">{title}</div>
				<!-- <p class="text-primary text-sm">{user}</p> -->
				<div class="text-primary text-sm">
					@{user}
				</div>
				<div class="flex w-full items-center justify-between gap-2">
					<div class="flex items-center gap-2">
						{#if kids}
							<div class="badge badge-primary mt-5 flex items-center justify-between gap-2 p-3">
								<Icon icon="iconamoon:comment-dots-fill" class="h-5 w-5" />
								<div class="">{kids.length}</div>
							</div>
						{/if}

						{#if descendants}
							<div
								class="badge badge-primary badge-outline mt-5 flex items-center justify-between gap-2 p-3"
							>
								<Icon icon="typcn:flow-children" class="h-5 w-5" />
								<div class="">{descendants}</div>
							</div>
						{/if}
					</div>

					{#if score}
						<div
							class="badge badge-primary badge-outline mt-5 flex items-center justify-between gap-2 p-3"
						>
							<Icon icon="material-symbols:readiness-score-outline" class="h-5 w-5" />
							<div class="">{score}</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</a>
