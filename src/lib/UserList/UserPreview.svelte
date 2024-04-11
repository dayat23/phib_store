<script>
	import { enhance } from '$app/forms';

	export let user;
</script>

<tr>
	<th scope="row">{user.pid}</th>
	<td>{user.first_name} {user.last_name}</td>
	<td>{user.email}</td>
</tr>
