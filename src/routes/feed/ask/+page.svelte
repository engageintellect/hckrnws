<script lang="ts">
	export let data;
	import Post from '$lib/components/Post.svelte';
	import { fade, slide } from 'svelte/transition';
</script>

<!-- {JSON.stringify(data)} -->

<div in:slide={{ duration: 500 }} class="flex flex-col gap-2">
	{#each data.props.posts as post}
		<!-- {#if post.url} -->
		<Post
			score={post.score}
			url={`/item/${post.id}`}
			title={post.title}
			user={post.by}
			kids={post.kids}
			descendants={post.descendants}
			id={post.id}
		/>
		<!-- {/if} -->
	{/each}
</div>
