<script setup>
import { ref , onMounted} from 'vue';
import Button from './Button.vue';

const tasks = ref(['task 1', 'task 2', 'task 3', 'task 4']);
const inputData = ref('');

const addData = (data) => {
  if (data) {
    tasks.value.push(data);
    saveTasksToLocalStorage();
    inputData.value = ''; // Clear input after adding
  }
};

const saveTasksToLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks.value));
};

const getTasksFromLocalStorage = () => {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    tasks.value = JSON.parse(storedTasks);
  }
}

const deleteData = (index) => {
  tasks.value.splice(index, 1);
};

onMounted(() => {
  getTasksFromLocalStorage();
})

</script>

<template>

    <div class="tittle">

      <h1 class="flex justify-center text-2xl mb-4 mt-5">Tasks</h1>

    </div>
          <ul class="w-full my-6 mx-2 grid grid-cols-2">
        <li
          class="flex justify-between items-center bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded mb-2"
          v-for="(task, index) in tasks"
          :key="task"
        >
          <span>{{ task }}</span>
          <button
            type="button"
            @click="deleteData(index)"
            class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded transition duration-300"
          >
            Delete
          </button>
        </li>
      </ul>
      
      <div class="w-full mb-6">
        <input
          type="text"
          v-model="inputData"
          placeholder="Add new task"
          class="border border-gray-300 rounded px-4 py-2 w-full mb-2"
        />
        <Button :bg="`bg-blue-600`" :hover="`hover:bg-blue-700`" :name="`Tambah Task`"
          type="button"
          @click="addData(inputData)"
        >       
        </Button>
      </div>
</template>