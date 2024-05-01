<script>
	import '../app.pcss';
	import Nav from '$lib/components/Nav.svelte';
	import FeedMenu from '$lib/components/FeedMenu.svelte';
	import { fade, slide } from 'svelte/transition';
</script>

<div>
	<Nav />

	<div class="mx-auto w-full max-w-2xl p-2">
		<div class="">
			<slot />
		</div>
	</div>
</div>
