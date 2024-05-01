<script>
	import FeedMenu from '$lib/components/FeedMenu.svelte';
	import { fade, slide } from 'svelte/transition';
</script>

<div>
	<div class="sticky top-[64px] z-10 my-2">
		<FeedMenu />
	</div>

	<div class="">
		<slot />
	</div>
</div>
