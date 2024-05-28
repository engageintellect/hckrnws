<script lang="ts">
	import Icon from '@iconify/svelte';
	import { searchQuery } from '$lib/store';
	let filter: string;
	$: searchQuery.set(filter);

	const clearFilter = () => {
		filter = '';
	};
</script>

<div
	class="input input-bordered input-primary my-2 flex items-center gap-2 focus-within:outline-none"
>
	<input bind:value={filter} type="text" class="grow" placeholder="filter feed..." autofocus />
	<button on:click={clearFilter}>
		<Icon
			icon={`${$searchQuery ? 'mdi:close' : 'bi:search'}`}
			class="text-primary h-5 w-5 opacity-70"
		/>
	</button>
</div>
