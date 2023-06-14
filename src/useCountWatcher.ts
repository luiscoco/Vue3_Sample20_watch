import { ref, watch } from "vue";

export function useCountWatcher(count: any, message: any) {
  watch(count, (newCount, oldCount) => {
    message.value = `Count changed from ${oldCount} to ${newCount}`;
    console.log("Message changed:", message.value);
  });
}
