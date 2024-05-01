<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<ul class="menu bg-base-100 menu-horizontal w-full flex-nowrap gap-2 overflow-auto">
	<li>
		<a href="/feed/new" class="btn btn-primary btn-outline">
			<Icon icon="ph:fire-fill" class="h-5 w-5" />

			<div>new</div>
			<!-- <span class="badge badge-sm">99+</span> -->
		</a>
	</li>

	<li>
		<a href="/feed/top" class="btn btn-primary btn-outline">
			<Icon icon="material-symbols:arrow-circle-up" class="h-5 w-5" />
			<div>top</div>
			<!-- <span class="badge badge-sm">99+</span> -->
		</a>
	</li>

	<li>
		<a href="/feed/best" class="btn btn-primary btn-outline">
			<Icon icon="material-symbols:favorite" class="h-5 w-5" />

			<div>best</div>
			<!-- <span class="badge badge-sm">99+</span> -->
		</a>
	</li>

	<li>
		<a href="/feed/ask" class="btn btn-primary btn-outline">
			<Icon icon="material-symbols-light:help-center-rounded" class="h-5 w-5" />

			<div>ask</div>
			<!-- <span class="badge badge-sm">99+</span> -->
		</a>
	</li>

	<li>
		<a href="/feed/show" class="btn btn-primary btn-outline">
			<Icon icon="material-symbols:ios-share" class="h-5 w-5" />
			<div>show</div>
			<!-- <span class="badge badge-sm">99+</span> -->
		</a>
	</li>

	<li>
		<a href="/feed/jobs" class="btn btn-primary btn-outline">
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
