<script setup lang="ts">
const props = defineProps({ messageId: String, orderId: String})

const CHAT_ID = '5000765136'
const URL = `https://test-telegram-bot-enn4.onrender.com/mark-done`;

const collectOrder = async () => {
  const messageData = {
    chat_id: CHAT_ID, // Chat ID where the message was sent
    message_id: props.messageId, // Message ID of the original message
    order_id: props.orderId, // Updated text
  };

  try {
    await fetch(URL, {
      method: 'POST',
      body: JSON.stringify(messageData),
      headers: { 'Content-Type': 'application/json' },
    })
    window.Telegram.WebApp.sendData(JSON.stringify(messageData))
    window.Telegram.WebApp.close()
  } catch (error) {
    alert(error || 'Something went wrong');
  }
}
</script>

<template>
  <div class="card">
    <button type="button" @click="collectOrder">Collect order</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
