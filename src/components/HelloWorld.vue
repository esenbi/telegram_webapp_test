<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const TOKEN = '2200886806:AAH3u_h8aIikXiKbQxpnOUagEOYM559zBMg'
const CHAT_ID = '5000765136'

const messageId = ref<string | null>(null);

// Simulate receiving data from the Telegram WebApp
if (window.Telegram) {
  window.Telegram.WebApp.onEvent('mainButtonClicked', () => {
    // Here, you can send the message_id to the mini-app when the button is clicked
    window.Telegram.WebApp.sendData({ messageId });
  });
}

const collectOrder = async () => {
  // const tg = window.Telegram.WebApp;

  const telegramUrl = `https://api.telegram.org/bot${TOKEN}/editMessageText`;

  const messageData = {
    chat_id: CHAT_ID, // Chat ID where the message was sent
    message_id: messageId.value, // Message ID of the original message
    text: "Order collected!", // Updated text
  };

  await fetch(telegramUrl, {
    method: 'POST',
    body: JSON.stringify(messageData),
    headers: { 'Content-Type': 'application/json' },
  })

  const removeButtonData = {
    chat_id: CHAT_ID, // Chat ID
    message_id: messageId.value, // Original message ID
    reply_markup: JSON.stringify({
      inline_keyboard: [],
    }),
  };

  await fetch(telegramUrl, {
    method: 'POST',
    body: JSON.stringify(removeButtonData),
    headers: { 'Content-Type': 'application/json' },
  });

  // Close the mini-app after action is complete
  closeApp()
}

function closeApp() {
  if (window.Telegram?.WebApp?.close) {
    window.Telegram.WebApp.close()
  } else {
    console.warn('Cannot close: Telegram WebApp not available')
  }
}
</script>

<template>
<!--  <h1>{{ msg }}</h1>-->
  <p>MessageId: {{messageId}}</p>
  <div class="card">
    <button type="button" @click="collectOrder">Collect order</button>
<!--    <p>-->
<!--      Edit-->
<!--      <code>components/HelloWorld.vue</code> to test HMR-->
<!--    </p>-->
  </div>

<!--  <p>-->
<!--    Check out-->
<!--    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"-->
<!--      >create-vue</a-->
<!--    >, the official Vue + Vite starter-->
<!--  </p>-->
<!--  <p>-->
<!--    Learn more about IDE Support for Vue in the-->
<!--    <a-->
<!--      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"-->
<!--      target="_blank"-->
<!--      >Vue Docs Scaling up Guide</a-->
<!--    >.-->
<!--  </p>-->
<!--  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>-->
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
