<template>
  <BaseMenu>
    <template #list>
      <v-list-item @click="onEditClick">
        <v-list-item-title> 編集 </v-list-item-title>
      </v-list-item>
      <v-list-item @click="onCopyClick">
        <v-list-item-title> 複製 </v-list-item-title>
      </v-list-item>
      <slot />
      <v-list-item @click="onDeleteClick">
        <v-list-item-title class="red--text"> 削除 </v-list-item-title>
      </v-list-item>
    </template>
  </BaseMenu>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue"
import BaseMenu from "./BaseMenu.vue"

const props = defineProps<{ id: boolean }>()
const emit = defineEmits(["onEditClick", "onEditClick", "onDeleteClick"])

const onEditClick = () => {
  console.log("onEditClick", props.id)
  emit("onEditClick", props.id)
}
const onCopyClick = () => {
  console.log("onCopyClick", props.id)
  emit("onEditClick", props.id)
}
const onDeleteClick = () => {
  console.log("onDeleteClick", props.id)
  emit("onDeleteClick", props.id)
}
</script>
