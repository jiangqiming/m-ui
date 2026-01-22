<template>
  <div
    ref="chartContainer"
    :class="['m-chart-pie', `m-chart-pie--${legendPosition}`]"
    :style="{ width: width, height: computedHeight }"
  ></div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from "vue";
import * as echarts from "echarts";
import type { PieSeriesOption } from "echarts";
import { useResizeObserver } from "@vueuse/core";
import type { ChartPieProps, ChartPieDataItem } from "./types";

defineOptions({
  name: "MChartPie",
});

const props = withDefaults(defineProps<ChartPieProps>(), {
  data: () => [
    { name: "数据1", value: 100 },
    { name: "数据2", value: 200 },
    { name: "数据3", value: 300 },
  ],
  colors: () => [
    "rgba(76, 175, 80, 1)", // 绿色
    "rgba(33, 150, 243, 1)", // 蓝色
    "rgba(255, 152, 0, 1)", // 橙色
  ],
  showLegend: true,
  legendPosition: "right",
  height: "400px",
  width: "100%",
  innerRadius: "60%", // 默认环形图
  radius: "80%",
  showLabel: true,
  labelPosition: "outside",
  showPercent: true,
  showValue: false,
  legendShowValue: true,
  legendShowPercent: true,
});

const chartContainer = ref<HTMLDivElement | null>(null);
let chartInstance: echarts.ECharts | null = null;

// 计算总数值
const totalValue = computed(() => {
  return props.data?.reduce((sum, item) => sum + item.value, 0) || 0;
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
  const data = props.data || [];
  
  // 转换数据格式，应用自定义颜色
  const seriesData = data.map((item: ChartPieDataItem, index: number) => ({
    name: item.name,
    value: item.value,
    itemStyle: {
      color: item.color || props.colors[index % props.colors.length],
    },
  }));

  // 计算图例配置
  const legendConfig = props.showLegend
    ? {
        show: true,
        orient: props.legendPosition === "left" || props.legendPosition === "right" ? "vertical" : "horizontal",
        left: props.legendPosition === "left" ? "left" : props.legendPosition === "right" ? "right" : "center",
        top: props.legendPosition === "top" ? "top" : props.legendPosition === "bottom" ? "bottom" : "middle",
        formatter: (name: string) => {
          const item = data.find((d) => d.name === name);
          if (!item) return name;
          
          const percent = totalValue.value > 0 ? ((item.value / totalValue.value) * 100).toFixed(0) : "0";
          let formatterText = name;
          
          if (props.legendShowValue && props.legendShowPercent) {
            formatterText = `${name}\n${item.value}个 ${percent}%`;
          } else if (props.legendShowValue) {
            formatterText = `${name}\n${item.value}个`;
          } else if (props.legendShowPercent) {
            formatterText = `${name}\n${percent}%`;
          }
          
          return formatterText;
        },
        textStyle: {
          color: "#fff",
          fontSize: 14,
          lineHeight: 20,
        },
        itemWidth: 12,
        itemHeight: 12,
        itemGap: 16,
      }
    : {
        show: false,
      };

  // 标签配置
  const labelConfig = props.showLabel
    ? {
        show: true,
        position: props.labelPosition,
        formatter: (params: any) => {
          if (props.labelPosition === "center") {
            return `{name|${params.name}}\n{value|${params.value}}\n{percent|${params.percent}%}`;
          }
          
          let formatterText = "";
          if (props.showValue) {
            formatterText += `${params.value}`;
          }
          if (props.showPercent) {
            if (formatterText) formatterText += "\n";
            formatterText += `${params.percent}%`;
          }
          return formatterText || params.name;
        },
        rich: {
          name: {
            fontSize: 14,
            fontWeight: "bold",
            color: "#333",
          },
          value: {
            fontSize: 16,
            color: "#333",
          },
          percent: {
            fontSize: 14,
            color: "#666",
          },
        },
      }
    : {
        show: false,
      };

  // 计算饼图位置（根据图例位置调整）
  const getPieCenter = () => {
    if (props.legendPosition === "left") {
      return ["60%", "50%"];
    } else if (props.legendPosition === "right") {
      return ["40%", "50%"];
    } else if (props.legendPosition === "top") {
      return ["50%", "60%"];
    } else if (props.legendPosition === "bottom") {
      return ["50%", "40%"];
    }
    return ["50%", "50%"];
  };

  const option: echarts.EChartsOption = {
    color: props.colors,
    legend: legendConfig,
    tooltip: {
      trigger: "item",
      formatter: (params: any) => {
        const percent = totalValue.value > 0 ? ((params.value / totalValue.value) * 100).toFixed(2) : "0";
        return `${params.name}<br/>${params.value}个 (${percent}%)`;
      },
    },
    series: [
      {
        type: "pie",
        radius: [props.innerRadius, props.radius],
        center: getPieCenter(),
        data: seriesData,
        label: labelConfig,
        labelLine: {
          show: props.showLabel && props.labelPosition === "outside",
          length: 15,
          length2: 10,
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)",
          },
        },
      } as PieSeriesOption,
    ],
  };

  return option;
};

// 初始化图表
const initChart = () => {
  if (!chartContainer.value) {
    console.warn("ChartPie: chartContainer is not available");
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
    console.error("ChartPie initialization error:", error);
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
    console.error("ChartPie update error:", error);
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

// 监听数据变化
watch(
  () => [
    props.data,
    props.colors,
    props.showLegend,
    props.legendPosition,
    props.innerRadius,
    props.radius,
    props.showLabel,
    props.labelPosition,
    props.showPercent,
    props.showValue,
    props.legendShowValue,
    props.legendShowPercent,
  ],
  () => {
    updateChart();
  },
  { deep: true }
);

onBeforeUnmount(() => {
  // 清理图表实例
  if (chartInstance) {
    chartInstance.dispose();
    chartInstance = null;
  }
});
</script>

<style lang="scss" scoped>
.m-chart-pie {
  @apply w-full h-full;
}
</style>

