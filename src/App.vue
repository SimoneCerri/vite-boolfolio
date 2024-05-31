<script>

export default
  {
    name: 'App',
  }
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#">Portfolio</a>
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavId">
          <ul class="navbar-nav me-auto mt-2 mt-lg-0">
            <li class="nav-item">
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/projects">Projects</RouterLink>
              <RouterLink to="/about">About</RouterLink>
              <RouterLink to="/contacts">Contacts</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
  <footer>Footer</footer>
</template>

<style></style>
