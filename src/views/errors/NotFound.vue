<script setup>
defineProps({
  resource: {
    type: String,
    required: true,
    default: 'page'
  }
})
</script>

<template>
  <h1>Oops!</h1>
  <h3>The {{ resource }} you're looking for is not here.</h3>
  <RouterLink :to="{ name: 'EventList' }">Back to the home page</RouterLink>
</template>
