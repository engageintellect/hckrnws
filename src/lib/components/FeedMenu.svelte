<script lang="ts">
	import Icon from '@iconify/svelte';

	import { page } from '$app/stores';

	// Subscribe to the page store to get access to URL changes
	let currentUrl = '';
	$: currentUrl = $page.url.pathname; // This will reactively update whenever the URL changes

	$: if (currentUrl.includes('some-condition')) {
		// Perform actions based on the URL change
		console.log('URL has changed:', currentUrl);
	}
</script>

<!-- <div>
	Current URL is: {currentUrl}
</div> -->

<ul class="menu bg-base-100 menu-horizontal w-full flex-nowrap gap-2 overflow-auto">
	<li>
		<a href="/feed/new" class={currentUrl === '/feed/new' ? 'btn btn-primary' : 'btn'}>
			<Icon icon="ph:fire-fill" class="h-5 w-5" />

			<div>new</div>
			<!-- <span class="badge badge-sm">99+</span> -->
		</a>
	</li>

	<li>
		<a href="/feed/top" class={currentUrl === '/feed/top' ? 'btn btn-primary' : 'btn'}>
			<Icon icon="material-symbols:arrow-circle-up" class="h-5 w-5" />
			<div>top</div>
			<!-- <span class="badge badge-sm">99+</span> -->
		</a>
	</li>

	<li>
		<a href="/feed/best" class={currentUrl === '/feed/best' ? 'btn btn-primary' : 'btn'}>
			<Icon icon="material-symbols:favorite" class="h-5 w-5" />

			<div>best</div>
			<!-- <span class="badge badge-sm">99+</span> -->
		</a>
	</li>

	<li>
		<a href="/feed/ask" class={currentUrl === '/feed/ask' ? 'btn btn-primary' : 'btn'}>
			<Icon icon="material-symbols-light:help-center-rounded" class="h-5 w-5" />

			<div>ask</div>
			<!-- <span class="badge badge-sm">99+</span> -->
		</a>
	</li>

	<li>
		<a href="/feed/show" class={currentUrl === '/feed/show' ? 'btn btn-primary' : 'btn'}>
			<Icon icon="material-symbols:ios-share" class="h-5 w-5" />
			<div>show</div>
			<!-- <span class="badge badge-sm">99+</span> -->
		</a>
	</li>

	<li>
		<a href="/feed/jobs" class={currentUrl === '/feed/jobs' ? 'btn btn-primary' : 'btn'}>
			<Icon icon="material-symbols:work-sharp" class="h-5 w-5" />

			<div>jobs</div>
			<!-- <span class="badge badge-sm">99+</span> -->
		</a>
	</li>
</ul>

<style>
	/* This targets the scrollbar pseudo elements in Webkit browsers */
	::-webkit-scrollbar {
		display: none; /* This hides the scrollbar */
	}
</style>
