<script>
	import { page } from '$app/stores';
  import { enhance } from '$app/forms';
</script>

<header class="p-3 text-bg-dark">
  <div class="container">
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a href="/" class="d-flex align-items-center col-12 col-lg-auto me-lg-auto mb-2 mb-lg-0 text-white text-decoration-none">
        <span class="fs-4">PHIB Store</span>
      </a>
      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="/" class="nav-link px-2 {$page.url.pathname === '/'? 'text-secondary' : 'text-white'}">Home</a></li>
        {#if $page.data.user}
          <form use:enhance method="POST" action="?/logout">
            <button class="btn btn-danger">Logout</button>
          </form>
        {:else}
          <li><a href="/login" class="btn btn-outline-light me-2">Login</a></li>
          <li><a href="/signup" class="btn btn-warning">Sign-up</a></li>
        {/if}
      </ul>
    </div>
  </div>
</header>