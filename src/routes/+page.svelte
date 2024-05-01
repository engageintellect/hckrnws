<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import Icon from '@iconify/svelte';

	onMount(() => {
		// goto('/new');
	});
</script>

<div class="mt-10 flex flex-col items-center justify-start">
	<h1 class="text-7xl font-extrabold">hckrnws</h1>
	<p>
		Visit <a class="text-primary underline" href="https://github.com/engageintellect/hckrnws"
			>repo</a
		>
		to read the documentation
	</p>

	<div class="flex items-center justify-center gap-2">
		<a href="/feed/new" class="btn btn-primary my-5 flex items-center gap-2">
			<Icon icon="material-symbols:dynamic-feed" class="h-7 w-7" />
			<div class="">go to posts</div>
		</a>
	</div>
</div>
