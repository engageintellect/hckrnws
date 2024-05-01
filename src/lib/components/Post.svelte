<script lang="ts">
	export let id: any;
	export let user: any;
	export let title: any;
	export let url: any;
	export let kids: any;
	export let descendants: any;
	import Icon from '@iconify/svelte';
</script>

<a href={`/item/${id}`} target="">
	<div class="card bg-base-300">
		<div class="card-body relative p-5">
			<div class="">
				<div class="text-lg font-extrabold">{title}</div>
				<p class="text-primary text-sm">{user}</p>

				<div class="flex w-full items-center gap-2">
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
			</div>
		</div>
	</div>
</a>
