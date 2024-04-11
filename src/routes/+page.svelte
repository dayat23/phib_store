<script>
    import { page } from '$app/stores';
    import UserList from '$lib/UserList/index.svelte';

    /** @type {import('./$types').PageData} */
	export let data;
</script>

{#if $page.data.user}
  <div class="col-lg-8 mx-auto p-4 py-md-5">
    <table class="table">
        <thead>
          <tr>
            <th scope="col">PID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
            <UserList users={data.users} />
        </tbody>
    </table>
  </div>
{:else}
  <div class="col-lg-8 mx-auto p-4 py-md-5">
    <h1>Hello World!</h1>
  </div>
{/if}
