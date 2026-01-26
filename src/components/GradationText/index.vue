<template>
  <component
    :is="tag"
    :class="['m-gradation-text', customClass]"
    :style="textStyle"
  >
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <template v-else>
      {{ content }}
    </template>
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { GradationTextProps } from "./types";

defineOptions({
  name: "MGradationText",
});

const props = withDefaults(defineProps<GradationTextProps>(), {
  content: "",
  fromColor: "#409eff",
  toColor: "#67c23a",
  direction: "to right",
  colors: undefined,
  tag: "span",
  customClass: "",
});

// 计算渐变样式
const textStyle = computed(() => {
  const style: Record<string, string> = {
    display: "inline-block",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

  // 如果提供了多个颜色，使用 colors 数组
  if (props.colors && props.colors.length > 0) {
    const colorStops = props.colors
      .map((color, index) => {
        const percentage = (index / (props.colors!.length - 1)) * 100;
        return `${color} ${percentage}%`;
      })
      .join(", ");
    style.backgroundImage = `linear-gradient(${props.direction}, ${colorStops})`;
  } else {
    // 使用 fromColor 和 toColor
    style.backgroundImage = `linear-gradient(${props.direction}, ${props.fromColor}, ${props.toColor})`;
  }

  return style;
});
</script>

<style lang="scss" scoped>
.m-gradation-text {
  @apply inline-block;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

