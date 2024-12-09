<script setup>
import { useRouter } from 'vue-router';
import { inject } from 'vue';

const props = defineProps({
  event: {
    required: true,
  },
})
const router = useRouter()
const GStore = inject('GStore')

const register = () => {
  GStore.flashMessage = `You are successfully registered for ${props.event.title}`
  setTimeout(() => {
    GStore.flashMessage = ''
  }, 3000)
  router.push({
    name: 'EventDetails',
    id: props.event.id
  })
}
</script>

<template>
  <p>Register for the event</p>
  <button @click="register">Register Me!</button>
</template>
