<template>
  <div class="navbar bg-primary text-primary-content">
    <div class="navbar-start">
      <NuxtLink to="/" class="btn btn-ghost text-xl">
        Nuxt Template
      </NuxtLink>
    </div>
    <div class="navbar-end">
        <NuxtLink to="/" class="btn btn-ghost">
            About
        </NuxtLink>
        <NuxtLink to="/" class="btn btn-ghost">
            Contact
        </NuxtLink>
        <NuxtLink to="/" class="btn btn-ghost">
            Login
        </NuxtLink>
        <AppThemeToggle />
    </div>
  </div>
</template>
