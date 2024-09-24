import axios from 'axios'

// 기본 Axios 인스턴스 설정
const api = axios.create({
  baseURL: 'http://localhost:8080/v1',
})

// GET 요청 함수
export const $apiGet = (url, params = {}) => {
  return api
    .get(url, { params })
    .then(response => response.data)
    .catch(error => {
      throw error
    })
}

// POST 요청 함수
export const $apiPost = (url, data = {}) => {
  return api
    .post(url, data)
    .then(response => response.data)
    .catch(error => {
      throw error
    })
}
