<script setup>
import { defineProps } from 'vue';

const ButtonSet = defineProps({
    bg: {
        type: String,
        default: 'bg-blue-500'
    },
    name: {
        type: String,
        default: 'Button'
    },
    hover: {
        type: String,
        default: 'hover:bg-blue-700'
    },
    format:{
        type: String,
        default: 'text-white font-bold py-2 px-4 rounded flex justify-center transition duration-300'
    }
})
</script>

<template>
    <button :class="`${ButtonSet.bg} ${ButtonSet.hover} ${ButtonSet.format}`">{{ButtonSet.name}}</button>
</template>