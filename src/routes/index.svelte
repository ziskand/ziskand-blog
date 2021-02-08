<script>
	import { slide } from "svelte/transition";
	let show = false;
</script>

<svelte:head>
	<title>zisy on</title>
</svelte:head>

<div class="space-y-8">
	<div>
		<h2 class="text-8xl font-semibold">My Personal Blog</h2>
		<p class="text-5xl mt-4">
			<strong>(work</strong>
			in
			<strong>progress...)</strong>
		</p>
	</div>
	{#if show}
		<div transition:slide|local class="text-center p-20">
			<h2 class="text-7xl mb-10 uppercase font-bold">Great success!</h2>
			<img class="min-w-full" src="great_success.jpeg" alt="wovaweewa!" />
		</div>
	{/if}
	<button class="btn" on:click={() => (show = !show)}>sucess button</button>
</div>

<div class="space-y-4 mt-5">
	<p class="text-md">
		(This blog is implemented with <strong
			>Sapper, PostCSS & Tailwind CSS</strong
		>
	</p>
	<p>
		inspiration and guidance recieved from amazing resource of <strong
			>https://codechips.me</strong
		>)
	</p>
</div>

<style lang="postcss">
	.btn {
		@apply bg-red-500 uppercase tracking-wide font-semibold text-4xl px-4 py-3 shadow-lg rounded;
	}
	.btn:hover {
		@apply bg-red-600;
	}
</style>
