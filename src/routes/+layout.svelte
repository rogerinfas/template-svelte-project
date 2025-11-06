<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { browser } from '$app/environment'
	import { QueryClient, QueryClientProvider } from '@tanstack/svelte-query'
	import { Toaster } from '@/components/ui/sonner';

	const queryClient = new QueryClient({
		defaultOptions: {
		queries: {
			enabled: browser,
		},
		},
	})
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Toaster />


<QueryClientProvider client={queryClient}>
	{@render children()}
</QueryClientProvider>
