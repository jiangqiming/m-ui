<template>
  <component
    :is="tag"
    ref="rootRef"
    :class="['m-ellipsis-text', computedClass]"
    :style="rootStyle"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    <span
      ref="textRef"
      :class="['m-ellipsis-text__inner']"
      :style="innerStyle"
    >
      <template v-if="$slots.default">
        <slot></slot>
      </template>
      <template v-else>
        {{ content }}
      </template>
    </span>
    <span v-if="copyable" class="m-ellipsis-text__copy" @click.stop="handleCopy">
      <svg class="m-ellipsis-text__copy-icon" viewBox="0 0 24 24" width="14" height="14">
        <path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
      </svg>
    </span>
    <Teleport to="body">
      <Transition name="m-ellipsis-tooltip">
        <div
          v-show="showTooltip && !disableTooltip && isOverflowing"
          ref="tooltipRef"
          :class="['m-ellipsis-text__tooltip', `m-ellipsis-text__tooltip--${placement}`]"
          :style="tooltipStyle"
          role="tooltip"
        >
          <div class="m-ellipsis-text__tooltip-content">{{ fullText }}</div>
          <div class="m-ellipsis-text__tooltip-arrow"></div>
        </div>
      </Transition>
    </Teleport>
    <Teleport to="body">
      <Transition name="m-ellipsis-copy-tip">
        <div
          v-show="showCopyTip"
          class="m-ellipsis-text__copy-tip"
          :style="copyTipStyle"
        >
          {{ copyTipMessage }}
        </div>
      </Transition>
    </Teleport>
  </component>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from "vue";
import type { EllipsisTextProps } from "./types";

defineOptions({
  name: "MEllipsisText",
});

const props = withDefaults(defineProps<EllipsisTextProps>(), {
  content: "",
  disableTooltip: false,
  lineClamp: 1,
  maxWidth: undefined,
  tag: "span",
  placement: "top",
  ellipsisSymbol: "...",
  truncateFrom: "end",
  copyable: false,
  copySuccessText: "已复制",
  copyErrorText: "复制失败",
  tooltipDelay: 100,
  customClass: "",
});

const rootRef = ref<HTMLElement | null>(null);
const textRef = ref<HTMLElement | null>(null);
const tooltipRef = ref<HTMLElement | null>(null);

const showTooltip = ref(false);
const isOverflowing = ref(false);
const showCopyTip = ref(false);
const copyTipMessage = ref("");
const fullText = ref("");
const tooltipPosition = ref({ top: 0, left: 0 });
const copyTipPosition = ref({ top: 0, left: 0 });
let tooltipTimer: ReturnType<typeof setTimeout> | null = null;
let copyTipTimer: ReturnType<typeof setTimeout> | null = null;
let resizeObserver: ResizeObserver | null = null;

const computedClass = computed(() => [
  props.customClass,
  props.copyable ? "m-ellipsis-text--copyable" : "",
].filter(Boolean));

const rootStyle = computed(() => {
  const style: Record<string, string> = {
    position: "relative",
    display: props.copyable ? "inline-flex" : "inline-block",
    alignItems: "center",
    maxWidth: "100%",
  };
  if (props.maxWidth !== undefined) {
    style.maxWidth = typeof props.maxWidth === "number" ? `${props.maxWidth}px` : props.maxWidth;
  }
  if (props.copyable) {
    style.cursor = "pointer";
  }
  return style;
});

const innerStyle = computed(() => {
  const style: Record<string, string> = {
    overflow: "hidden",
    textOverflow: "ellipsis",
    wordBreak: "break-all",
  };
  if (!props.copyable) {
    style.width = "100%";
  }
  if (props.lineClamp <= 1) {
    style.whiteSpace = "nowrap";
  } else {
    (style as Record<string, string>).display = "-webkit-box";
    (style as Record<string, string>)["-webkit-box-orient"] = "vertical";
    (style as Record<string, string>)["-webkit-line-clamp"] = String(props.lineClamp);
  }
  return style;
});

const tooltipStyle = computed(() => ({
  position: "fixed" as const,
  top: `${tooltipPosition.value.top}px`,
  left: `${tooltipPosition.value.left}px`,
}));

const copyTipStyle = computed(() => ({
  position: "fixed" as const,
  top: `${copyTipPosition.value.top}px`,
  left: `${copyTipPosition.value.left}px`,
}));

function getFullText(): string {
  if (props.content) return props.content;
  if (textRef.value) return textRef.value.innerText || textRef.value.textContent || "";
  return "";
}

function checkOverflow() {
  nextTick(() => {
    const el = textRef.value;
    if (!el) {
      isOverflowing.value = false;
      return;
    }
    fullText.value = getFullText();
    if (!fullText.value.trim()) {
      isOverflowing.value = false;
      return;
    }
    const multi = props.lineClamp > 1;
    if (multi) {
      isOverflowing.value = el.scrollHeight > el.clientHeight;
    } else {
      isOverflowing.value = el.scrollWidth > el.clientWidth;
    }
  });
}

function updateTooltipPosition() {
  if (!rootRef.value || !tooltipRef.value) return;
  const rect = rootRef.value.getBoundingClientRect();
  const tip = tooltipRef.value.getBoundingClientRect();
  const gap = 8;
  let top = 0;
  let left = rect.left + rect.width / 2 - tip.width / 2;

  switch (props.placement) {
    case "top":
      top = rect.top - tip.height - gap;
      break;
    case "bottom":
      top = rect.bottom + gap;
      break;
    case "left":
      left = rect.left - tip.width - gap;
      top = rect.top + rect.height / 2 - tip.height / 2;
      break;
    case "right":
      left = rect.right + gap;
      top = rect.top + rect.height / 2 - tip.height / 2;
      break;
    default:
      top = rect.top - tip.height - gap;
  }

  tooltipPosition.value = { top, left };
}

function handleMouseEnter() {
  if (props.disableTooltip || !isOverflowing.value) return;
  tooltipTimer = setTimeout(() => {
    showTooltip.value = true;
    nextTick(updateTooltipPosition);
  }, props.tooltipDelay);
}

function handleMouseLeave() {
  if (tooltipTimer) {
    clearTimeout(tooltipTimer);
    tooltipTimer = null;
  }
  showTooltip.value = false;
}

function handleClick() {
  if (props.copyable) {
    handleCopy();
  }
}

function updateCopyTipPosition() {
  if (!rootRef.value) return;
  const rect = rootRef.value.getBoundingClientRect();
  // 复制提示显示在元素上方居中
  copyTipPosition.value = {
    top: rect.top - 32,
    left: rect.left + rect.width / 2,
  };
}

async function handleCopy() {
  const text = getFullText();
  if (!text) return;
  
  // 更新复制提示位置
  updateCopyTipPosition();
  
  // 如果 tooltip 正在显示，先隐藏它
  if (showTooltip.value) {
    showTooltip.value = false;
  }
  
  try {
    await navigator.clipboard.writeText(text);
    copyTipMessage.value = props.copySuccessText;
    showCopyTip.value = true;
    copyTipTimer = setTimeout(() => {
      showCopyTip.value = false;
      if (copyTipTimer) {
        clearTimeout(copyTipTimer);
        copyTipTimer = null;
      }
    }, 1500);
  } catch {
    copyTipMessage.value = props.copyErrorText;
    showCopyTip.value = true;
    copyTipTimer = setTimeout(() => {
      showCopyTip.value = false;
      if (copyTipTimer) {
        clearTimeout(copyTipTimer);
        copyTipTimer = null;
      }
    }, 1500);
  }
}

watch(
  () => [props.content, props.lineClamp, props.maxWidth],
  () => checkOverflow(),
  { flush: "post" }
);

watch(showTooltip, (visible: boolean) => {
  if (visible) nextTick(updateTooltipPosition);
});

onMounted(() => {
  checkOverflow();
  if (rootRef.value) {
    resizeObserver = new ResizeObserver(() => checkOverflow());
    resizeObserver.observe(rootRef.value);
  }
});

onBeforeUnmount(() => {
  if (tooltipTimer) clearTimeout(tooltipTimer);
  if (copyTipTimer) clearTimeout(copyTipTimer);
  if (resizeObserver) {
    resizeObserver.disconnect();
    resizeObserver = null;
  }
});
</script>

<style lang="scss" scoped>
.m-ellipsis-text {
  @apply outline-none;

  &__inner {
    @apply leading-normal;
  }

  &:not(.m-ellipsis-text--copyable) .m-ellipsis-text__inner {
    @apply block;
  }

  &.m-ellipsis-text--copyable .m-ellipsis-text__inner {
    min-width: 0;
    flex: 1;
  }

  &__copy {
    @apply inline-flex items-center flex-shrink-0 ml-1 cursor-pointer opacity-60 self-center;

    &:hover {
      @apply opacity-100;
    }

    &-icon {
      @apply flex-shrink-0;
    }
  }

  &__copy-tip {
    @apply fixed text-xs text-white bg-gray-800 px-2 py-1 rounded shadow-lg;
    z-index: 10000;
    transform: translateX(-50%);
    white-space: nowrap;
    pointer-events: none;
  }
}

.m-ellipsis-text__tooltip {
  @apply fixed z-[9999] px-3 py-2 text-sm text-white bg-gray-800 rounded shadow-lg;
  max-width: 400px;
  pointer-events: none;

  &-content {
    @apply break-all;
  }

  &-arrow {
    @apply absolute w-2 h-2 bg-gray-800 rotate-45;
  }

  &--top {
    .m-ellipsis-text__tooltip-arrow {
      bottom: -4px;
      left: 50%;
      margin-left: -4px;
    }
  }

  &--bottom {
    .m-ellipsis-text__tooltip-arrow {
      top: -4px;
      left: 50%;
      margin-left: -4px;
    }
  }

  &--left {
    .m-ellipsis-text__tooltip-arrow {
      right: -4px;
      top: 50%;
      margin-top: -4px;
    }
  }

  &--right {
    .m-ellipsis-text__tooltip-arrow {
      left: -4px;
      top: 50%;
      margin-top: -4px;
    }
  }
}

.m-ellipsis-tooltip-enter-active,
.m-ellipsis-tooltip-leave-active {
  transition: opacity 0.15s ease;
}

.m-ellipsis-tooltip-enter-from,
.m-ellipsis-tooltip-leave-to {
  opacity: 0;
}

.m-ellipsis-copy-tip-enter-active,
.m-ellipsis-copy-tip-leave-active {
  transition: opacity 0.15s ease;
}

.m-ellipsis-copy-tip-enter-from,
.m-ellipsis-copy-tip-leave-to {
  opacity: 0;
}
</style>

