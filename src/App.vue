<script setup lang="ts">
import { ref, onMounted, onBeforeMount } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

const messageId = ref('')
const orderId = ref('')
const items = ref<string[]>([])

onMounted(async () => {
  const params = new URLSearchParams(window.location.search)
  messageId.value = params.get('message_id') || ''
  orderId.value = params.get('order_id') || ''

  try {
    const url = new URL('https://test-telegram-bot-enn4.onrender.com/items')
    url.searchParams.append('order_id', orderId.value || '1')

    const res = await fetch(url.toString(), {
      method: 'GET',
    })

    const json = await res.json()
    items.value = json.data.items
  } catch (error) {
    console.log(error)
  }
})

onBeforeMount(() => {
  if (window.Telegram.WebApp.ready()) {
    window.Telegram.WebApp.requestFullscreen()
  }
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
  <div style="margin-top: 2em">
    <h2>🚀 Order details</h2>
    <p><strong>Message ID:</strong> {{ messageId }}</p>
    <p><strong>Order ID:</strong> {{ orderId }}</p>
    <p><strong>Items:</strong></p>
    <ul>
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>
  </div>
  <HelloWorld :messageId="messageId" :orderId="orderId" />
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
