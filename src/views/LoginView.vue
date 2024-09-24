<script setup>
import { ref } from 'vue'
import { $apiPost } from '@/utils/api'

const testText = ref('아직 로그인 전')

const login = async () => {
  await $apiPost('/user/login')
    .then(res => (testText.value = `로그인 ${res.message}`))
    .catch(err => (testText.value = err))
}
</script>

<template>
  <VTextField label="아이디" />
  <VTextField label="비밀번호" />
  <VBtn @click="login">로그인</VBtn>
  <VCardText> {{ testText }}</VCardText>
</template>
