<template>
  <v-btn
    depressed
    :color="color"
    :width="width"
    :type="type"
    @click="() => $emit('click')"
  >
    <slot />
  </v-btn>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from "vue"
type Props = {
  type?: string
  width?: string
  color?: string
}

withDefaults(defineProps<Props>(), {
  type: "button",
  width: "100%",
  color: "primary",
})
</script>
