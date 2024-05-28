<script lang="ts">
	export let data;
	import Post from '$lib/components/Post.svelte';
	import { fade, slide } from 'svelte/transition';
	import SearchFilter from '$lib/SearchFilter.svelte';
	import { searchQuery } from '$lib/store';
</script>

<div in:slide={{ duration: 500 }} class="flex flex-col gap-2">
	{#each data.props.posts as post}
		{#if !$searchQuery || post.title.toLowerCase().includes($searchQuery.toLowerCase())}
			<Post
				time={post?.time}
				score={post?.score}
				id={post?.id}
				url={post?.url}
				title={post?.title}
				user={post?.by}
				kids={post?.kids}
				descendants={post?.descendants}
			/>
		{/if}
	{/each}
</div>
