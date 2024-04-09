<script>
	import { page, navigating } from '$app/stores';
	import Header from './Header.svelte';
	import PreloadingIndicator from './PreloadingIndicator.svelte';
	// import { onMount } from 'svelte';
	// onMount(async () => {
	// 	await import('bootstrap/dist/css/bootstrap.min.css')
	// 	await import('bootstrap/dist/js/bootstrap.bundle.min.js')
	// });
</script>

{#if $navigating}
	<PreloadingIndicator />
{/if}

<main>
	<Header />
	<slot/>
</main>
