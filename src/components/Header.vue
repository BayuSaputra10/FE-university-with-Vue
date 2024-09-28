<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="bg-slate-800 p-4 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo -->
      <a href="#" class="text-white text-2xl font-bold">MyLogo</a>

      <!-- Navigation Links for Desktop -->
      <ul class="hidden md:flex space-x-6">
        <li><RouterLink to="/" class="text-white hover:text-gray-300">Home</RouterLink></li>
        <li><RouterLink to="/Tasks" class="text-white hover:text-gray-300">Tasks</RouterLink></li>
        <li><RouterLink to="/Mahasiswa" class="text-white hover:text-gray-300">Mahasiswa</RouterLink></li>
        <li><RouterLink to="/Employees" class="text-white hover:text-gray-300">Employees</RouterLink></li>
      </ul>

      <!-- Mobile Menu Button -->
      <button class="md:hidden text-white focus:outline-none" @click="toggleMenu">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden mt-2">
      <ul class="space-y-2 bg-slate-700 p-4 rounded-md">
        <li><a href="#" class="block text-white hover:text-gray-300">Home</a></li>
        <li><a href="#" class="block text-white hover:text-gray-300">Tasks</a></li>
        <li><a href="#" class="block text-white hover:text-gray-300">Mahasiswa</a></li>
        <li><a href="#" class="block text-white hover:text-gray-300">Employees</a></li>
      </ul>
    </div>
  </nav>

</template>