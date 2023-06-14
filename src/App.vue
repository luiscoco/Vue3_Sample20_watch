<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Message: {{ message }}</p>
    <button @click="increment">Increment Count</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useCountWatcher } from "./useCountWatcher";

const count = ref(0);
const message = ref("");

useCountWatcher(count, message);

function increment() {
  count.value++;
}
</script>
