<script setup>
import { ref } from 'vue'
import LoadingDialog from '@/components/LoadingDialog.vue'

const isLoadingVisible = ref(false)
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
    <VCol>
      <VSelect label="개발 브랜치" />
    </VCol>
    <VCol>
      <VSelect label="비교 브랜치" />
    </VCol>
    <VCol>
      <VFileInput type="file" webkitdirectory label="폴더 업로드" />
    </VCol>
    <VBtn>비교 분석</VBtn>
  </div>
  <LoadingDialog v-model:is-visible="isLoadingVisible" />
</template>
<style src="../assets/styles/setting.css"></style>
