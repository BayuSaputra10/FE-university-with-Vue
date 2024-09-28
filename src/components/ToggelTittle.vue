<script setup>
import { ref } from 'vue';

defineProps({
    name: ({ type: String, default: 'Ujang Kesbor' })
})
// const name = ref("John Doe");
const status = ref('active');


const toggleStatus = () => {
  if (status.value === 'active') {
    status.value = 'pending';
  } else if (status.value === 'pending') {
    status.value = 'inactive';
  } else if (status.value === 'inactive') {
    status.value = 'active';
  }
};

</script>

<template>
      <h1 class="text-3xl font-bold mb-4">{{ name }}</h1>
      <h3
        :class="status === 'active' ? 'bg-green-200 text-green-800' : status === 'pending' ? 'bg-yellow-200 text-yellow-800' : 'bg-red-200 text-red-800'"
        class="py-1 px-3 rounded-full text-sm font-semibold mb-4"
      >
        {{ status }}
      </h3>
      <button
        @click="toggleStatus"
        class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6 transition duration-300"
      >
        Toggle Status
      </button>

</template>