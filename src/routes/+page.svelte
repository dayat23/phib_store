<script>
    import { dev } from '$app/environment';
    import UserList from '$lib/UserList/index.svelte';

    /** @type {import('./$types').PageData} */
	export let data;
</script>
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
