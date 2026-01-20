<template>
  <div
    ref="chartContainer"
    :class="['m-chart-bar', `m-chart-bar--${direction}`]"
    :style="{ width: width, height: computedHeight }"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  ></div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from "vue";
import * as echarts from "echarts";
import type { BarSeriesOption } from "echarts";
import { useResizeObserver } from "@vueuse/core";
import type { ChartBarProps, ChartBarSeries } from "./types";

defineOptions({
  name: "MChartBar",
});

const props = withDefaults(defineProps<ChartBarProps>(), {
  series: () => [
    {
      name: "系列1",
      data: [100, 200, 300, 400, 500],
    },
  ],
  categories: () => ["类别1", "类别2", "类别3", "类别4", "类别5"],
  direction: "horizontal",
  colors: () => [
    "rgba(66, 133, 244, 0.8)", // 蓝色，透明度0.8
    "rgba(255, 193, 7, 0.8)", // 黄色，透明度0.8
    "rgba(76, 175, 80, 0.8)", // 绿色，透明度0.8
  ],
  showLegend: true,
  height: "auto",
  width: "100%",
  barGap: 10,
  barCategoryGap: 20,
  scrollThreshold: 10, // 默认超过10条数据启用滚动
  scrollSpeed: 1, // 每次滚动1个数据项
  scrollInterval: 2000, // 每2秒滚动一次
  enableScroll: undefined, // undefined 表示自动判断
  visibleCount: 8, // 默认显示8个数据项
});

const chartContainer = ref<HTMLDivElement | null>(null);
let chartInstance: echarts.ECharts | null = null;
let scrollTimer: ReturnType<typeof setInterval> | null = null;
const isHovering = ref(false);
const currentStartIndex = ref(0);

// 计算图表实际高度（用于设置容器高度）
const computedHeight = computed(() => {
  if (typeof props.height === "number") {
    return `${props.height}px`;
  }
  if (props.height === "auto") {
    // 根据类别数量动态计算高度
    const categoryCount = props.categories?.length || 5;
    const visibleItems = shouldScroll.value ? props.visibleCount : categoryCount;
    return `${Math.max(300, visibleItems * 60)}px`;
  }
  return props.height;
});

// 判断是否应该启用滚动
const shouldScroll = computed(() => {
  if (props.enableScroll !== undefined) {
    return props.enableScroll;
  }
  const categoryCount = props.categories?.length || 0;
  return categoryCount > props.scrollThreshold;
});

// 获取总数据量
const totalCount = computed(() => {
  return props.categories?.length || 0;
});

// 构建 ECharts 配置
const buildOption = (): echarts.EChartsOption => {
  const seriesData = props.series || [];
  const categories = props.categories || [];

  // 转换系列数据格式
  const echartsSeries: BarSeriesOption[] = seriesData.map(
    (item: ChartBarSeries, index: number) => {
      const seriesColor = item.color || props.colors[index % props.colors.length];

      return {
        name: item.name,
        type: "bar",
        data: item.data,
        itemStyle: {
          color: seriesColor,
        },
        label: {
          show: true,
          position: props.direction === "horizontal" ? "right" : "top",
          formatter: "{c}",
        },
      } as BarSeriesOption;
    }
  );

  // 如果是横向，需要特殊处理
  const isHorizontal = props.direction === "horizontal";

  // 计算滚动相关的数据
  const dataZoomConfig =
    shouldScroll.value && totalCount.value > 0
      ? {
          type: "slider" as const,
          show: false, // 不显示滚动条
          start: Math.min((currentStartIndex.value / totalCount.value) * 100, 100),
          end: Math.min(
            ((currentStartIndex.value + props.visibleCount) / totalCount.value) * 100,
            100
          ),
          filterMode: "filter" as const,
          ...(isHorizontal
            ? {
                yAxisIndex: 0,
              }
            : {
                xAxisIndex: 0,
              }),
        }
      : undefined;

  const option: echarts.EChartsOption = {
    color: props.colors,
    legend: props.showLegend
      ? {
          show: true,
          top: "top",
          left: "left",
          orient: "horizontal",
        }
      : {
          show: false,
        },
    grid: isHorizontal
      ? {
          left: "15%",
          right: "10%",
          top: props.showLegend ? "15%" : "10%",
          bottom: "10%",
          containLabel: false,
        }
      : {
          left: "10%",
          right: "10%",
          top: props.showLegend ? "15%" : "10%",
          bottom: "15%",
          containLabel: false,
        },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    dataZoom: dataZoomConfig ? [dataZoomConfig] : undefined,
    xAxis: isHorizontal
      ? {
          type: "value",
          position: "bottom",
          axisLabel: {
            show: true,
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
            },
          },
        }
      : {
          type: "category",
          data: categories,
          axisLabel: {
            rotate: 0,
          },
        },
    yAxis: isHorizontal
      ? {
          type: "category",
          data: categories,
          inverse: true,
          axisLabel: {
            show: true,
          },
        }
      : {
          type: "value",
          axisLabel: {
            show: true,
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
            },
          },
        },
    series: echartsSeries,
    barGap: `${props.barGap}%`,
    barCategoryGap: `${props.barCategoryGap}%`,
  };

  return option;
};

// 初始化图表
const initChart = () => {
  if (!chartContainer.value) {
    console.warn("ChartBar: chartContainer is not available");
    return;
  }

  try {
    // 如果已经存在实例，先销毁
    if (chartInstance) {
      chartInstance.dispose();
      chartInstance = null;
    }

    chartInstance = echarts.init(chartContainer.value);
    const option = buildOption();
    chartInstance.setOption(option);

    // 初始化滚动
    initScroll();
  } catch (error) {
    console.error("ChartBar initialization error:", error);
  }
};

// 更新图表
const updateChart = () => {
  if (!chartInstance) {
    // 如果实例不存在，尝试重新初始化
    initChart();
    return;
  }
  try {
    const option = buildOption();
    chartInstance.setOption(option, true);
  } catch (error) {
    console.error("ChartBar update error:", error);
  }
};

// 响应式调整
useResizeObserver(chartContainer, () => {
  if (chartInstance) {
    chartInstance.resize();
  }
});

// 监听尺寸变化
watch(
  () => [props.width, props.height],
  () => {
    if (chartInstance) {
      setTimeout(() => {
        chartInstance?.resize();
      }, 100);
    }
  }
);

onMounted(() => {
  // 使用 nextTick 确保 DOM 已经渲染完成
  nextTick(() => {
    initChart();
  });
});

// 滚动处理函数
const startScroll = () => {
  if (!shouldScroll.value || isHovering.value || totalCount.value === 0) {
    return;
  }

  // 清理之前的定时器
  stopScroll();

  scrollTimer = setInterval(() => {
    if (!chartInstance || isHovering.value || totalCount.value === 0) {
      return;
    }

    // 计算下一个起始位置
    currentStartIndex.value += props.scrollSpeed;

    // 如果滚动到底部，重置到开始位置
    if (currentStartIndex.value + props.visibleCount >= totalCount.value) {
      currentStartIndex.value = 0;
    }

    // 更新图表
    try {
      const option = buildOption();
      chartInstance.setOption(option, false);
    } catch (error) {
      console.error("ChartBar scroll error:", error);
    }
  }, props.scrollInterval);
};

// 停止滚动
const stopScroll = () => {
  if (scrollTimer) {
    clearInterval(scrollTimer);
    scrollTimer = null;
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
  if (shouldScroll.value) {
    startScroll();
  }
};

// 初始化滚动
const initScroll = () => {
  currentStartIndex.value = 0;
  if (shouldScroll.value) {
    startScroll();
  }
};

// 监听数据变化
watch(
  () => [
    props.series,
    props.categories,
    props.direction,
    props.colors,
    props.showLegend,
    props.barGap,
    props.barCategoryGap,
  ],
  () => {
    updateChart();
    // 数据变化时重新初始化滚动
    if (shouldScroll.value) {
      initScroll();
    } else {
      stopScroll();
    }
  },
  { deep: true }
);

// 监听滚动配置变化
watch(
  () => [shouldScroll.value, props.scrollSpeed, props.scrollInterval, props.visibleCount],
  () => {
    if (shouldScroll.value) {
      initScroll();
    } else {
      stopScroll();
    }
  }
);

onBeforeUnmount(() => {
  // 清理定时器
  stopScroll();

  // 清理图表实例
  if (chartInstance) {
    chartInstance.dispose();
    chartInstance = null;
  }
});
</script>

<style lang="scss" scoped>
.m-chart-bar {
  @apply w-full h-full;
}
</style>
