<script>
    import { enhance } from '$app/forms';

    /** @type {import('./$types').ActionData} */
    export let form;

    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
	<title>Signup - PHIB Store</title>
</svelte:head>

{#if form?.error}
    <p class="error">{form.error}</p>
{/if}

<div class="col-lg-3 mx-auto p-4 py-md-5">
    <form use:enhance class="needs-validation" method="POST">
        <div class="mb-3">
            <label for="first_name" class="form-label">First Name</label>
            <input type="text" name="first_name" class="form-control" id="first_name" aria-describedby="emailHelp" required={true}>
        </div>
        <div class="mb-3">
            <label for="last_name" class="form-label">Last Name</label>
            <input type="text" name="last_name" class="form-control" id="last_name" aria-describedby="emailHelp" required={true}>
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" required={true}>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" name="password" class="form-control" id="exampleInputPassword1" required={true}>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</div>