<template>
  <IconButton
    iconName="mdi-close"
    :color="delBtn ? 'red' : 'black'"
    @click="() => $emit('click')"
  />
</template>

<script setup lang="ts">
import { defineProps } from "vue"
import IconButton from "./IconButton.vue"

defineProps({
  delBtn: Boolean,
})
</script>
