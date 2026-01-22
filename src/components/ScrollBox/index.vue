<template>
  <div
    ref="containerRef"
    :class="['m-scroll-box', { 'm-scroll-box--disabled': disabled }]"
    :style="containerStyle"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div
      ref="contentRef"
      :class="['m-scroll-box__content']"
      :style="contentStyle"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from "vue";
import type { ScrollBoxProps } from "./types";

defineOptions({
  name: "MScrollBox",
});

const props = withDefaults(defineProps<ScrollBoxProps>(), {
  disabled: false,
  scrollSpeed: 50, // 像素/秒
  height: "300px",
  width: "100%",
  direction: "up",
  loop: true,
  scrollInterval: 20, // 毫秒
  scrollStep: 1, // 每次滚动的像素数
});

const containerRef = ref<HTMLDivElement | null>(null);
const contentRef = ref<HTMLDivElement | null>(null);
const isHovering = ref(false);
const scrollTimer = ref<ReturnType<typeof setInterval> | null>(null);
const currentScrollTop = ref(0);
const canScroll = ref(false);

// 计算容器样式
const containerStyle = computed(() => {
  const style: Record<string, string> = {
    overflow: "hidden",
    position: "relative",
  };

  if (typeof props.height === "number") {
    style.height = `${props.height}px`;
  } else {
    style.height = props.height;
  }

  if (typeof props.width === "number") {
    style.width = `${props.width}px`;
  } else {
    style.width = props.width;
  }

  return style;
});

// 计算内容样式
const contentStyle = computed(() => {
  const style: Record<string, string> = {
    transition: "none",
  };

  if (canScroll.value && !props.disabled) {
    style.transform = `translateY(-${currentScrollTop.value}px)`;
  }

  return style;
});

// 检查是否可以滚动
const checkCanScroll = () => {
  if (!containerRef.value || !contentRef.value) {
    canScroll.value = false;
    return;
  }

  const containerHeight = containerRef.value.clientHeight;
  const contentHeight = contentRef.value.scrollHeight;

  // 只有当内容高度大于容器高度时才能滚动
  canScroll.value = contentHeight > containerHeight;
};

// 开始滚动
const startScroll = () => {
  if (props.disabled || !canScroll.value || isHovering.value) {
    return;
  }

  stopScroll();

  // 初始化滚动位置
  if (!containerRef.value || !contentRef.value) {
    return;
  }

  const containerHeight = containerRef.value.clientHeight;
  const contentHeight = contentRef.value.scrollHeight;
  const maxScroll = contentHeight - containerHeight;

  // 如果向下滚动，初始位置应该在底部
  if (props.direction === "down" && currentScrollTop.value === 0) {
    currentScrollTop.value = maxScroll;
  }

  // 根据滚动速度计算每次滚动的步进
  // scrollSpeed 是像素/秒，scrollInterval 是毫秒
  // 每次滚动的像素数 = scrollSpeed * (scrollInterval / 1000)
  const step = props.scrollStep || (props.scrollSpeed * props.scrollInterval) / 1000;

  scrollTimer.value = setInterval(() => {
    if (!containerRef.value || !contentRef.value || isHovering.value || props.disabled) {
      return;
    }

    const containerHeight = containerRef.value.clientHeight;
    const contentHeight = contentRef.value.scrollHeight;
    const maxScroll = contentHeight - containerHeight;

    if (props.direction === "up") {
      currentScrollTop.value += step;

      // 如果滚动到底部
      if (currentScrollTop.value >= maxScroll) {
        if (props.loop) {
          // 循环滚动，重置到顶部
          currentScrollTop.value = 0;
        } else {
          // 不循环，停止滚动
          stopScroll();
        }
      }
    } else {
      // 向下滚动
      currentScrollTop.value -= step;

      // 如果滚动到顶部
      if (currentScrollTop.value <= 0) {
        if (props.loop) {
          // 循环滚动，重置到底部
          currentScrollTop.value = maxScroll;
        } else {
          // 不循环，停止滚动
          stopScroll();
        }
      }
    }
  }, props.scrollInterval);
};

// 停止滚动
const stopScroll = () => {
  if (scrollTimer.value) {
    clearInterval(scrollTimer.value);
    scrollTimer.value = null;
  }
};

// 处理鼠标进入
const handleMouseEnter = () => {
  isHovering.value = true;
  stopScroll();
};

// 处理鼠标离开
const handleMouseLeave = () => {
  isHovering.value = false;
  if (!props.disabled && canScroll.value) {
    startScroll();
  }
};

// 监听容器和内容尺寸变化
let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  nextTick(() => {
    checkCanScroll();
    if (canScroll.value && !props.disabled) {
      startScroll();
    }

    // 使用 ResizeObserver 监听尺寸变化
    if (containerRef.value && contentRef.value) {
      resizeObserver = new ResizeObserver(() => {
        checkCanScroll();
        if (canScroll.value && !props.disabled && !isHovering.value) {
          // 如果内容高度变化，重新计算滚动位置
          const containerHeight = containerRef.value!.clientHeight;
          const contentHeight = contentRef.value!.scrollHeight;
          const maxScroll = contentHeight - containerHeight;

          // 如果当前滚动位置超出范围，重置
          if (currentScrollTop.value > maxScroll) {
            currentScrollTop.value = props.loop ? 0 : maxScroll;
          }

          startScroll();
        } else {
          stopScroll();
        }
      });

      resizeObserver.observe(containerRef.value);
      resizeObserver.observe(contentRef.value);
    }
  });
});

onBeforeUnmount(() => {
  stopScroll();
  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }
});

// 监听属性变化
watch(
  () => [props.disabled, props.scrollSpeed, props.direction, props.loop, props.scrollInterval, props.scrollStep],
  () => {
    if (props.disabled) {
      stopScroll();
    } else if (canScroll.value && !isHovering.value) {
      // 当方向改变时，重置滚动位置
      if (containerRef.value && contentRef.value) {
        const containerHeight = containerRef.value.clientHeight;
        const contentHeight = contentRef.value.scrollHeight;
        const maxScroll = contentHeight - containerHeight;
        
        if (props.direction === "down") {
          currentScrollTop.value = maxScroll;
        } else {
          currentScrollTop.value = 0;
        }
      }
      startScroll();
    }
  }
);

// 监听 canScroll 变化
watch(canScroll, (newVal) => {
  if (newVal && !props.disabled && !isHovering.value) {
    startScroll();
  } else {
    stopScroll();
  }
});
</script>

<style lang="scss" scoped>
.m-scroll-box {
  @apply relative overflow-hidden;
  position: relative;

  &--disabled {
    cursor: default;
  }

  &__content {
    @apply w-full;
    will-change: transform;
  }
}
</style>

