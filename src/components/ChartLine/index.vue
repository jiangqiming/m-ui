<template>
  <div
    ref="chartContainer"
    :class="['m-chart-line']"
    :style="{ width: computedWidth, height: computedHeight, backgroundColor: backgroundColor }"
  ></div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from "vue";
import * as echarts from "echarts";
import type { LineSeriesOption } from "echarts";
import { useResizeObserver } from "@vueuse/core";
import type { ChartLineProps, ChartLineSeries } from "./types";

defineOptions({
  name: "MChartLine",
});

const props = withDefaults(defineProps<ChartLineProps>(), {
  series: () => [
    {
      name: "系列1",
      data: [100, 200, 300, 400, 500],
    },
  ],
  categories: () => ["类别1", "类别2", "类别3", "类别4", "类别5"],
  colors: () => [
    "rgba(66, 133, 244, 0.8)", // 蓝色
    "rgba(255, 193, 7, 0.8)", // 黄色
    "rgba(76, 175, 80, 0.8)", // 绿色
    "rgba(255, 99, 132, 0.8)", // 红色
    "rgba(153, 102, 255, 0.8)", // 紫色
  ],
  showLegend: true,
  legendPosition: "top",
  height: 400,
  width: "100%",
  backgroundColor: "transparent",
  showGrid: true,
  gridLineStyle: () => ({
    color: "rgba(0, 0, 0, 0.1)",
    width: 1,
    type: "dashed",
  }),
  showTooltip: true,
  tooltipFormatter: undefined,
  showLabel: false,
  yAxisMin: undefined,
  yAxisMax: undefined,
  yAxisSplitNumber: 5,
  grid: () => ({
    left: "10%",
    right: "10%",
    top: "15%",
    bottom: "15%",
  }),
  xAxis: () => ({
    show: true,
    axisLabel: {
      rotate: 0,
      interval: "auto",
    },
  }),
  yAxis: () => ({
    show: true,
    name: "",
    nameLocation: "end",
    nameTextStyle: {
      color: "#666",
      fontSize: 12,
    },
  }),
});

const chartContainer = ref<HTMLDivElement | null>(null);
let chartInstance: echarts.ECharts | null = null;

// 计算图表实际宽度
const computedWidth = computed(() => {
  if (typeof props.width === "number") {
    return `${props.width}px`;
  }
  return props.width;
});

// 计算图表实际高度
const computedHeight = computed(() => {
  if (typeof props.height === "number") {
    return `${props.height}px`;
  }
  return props.height;
});

// 构建 ECharts 配置
const buildOption = (): echarts.EChartsOption => {
  // 如果传入了 options，直接使用 options
  if (props.options) {
    return props.options;
  }

  const seriesData = props.series || [];
  const categories = props.categories || [];

  // 转换系列数据格式
  const echartsSeries: LineSeriesOption[] = seriesData.map(
    (item: ChartLineSeries, index: number) => {
      const seriesColor = item.color || props.colors[index % props.colors.length];
      const lineTypeMap: Record<string, "solid" | "dashed" | "dotted"> = {
        solid: "solid",
        dashed: "dashed",
        dotted: "dotted",
      };

      const seriesOption: LineSeriesOption = {
        name: item.name,
        type: "line",
        data: item.data,
        smooth: item.smooth || false,
        lineStyle: {
          color: seriesColor,
          width: item.lineWidth || 2,
          type: item.lineType ? (lineTypeMap[item.lineType] as "solid" | "dashed" | "dotted") : "solid",
        },
        itemStyle: {
          color: seriesColor,
        },
        symbol: item.showSymbol !== false ? "circle" : "none",
        symbolSize: item.symbolSize || 6,
      };

      // 如果启用面积填充
      if (item.areaStyle) {
        seriesOption.areaStyle = {
          color: seriesColor,
          opacity: item.areaOpacity !== undefined ? item.areaOpacity : 0.3,
        };
      }

      // 如果显示标签
      if (props.showLabel) {
        seriesOption.label = {
          show: true,
          position: "top",
          color: "#666",
          fontSize: 12,
        };
      }

      return seriesOption;
    }
  );

  const option: echarts.EChartsOption = {
    backgroundColor: props.backgroundColor,
    tooltip: props.showTooltip
      ? {
          trigger: "axis",
          formatter: props.tooltipFormatter,
        }
      : {
          show: false,
        },
    legend: props.showLegend
      ? {
          show: true,
          data: seriesData.map((item: ChartLineSeries) => item.name),
          orient: props.legendPosition === "left" || props.legendPosition === "right" ? "vertical" : "horizontal",
          left: props.legendPosition === "left" ? "left" : props.legendPosition === "right" ? "right" : "center",
          top: props.legendPosition === "top" ? "top" : props.legendPosition === "bottom" ? "bottom" : "middle",
          textStyle: {
            color: "#666",
            fontSize: 12,
          },
        }
      : {
          show: false,
        },
    grid: {
      left: props.grid?.left || "10%",
      right: props.grid?.right || "10%",
      top: props.grid?.top || "15%",
      bottom: props.grid?.bottom || "15%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: categories,
      show: props.xAxis?.show !== false,
      axisLabel: {
        rotate: props.xAxis?.axisLabel?.rotate || 0,
        interval: props.xAxis?.axisLabel?.interval || "auto",
        color: "#666",
        fontSize: 12,
      },
      axisLine: {
        lineStyle: {
          color: "#e0e0e0",
        },
      },
      axisTick: {
        show: false,
      },
    },
    yAxis: {
      type: "value",
      show: props.yAxis?.show !== false,
      name: props.yAxis?.name || "",
      nameLocation: props.yAxis?.nameLocation || "end",
      nameTextStyle: props.yAxis?.nameTextStyle || {
        color: "#666",
        fontSize: 12,
      },
      min: props.yAxisMin,
      max: props.yAxisMax,
      splitNumber: props.yAxisSplitNumber,
      axisLabel: {
        color: "#666",
        fontSize: 12,
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: props.showGrid
        ? {
            show: true,
            lineStyle: {
              color: props.gridLineStyle?.color || "rgba(0, 0, 0, 0.1)",
              width: props.gridLineStyle?.width || 1,
              type: props.gridLineStyle?.type || "dashed",
            },
          }
        : {
            show: false,
          },
    },
    series: echartsSeries,
  };

  return option;
};

// 初始化图表
const initChart = () => {
  if (!chartContainer.value) {
    console.warn("ChartLine: chartContainer is not available");
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
  } catch (error) {
    console.error("ChartLine initialization error:", error);
  }
};

// 更新图表
const updateChart = () => {
  if (!chartInstance) {
    initChart();
    return;
  }
  try {
    const option = buildOption();
    chartInstance.setOption(option, true);
  } catch (error) {
    console.error("ChartLine update error:", error);
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
  nextTick(() => {
    initChart();
  });
});

// 监听数据变化
  watch(
    () => [
      props.series,
      props.categories,
      props.colors,
      props.showLegend,
      props.legendPosition,
      props.backgroundColor,
      props.showGrid,
      props.gridLineStyle,
      props.showTooltip,
      props.showLabel,
      props.yAxisMin,
      props.yAxisMax,
      props.yAxisSplitNumber,
      props.grid,
      props.xAxis,
      props.yAxis,
      props.options,
    ],
  () => {
    updateChart();
  },
  { deep: true }
);

onBeforeUnmount(() => {
  if (chartInstance) {
    chartInstance.dispose();
    chartInstance = null;
  }
});
</script>

<style lang="scss" scoped>
.m-chart-line {
  width: 100%;
  height: 100%;
}
</style>

