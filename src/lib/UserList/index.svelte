<script>
	import { page } from '$app/stores';
	import UserPreview from './UserPreview.svelte';

	export let users;
</script>

{#if users.length === 0}
	<tr>
		<td colspan="3">No Users</td>
	</tr>
{:else}
	{#each users as user}
		<UserPreview {user} />
	{/each}
{/if}
