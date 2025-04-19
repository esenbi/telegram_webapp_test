<script setup lang="ts">

const props = defineProps({ messageId: String, orderId: String})

const CHAT_ID = '5000765136'

// const messageId = ref<string | null>(null);
// const callbackQuery = ref<string | null>(null);

// Simulate receiving data from the Telegram WebApp
// if (window.Telegram) {
//   window.Telegram.WebApp.onEvent('mainButtonClicked', () => {
//     // Here, you can send the message_id to the mini-app when the button is clicked
//     window.Telegram.WebApp.sendData({ messageId });
//   });
// }

const collectOrder = async () => {
  // const tg = window.Telegram.WebApp;

  const URL = `http://localhost:3000/mark-done`;

  const messageData = {
    chat_id: CHAT_ID, // Chat ID where the message was sent
    message_id: props.messageId, // Message ID of the original message
    order_id: props.orderId, // Updated text
  };

  await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(messageData),
    headers: { 'Content-Type': 'application/json' },
  })

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

// onMounted(() => {
//   window.Telegram.WebApp.callbackQuery = callbackQuery;
// })
</script>

<template>
<!--  <h1>{{ msg }}</h1>-->
<!--  <p>MessageId: {{messageId}}</p>-->
<!--  <p>callbackQuery: {{JSON.stringify(callbackQuery)}}</p>-->
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
