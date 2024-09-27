<script setup>
import { ref } from 'vue'
import { $apiPost } from '@/utils/api'
import { useRouter } from 'vue-router'

const router = useRouter()

const id = ref('')
const password = ref('')

const login = async () => {
  const data = {
    userId: id.value,
    password: password.value,
  }

  await $apiPost('/user/login', data)
    .then(res => {
      if (res.code !== 200) {
        alert('아이디를 확인해주세요.(kingmj, jhpark)')
        return
      }
      router.push('/upload')
    })
    .catch(err => alert(err.message))
}
</script>

<template>
  <VTextField v-model="id" label="아이디" />
  <VTextField v-model="password" label="비밀번호" />
  <VBtn @click="login">로그인</VBtn>
</template>
