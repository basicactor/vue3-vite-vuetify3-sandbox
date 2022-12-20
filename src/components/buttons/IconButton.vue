<template>
  <v-btn icon :color="color" absolute @click="() => $emit('click')">
    <v-icon>{{ iconName }} </v-icon>
  </v-btn>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from "vue"
type Props = {
  iconName: string
  color: string
}

withDefaults(defineProps<Props>(), {
  color: "primary",
})
</script>
