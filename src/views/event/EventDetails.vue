<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  event: {
    required: true,
  },
})
</script>

<template>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>
