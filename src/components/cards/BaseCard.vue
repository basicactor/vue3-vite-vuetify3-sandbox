<template>
  <v-card class="mx-auto" max-width="100%" :width="width">
    <v-card-text>
      <slot name="content" />
    </v-card-text>
    <v-card-actions>
      <slot name="actions" />
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { withDefaults, defineProps } from "vue"
type Props = {
  width: string | number
}

withDefaults(defineProps<Props>(), {
  width: "600",
})
</script>
