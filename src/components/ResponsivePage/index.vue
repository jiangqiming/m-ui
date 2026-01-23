<template>
  <div
    ref="containerRef"
    :class="['m-responsive-page', { 'm-responsive-page--fullscreen': fullscreen }]"
    :style="containerStyle"
  >
    <div
      ref="contentRef"
      :class="['m-responsive-page__content', { 'm-responsive-page__content--scaled': enableScale && scale > 0 }]"
      :style="contentStyle"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from "vue";
import { useWindowSize } from "@vueuse/core";
import type { ResponsivePageProps } from "./types";

defineOptions({
  name: "MResponsivePage",
});

const props = withDefaults(defineProps<ResponsivePageProps>(), {
  width: "100%",
  height: "100%",
  minWidth: undefined,
  minHeight: undefined,
  maxWidth: undefined,
  maxHeight: undefined,
  fullscreen: false,
  backgroundColor: undefined,
  padding: undefined,
  breakpoints: () => ({
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1920,
  }),
  enableScale: false,
  baseWidth: 1920,
  baseHeight: 1080,
  scaleMode: "fit",
});

const containerRef = ref<HTMLDivElement | null>(null);
const { width: windowWidth, height: windowHeight } = useWindowSize();
const scale = ref(1);

// 计算容器样式
const containerStyle = computed(() => {
  const style: Record<string, string> = {};

  if (props.fullscreen) {
    style.width = "100vw";
    style.height = "100vh";
  } else {
    if (typeof props.width === "number") {
      style.width = `${props.width}px`;
    } else {
      style.width = props.width;
    }

    if (typeof props.height === "number") {
      style.height = `${props.height}px`;
    } else {
      style.height = props.height;
    }
  }

  if (props.minWidth !== undefined) {
    style.minWidth = typeof props.minWidth === "number" ? `${props.minWidth}px` : props.minWidth;
  }

  if (props.minHeight !== undefined) {
    style.minHeight = typeof props.minHeight === "number" ? `${props.minHeight}px` : props.minHeight;
  }

  if (props.maxWidth !== undefined) {
    style.maxWidth = typeof props.maxWidth === "number" ? `${props.maxWidth}px` : props.maxWidth;
  }

  if (props.maxHeight !== undefined) {
    style.maxHeight = typeof props.maxHeight === "number" ? `${props.maxHeight}px` : props.maxHeight;
  }

  if (props.backgroundColor) {
    style.backgroundColor = props.backgroundColor;
  }

  if (props.padding !== undefined) {
    style.padding = typeof props.padding === "number" ? `${props.padding}px` : props.padding;
  }

  return style;
});

// 计算内容样式
const contentStyle = computed(() => {
  const style: Record<string, string> = {};

  if (props.enableScale && scale.value > 0) {
    style.transform = `scale(${scale.value})`;
    style.transformOrigin = "top left";
    
    // 根据缩放模式调整宽度和高度
    if (props.scaleMode === "width" || props.scaleMode === "both" || props.scaleMode === "fit") {
      style.width = `${props.baseWidth}px`;
    }
    
    if (props.scaleMode === "height" || props.scaleMode === "both" || props.scaleMode === "fit") {
      style.height = `${props.baseHeight}px`;
    }
  }

  return style;
});

// 计算缩放比例
const calculateScale = () => {
  if (!props.enableScale || !containerRef.value) {
    scale.value = 1;
    return;
  }

  const container = containerRef.value;
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  let scaleX = 1;
  let scaleY = 1;

  switch (props.scaleMode) {
    case "width":
      scaleX = containerWidth / props.baseWidth;
      scale.value = scaleX;
      break;
    case "height":
      scaleY = containerHeight / props.baseHeight;
      scale.value = scaleY;
      break;
    case "both":
      scaleX = containerWidth / props.baseWidth;
      scaleY = containerHeight / props.baseHeight;
      scale.value = Math.min(scaleX, scaleY);
      break;
    case "fit":
    default:
      scaleX = containerWidth / props.baseWidth;
      scaleY = containerHeight / props.baseHeight;
      scale.value = Math.min(scaleX, scaleY);
      break;
  }
};

// 监听窗口大小变化
watch([windowWidth, windowHeight], () => {
  if (props.enableScale) {
    calculateScale();
  }
});

// 监听容器尺寸变化
let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  if (props.enableScale && containerRef.value) {
    calculateScale();
    
    // 使用 ResizeObserver 监听容器尺寸变化
    resizeObserver = new ResizeObserver(() => {
      calculateScale();
    });
    
    resizeObserver.observe(containerRef.value);
  }
});

onBeforeUnmount(() => {
  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }
});

// 监听相关属性变化
watch(
  () => [props.enableScale, props.baseWidth, props.baseHeight, props.scaleMode],
  () => {
    if (props.enableScale) {
      calculateScale();
    } else {
      scale.value = 1;
    }
  }
);
</script>

<style lang="scss" scoped>
.m-responsive-page {
  @apply relative overflow-hidden;
  position: relative;

  &--fullscreen {
    @apply fixed top-0 left-0 w-screen h-screen;
  }

  &__content {
    @apply w-full h-full;
    transition: transform 0.3s ease;

    &--scaled {
      will-change: transform;
    }
  }
}

// 响应式断点样式
@media (max-width: 640px) {
  .m-responsive-page {
    // xs 样式
  }
}

@media (min-width: 640px) and (max-width: 767px) {
  .m-responsive-page {
    // sm 样式
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .m-responsive-page {
    // md 样式
  }
}

@media (min-width: 1024px) and (max-width: 1279px) {
  .m-responsive-page {
    // lg 样式
  }
}

@media (min-width: 1280px) and (max-width: 1919px) {
  .m-responsive-page {
    // xl 样式
  }
}

@media (min-width: 1920px) {
  .m-responsive-page {
    // 2xl 样式
  }
}
</style>

