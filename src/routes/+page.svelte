<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<div class="mt-10 flex flex-col items-center justify-start">
	<h1 class="text-7xl font-extrabold lg:text-9xl">
		<div class="flex items-center gap-2">
			<div class="drop-shadow">hckrnws</div>
		</div>
	</h1>
	<p>
		Visit <a class="text-primary underline" href="https://github.com/engageintellect/hckrnws"
			>repo</a
		>
		to read the documentation
	</p>

	<div class="mt-2 flex items-center justify-center gap-2">
		<a
			href="/feed/new"
			class="btn btn-primary btn-wide group my-5 flex items-center gap-2 shadow transition-all duration-300 hover:shadow-lg"
		>
			<div class="text-lg">go to feeds</div>
			<Icon
				icon="material-symbols:rocket"
				class="h-7 w-7 transition-transform duration-300 md:group-hover:translate-x-3 md:group-hover:rotate-90"
			/>
		</a>
	</div>
</div>

<div class="mt-10 flex flex-col gap-2 md:flex-row">
	<div class="card bg-base-200 shadow">
		<div class="card-body">
			<strong class="text-primary">Hacker News (HN)</strong> A social news website focusing on computer
			science and entrepreneurship. It is highly popular among technology and startup circles. The platform
			is run by Y Combinator, a well-known startup accelerator that has helped launch companies like
			Airbnb, Dropbox, and Reddit.
		</div>
	</div>
	<div class="card bg-base-200 shadow">
		<div class="card-body">
			<strong class="text-primary">hckrnws</strong>
			A modern UI for Hacker News. It is built using SvelteKit, TailwindCSS, and TypeScript. The project
			is open-source and available on GitHub. The app is designed to be fast, responsive, and accessible.
			It is also a great example of how to build a modern web app using the latest web technologies.
		</div>
	</div>
</div>
