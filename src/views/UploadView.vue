<script setup>
import { ref } from 'vue'
import LoadingDialog from '@/components/LoadingDialog.vue'
import { useRouter } from 'vue-router'

const isLoadingVisible = ref(false)
const router = useRouter()
const showLoading = () => {
  isLoadingVisible.value = false
  router.push('/login')
}
</script>
<template>
  <div class="btn-header">
    <button id="hidden-btn" class="btn-top hidden"></button>
    <button id="resize-btn" class="btn-top resize"></button>
    <button id="close-btn" class="btn-top close"></button>
  </div>
  <div class="container">
    <p>
      환영합니다. 다뷰어 분석기입니다. <br />가족의 건강과 평안을 기원드립니다.
    </p>
  </div>
  <div class="container">
    <div class="source-container">
      <div class="icon source-icon"></div>
      <select id="sourceBranch"></select>
    </div>
    <br />
    <div class="target-container">
      <div class="icon target-icon"></div>
      <select id="targetBranch"></select>
    </div>
    <div class="button-container">
      <button id="runReview" class="btn-review" @click="showLoading"></button>
    </div>
  </div>
  <LoadingDialog v-model:is-visible="isLoadingVisible" />
</template>
<style src="../assets/styles/setting.css"></style>
