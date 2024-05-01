<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<ul class="menu bg-base-200 menu-horizontal rounded-box w-full flex-nowrap overflow-auto">
	<li>
		<a href="/new">
			<Icon icon="ph:fire-fill" class="h-5 w-5" />

			<div>new</div>
			<!-- <span class="badge badge-sm">99+</span> -->
		</a>
	</li>

	<li>
		<a href="/top">
			<Icon icon="material-symbols:arrow-circle-up" class="h-5 w-5" />
			<div>top</div>
			<!-- <span class="badge badge-sm">99+</span> -->
		</a>
	</li>

	<li>
		<a href="/best">
			<Icon icon="material-symbols:favorite" class="h-5 w-5" />

			<div>best</div>
			<!-- <span class="badge badge-sm">99+</span> -->
		</a>
	</li>

	<li>
		<a href="/ask">
			<Icon icon="material-symbols-light:help-center-rounded" class="h-5 w-5" />

			<div>ask</div>
			<!-- <span class="badge badge-sm">99+</span> -->
		</a>
	</li>

	<li>
		<a href="/show">
			<Icon icon="material-symbols:ios-share" class="h-5 w-5" />
			<div>show</div>
			<!-- <span class="badge badge-sm">99+</span> -->
		</a>
	</li>

	<li>
		<a href="/jobs">
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
