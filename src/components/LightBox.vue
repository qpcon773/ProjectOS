<script setup>
defineProps({
  focus: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["closeEvent"])
</script>

<template>
  <div class="lightBox" :class="{ focus: focus }">
    <div class="lightContent">
      <a href="javascript:;" class="close" @click="$emit('closeEvent')"></a>
      <slot name="content"></slot>
    </div>
  </div>
</template>
