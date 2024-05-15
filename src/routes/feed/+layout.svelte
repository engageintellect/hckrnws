<script>
	import FeedMenu from '$lib/components/FeedMenu.svelte';
	import { fade, slide } from 'svelte/transition';
</script>

<div>
	<FeedMenu />

	<div class="">
		<slot />
	</div>
</div>
