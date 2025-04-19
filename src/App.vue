<script setup lang="ts">
import { ref, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const userId = ref('')
const orderId = ref('')
const items = ref<string[]>([])

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  userId.value = params.get('user_id') || ''
  orderId.value = params.get('order_id') || ''
  const itemsString = params.get('items') || ''
  items.value = itemsString.split(',').map(item => item.trim()).filter(Boolean)
})
</script>

<template>
<!--  <div>-->
<!--    <a href="https://vite.dev" target="_blank">-->
<!--      <img src="/vite.svg" class="logo" alt="Vite logo" />-->
<!--    </a>-->
<!--    <a href="https://vuejs.org/" target="_blank">-->
<!--      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />-->
<!--    </a>-->
<!--  </div>-->
  <HelloWorld msg="Vite + Vue" />
  <div style="margin-top: 2em">
    <h2>🚀 Received Data from Telegram</h2>
    <p><strong>User ID:</strong> {{ userId }}</p>
    <p><strong>Order ID:</strong> {{ orderId }}</p>
    <p><strong>Items:</strong></p>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
