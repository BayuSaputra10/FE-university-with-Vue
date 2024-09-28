<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div class="text-blue-500 text-9xl font-bold">404</div>
      <h1 class="text-4xl font-semibold text-gray-800 mt-4">Oops! Page Not Found</h1>
      <p class="text-lg text-gray-600 mt-2 text-center">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <router-link
        to="/"
        class="mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
      >
        Go Back Home
      </router-link>
    </div>
  </template>