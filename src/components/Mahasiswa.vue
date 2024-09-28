<script setup>
import { ref, onMounted } from 'vue';
import Button from './Button.vue';
// State

const mahasiswa = ref([]);
const newMahasiswa = ref({ name: '', email: '' });
const editMode = ref(false); // State untuk mengaktifkan mode edit
const editMahasiswa = ref({ id: null, name: '', email: '' }); // State untuk menyimpan data mahasiswa yang sedang diedit

// Functions

const deleteMahasiswa = (id) => {
  mahasiswa.value = mahasiswa.value.filter((mhs) => mhs.id !== id);
  saveMahasiswaToLocalStorage(); // Save to local storage after deletion
};

const addMahasiswa = () => {
  if (newMahasiswa.value.name && newMahasiswa.value.email) {
    const newId = mahasiswa.value.length ? mahasiswa.value[mahasiswa.value.length - 1].id + 1 : 1;
    mahasiswa.value.push({ id: newId, ...newMahasiswa.value });
    newMahasiswa.value = { name: '', email: '' }; // Clear form after adding
    saveMahasiswaToLocalStorage(); // Save to local storage after adding
  }
};

// Function to start editing a mahasiswa
const startEditMahasiswa = (mhs) => {
  editMode.value = true;
  editMahasiswa.value = { ...mhs }; // Clone the data to avoid direct mutation
};

// Function to update a mahasiswa
const updateMahasiswa = () => {
  const index = mahasiswa.value.findIndex((mhs) => mhs.id === editMahasiswa.value.id);
  if (index !== -1) {
    mahasiswa.value[index] = { ...editMahasiswa.value }; // Update the data
    saveMahasiswaToLocalStorage(); // Save to local storage after updating
    cancelEdit(); // Exit edit mode
  }
};

// Function to cancel editing
const cancelEdit = () => {
  editMode.value = false;
  editMahasiswa.value = { id: null, name: '', email: '' }; // Clear edit data
};

// Functions for Local Storage
const saveMahasiswaToLocalStorage = () => {
  localStorage.setItem('mahasiswa', JSON.stringify(mahasiswa.value));
};

const loadMahasiswaFromLocalStorage = () => {
  const storedMahasiswa = localStorage.getItem('mahasiswa');
  if (storedMahasiswa) {
    mahasiswa.value = JSON.parse(storedMahasiswa);
  }
};

// Lifecycle Hooks
onMounted(() => {
  loadMahasiswaFromLocalStorage(); // Load mahasiswa from local storage on mount
});
</script>

<template>
      <!-- Form untuk menambahkan mahasiswa baru -->
      <div class="w-full mb-6" v-if="!editMode">
        <h2 class="text-2xl font-bold mb-4">Add New Mahasiswa</h2>
        <input
          type="text"
          v-model="newMahasiswa.name"
          placeholder="Name"
          class="border border-gray-300 rounded px-4 py-2 w-full mb-2"
        />
        <input
          type="email"
          v-model="newMahasiswa.email"
          placeholder="Email"
          class="border border-gray-300 rounded px-4 py-2 w-full mb-2"
        />
        <Button :bg="`bg-green-600`" :hover="`hover:bg-green-700`" :name= "`Tambah Mahasiswa`" 
          type="button"
          @click="addMahasiswa"
        >
          Add Mahasiswa
        </Button>
      </div>

      <!-- Form untuk memperbarui data mahasiswa -->
      <div class="w-full mb-6" v-if="editMode">
        <h2 class="text-2xl font-bold mb-4">Update Mahasiswa</h2>
        <input
          type="text"
          v-model="editMahasiswa.name"
          placeholder="Name"
          class="border border-gray-300 rounded px-4 py-2 w-full mb-2"
        />
        <input
          type="email"
          v-model="editMahasiswa.email"
          placeholder="Email"
          class="border border-gray-300 rounded px-4 py-2 w-full mb-2"
        />
        <Button :bg="`bg-blue-600`" :hover="`hover:bg-blue-700`" :name= "`Update Mahasiswa`"
          type="button"
          @click="updateMahasiswa"
        >
          Update Mahasiswa
        </Button>
        <Button :bg="`bg-gray-600`" :hover="`hover:bg-gray-700`" :name= "`Batal Edit`"
          type="button"
          @click="cancelEdit"
        >
          Cancel
        </Button>
      </div>

      <!-- List Mahasiswa -->
      <ol class="mb-6 grid grid-cols-2 mx-2">
        <li
          v-for="mhs in mahasiswa"
          :key="mhs.id"
          class="flex justify-between items-center bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded mb-2"
        >
          {{ mhs.name }} - {{ mhs.email }}
          <div>
            <button
              type="button"
              @click="startEditMahasiswa(mhs)"
              class="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded transition duration-300 mr-2"
            >
              Edit
            </button>
            <button
              type="button"
              @click="deleteMahasiswa(mhs.id)"
              class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition duration-300"
            >
              Delete
            </button>
          </div>
        </li>
      </ol>
</template>