<script lang="ts">
	import Icon from '@iconify/svelte';
	import { searchQuery } from '$lib/store';
	import SearchFilter from '$lib/SearchFilter.svelte';

	import { page } from '$app/stores';

	// Subscribe to the page store to get access to URL changes
	let currentUrl = '';
	$: currentUrl = $page.url.pathname; // This will reactively update whenever the URL changes

	$: if (currentUrl.includes('some-condition')) {
		// Perform actions based on the URL change
		console.log('URL has changed:', currentUrl);
	}
</script>

<!-- <div class="text-5xl font-bold text-primary">
	{currentUrl.replace('/feed/', '')}
</div> -->

<ul
	class="menu menu-horizontal bg-base-100 sticky top-[64px] z-10 w-full flex-nowrap gap-2 overflow-auto"
>
	<li>
		<a href="/feed/new" class={`group ${currentUrl === '/feed/new' ? 'btn btn-primary' : 'btn'}`}>
			<Icon
				icon="ph:fire-fill"
				class="h-5 w-5 transition-transform duration-300 md:group-hover:scale-110"
			/>

			<div>new</div>
			<!-- <span class="badge badge-sm">99+</span> -->
		</a>
	</li>

	<li>
		<a href="/feed/top" class={`group ${currentUrl === '/feed/top' ? 'btn btn-primary' : 'btn'}`}>
			<Icon
				icon="material-symbols:arrow-circle-up"
				class="h-5 w-5 transition-transform duration-300 md:group-hover:scale-110"
			/>
			<div>top</div>
			<!-- <span class="badge badge-sm">99+</span> -->
		</a>
	</li>

	<li>
		<a href="/feed/best" class={`group ${currentUrl === '/feed/best' ? 'btn btn-primary' : 'btn'}`}>
			<Icon
				icon="material-symbols:favorite"
				class="h-5 w-5 transition-transform duration-300 md:group-hover:scale-110"
			/>

			<div>best</div>
			<!-- <span class="badge badge-sm">99+</span> -->
		</a>
	</li>

	<li>
		<a href="/feed/ask" class={`group ${currentUrl === '/feed/ask' ? 'btn btn-primary' : 'btn'}`}>
			<Icon
				icon="material-symbols-light:help-center-rounded"
				class="h-5 w-5 transition-transform duration-300 md:group-hover:scale-110"
			/>

			<div>ask</div>
			<!-- <span class="badge badge-sm">99+</span> -->
		</a>
	</li>

	<li>
		<a href="/feed/show" class={`group ${currentUrl === '/feed/show' ? 'btn btn-primary' : 'btn'}`}>
			<Icon
				icon="material-symbols:ios-share"
				class="h-5 w-5 transition-transform duration-300 md:group-hover:scale-110"
			/>
			<div>show</div>
			<!-- <span class="badge badge-sm">99+</span> -->
		</a>
	</li>

	<li>
		<a href="/feed/jobs" class={`group ${currentUrl === '/feed/jobs' ? 'btn btn-primary' : 'btn'}`}>
			<Icon
				icon="material-symbols:work-sharp"
				class="h-5 w-5 transition-transform duration-300 md:group-hover:scale-110"
			/>

			<div>jobs</div>
			<!-- <span class="badge badge-sm">99+</span> -->
		</a>
	</li>
</ul>

<SearchFilter />

<style>
	/* This targets the scrollbar pseudo elements in Webkit browsers */
	::-webkit-scrollbar {
		display: none; /* This hides the scrollbar */
	}
</style>
