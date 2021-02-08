<script>
	import Nav from "../components/Nav.svelte";
	import Footer from "../components/Footer.svelte";
	export let segment;
</script>

<div class="flex flex-col h-screen dark:bg-gray-600 dark:text-gray-300">
	<Nav {segment} />

	<main class="container max-w-4xl flex-grow mx-auto py-16">
		<slot />
	</main>

	<Footer />
</div>

<style lang="postcss">
	:global(a) {
		@apply underline;
	}
	:global(p) {
		@apply text-lg;
	}
</style>
