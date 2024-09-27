<script setup>
import { defineModel } from 'vue'

const isVisible = defineModel('isVisible', { default: false })
</script>

<template>
  <VDialog v-model="isVisible" class="test" persistent />
</template>

<style>
.test {
  background-image: url('../assets/images/search_network.gif');
  background-size: cover;
  width: 286px;
  height: 179px;
}
</style>
