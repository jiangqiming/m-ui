<template>
  <div
    ref="chartContainer"
    :class="['m-chart-bar-3d', { 'm-chart-bar-3d--dark': props.darkMode }]"
    :style="{ width: computedWidth, height: computedHeight, backgroundColor: props.backgroundColor }"
  ></div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from "vue";
import * as echarts from "echarts";
import { useResizeObserver } from "@vueuse/core";
import type { ChartBar3DProps, ChartBar3DDataItem } from "./types";

defineOptions({
  name: "MChartBar3D",
});

const props = withDefaults(defineProps<ChartBar3DProps>(), {
  data: () => [297, 69],
  categories: () => ["等级认定", "考核鉴定"],
  unit: "家",
  colors: () => ({
    start: "rgba(66, 133, 244, 1)", // 蓝色
    end: "rgba(0, 255, 255, 1)", // 青色
  }),
  height: 400,
  width: "100%",
  showLabel: true,
  darkMode: true,
  yAxisMax: undefined,
  yAxisMin: 0,
  yAxisSplitNumber: 6,
  showGrid: true,
  gridLineStyle: () => ({
    color: "rgba(255, 255, 255, 0.1)",
    width: 1,
    type: "dashed",
  }),
  barWidth: "40%",
  barBorderRadius: 4,
  showLegend: false,
  showTooltip: true,
  backgroundColor: undefined,
  grid: () => ({
    left: "10%",
    right: "10%",
    top: "10%",
    bottom: "15%",
  }),
  depth: 20,
  labelFormatter: undefined,
});

const chartContainer = ref<HTMLDivElement | null>(null);
let chartInstance: echarts.ECharts | null = null;

// 3D效果的偏移量
const offsetX = computed(() => {
  // 根据depth计算X轴偏移，默认12
  return props.depth ? Math.max(8, Math.min(16, props.depth)) : 12;
});

const offsetY = computed(() => {
  // 根据depth计算Y轴偏移，默认6
  return props.depth ? Math.max(4, Math.min(10, props.depth / 2)) : 6;
});

// 注册3D立方体的三个面
// 绘制左侧面
const CubeLeft = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx: any, shape: any) {
    const xAxisPoint = shape.xAxisPoint;
    const c0 = [shape.x, shape.y];
    const c1 = [shape.x - offsetX.value, shape.y - offsetY.value];
    const c2 = [xAxisPoint[0] - offsetX.value, xAxisPoint[1] - offsetY.value];
    const c3 = [xAxisPoint[0], xAxisPoint[1]];
    const path = ctx.moveTo(c0[0], c0[1]);
    if (path) {
      path
        .lineTo(c1[0], c1[1])
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .closePath();
    }
  },
});

// 绘制右侧面
const CubeRight = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx: any, shape: any) {
    const xAxisPoint = shape.xAxisPoint;
    const c1 = [shape.x, shape.y];
    const c2 = [xAxisPoint[0], xAxisPoint[1]];
    const c3 = [xAxisPoint[0] + offsetX.value, xAxisPoint[1] - offsetY.value];
    const c4 = [shape.x + offsetX.value, shape.y - offsetY.value];
    const path = ctx.moveTo(c1[0], c1[1]);
    if (path) {
      path
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .lineTo(c4[0], c4[1])
        .closePath();
    }
  },
});

// 绘制顶面
const CubeTop = echarts.graphic.extendShape({
  shape: {
    x: 0,
    y: 0,
  },
  buildPath: function (ctx: any, shape: any) {
    const c1 = [shape.x, shape.y];
    const c2 = [shape.x + offsetX.value, shape.y - offsetY.value]; // 右点
    const c3 = [shape.x, shape.y - offsetX.value];
    const c4 = [shape.x - offsetX.value, shape.y - offsetY.value];
    const path = ctx.moveTo(c1[0], c1[1]);
    if (path) {
      path
        .lineTo(c2[0], c2[1])
        .lineTo(c3[0], c3[1])
        .lineTo(c4[0], c4[1])
        .closePath();
    }
  },
});

// 注册三个面图形（只注册一次）
let shapesRegistered = false;
const registerShapes = () => {
  if (!shapesRegistered) {
    echarts.graphic.registerShape("CubeLeft", CubeLeft);
    echarts.graphic.registerShape("CubeRight", CubeRight);
    echarts.graphic.registerShape("CubeTop", CubeTop);
    shapesRegistered = true;
  }
};

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

// 处理数据格式
const processedData = computed(() => {
  if (!props.data || props.data.length === 0) {
    return [];
  }

  // 如果是数字数组，转换为对象数组
  if (typeof props.data[0] === "number") {
    return (props.data as number[]).map((value: number, index: number) => ({
      value,
      name: props.categories?.[index] || `数据${index + 1}`,
    }));
  }

  return props.data as ChartBar3DDataItem[];
});

// 从颜色字符串中提取RGB值
const extractRGB = (colorStr: string): string => {
  // 处理 rgba(r, g, b, a) 格式
  const rgbaMatch = colorStr.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (rgbaMatch) {
    return `${rgbaMatch[1]}, ${rgbaMatch[2]}, ${rgbaMatch[3]}`;
  }
  // 处理 #rrggbb 格式
  const hexMatch = colorStr.match(/#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})/);
  if (hexMatch) {
    return `${parseInt(hexMatch[1], 16)}, ${parseInt(hexMatch[2], 16)}, ${parseInt(hexMatch[3], 16)}`;
  }
  // 默认蓝色
  return "66, 133, 244";
};

// 获取颜色配置（返回RGB字符串）
const getColorRGB = (index: number): string => {
  const colorConfig = props.colors || {
    start: "rgba(66, 133, 244, 1)",
    end: "rgba(0, 255, 255, 1)",
  };

  if (typeof colorConfig === "string") {
    return extractRGB(colorConfig);
  }

  if (Array.isArray(colorConfig)) {
    const color = colorConfig[index % colorConfig.length];
    return extractRGB(color);
  }

  // 渐变对象，使用起始颜色
  return extractRGB(colorConfig.start);
};

// 生成渐变填充（用于3D立方体的各个面）
const generateGradientFill = (
  colorRGB: string,
  opacityStart: number,
  opacityEnd: number
): any => {
  return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
    {
      offset: 0,
      color: `rgba(${colorRGB}, ${opacityStart})`,
    },
    {
      offset: 1,
      color: `rgba(${colorRGB}, ${opacityEnd})`,
    },
  ]);
};

// 计算Y轴最大值
const computedYAxisMax = computed(() => {
  if (props.yAxisMax !== undefined) {
    return props.yAxisMax;
  }

  const maxValue = Math.max(...processedData.value.map((item: ChartBar3DDataItem) => item.value));
  // 向上取整到合适的值
  const step = Math.pow(10, Math.floor(Math.log10(maxValue)));
  return Math.ceil(maxValue / step) * step;
});

// 构建 ECharts 配置
const buildOption = (): echarts.EChartsOption => {
  const data = processedData.value;
  const categories = props.categories || data.map((item: ChartBar3DDataItem, index: number) => item.name || `类别${index + 1}`);

  // 标签格式化
  const labelFormatter = props.labelFormatter || ((value: number) => {
    return `${value}${props.unit || ""}`;
  });

  // 背景色
  const backgroundColor = props.backgroundColor || (props.darkMode ? "transparent" : "#ffffff");

  // 文本颜色
  const textColor = props.darkMode ? "#E6F7FF" : "#333333";
  const axisLineColor = props.darkMode ? "#5E8FA8" : "#999999";

  const option: echarts.EChartsOption = {
    backgroundColor,
    tooltip: props.showTooltip
      ? {
          show: false, // 默认不显示tooltip，因为已经有标签了
          trigger: "axis",
          axisPointer: {
            type: "shadow",
          },
          backgroundColor: props.darkMode ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.95)",
          borderColor: props.darkMode ? "rgba(255, 255, 255, 0.2)" : "rgba(0, 0, 0, 0.1)",
          textStyle: {
            color: props.darkMode ? "#ffffff" : "#333333",
          },
          formatter: (params: any) => {
            const param = Array.isArray(params) ? params[1] : params;
            return `${param.name} : ${labelFormatter(param.value, param.dataIndex)}`;
          },
        }
      : {
          show: false,
        },
    grid: {
      left: props.grid?.left || "10%",
      right: props.grid?.right || "10%",
      top: props.grid?.top || "10%",
      bottom: props.grid?.bottom || "15%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: categories,
      axisLine: {
        show: true,
        lineStyle: {
          width: 2,
          color: axisLineColor,
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: 14,
        color: textColor,
        interval: 0, // 强制显示所有标签
      },
    },
    yAxis: {
      type: "value",
      min: props.yAxisMin,
      max: computedYAxisMax.value,
      splitNumber: props.yAxisSplitNumber,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        fontSize: 12,
        color: textColor,
      },
      splitLine: props.showGrid
        ? {
            show: true,
            lineStyle: {
              color: props.gridLineStyle?.color || (props.darkMode ? "rgba(15, 71, 153, 0.5)" : "rgba(0, 0, 0, 0.1)"),
              width: props.gridLineStyle?.width || 1,
              type: (props.gridLineStyle?.type || "dashed") as "solid" | "dashed" | "dotted",
            },
          }
        : {
            show: false,
          },
    },
    series: [
      // 3D立方体系列
      {
        type: "custom",
        renderItem: (params: any, api: any) => {
          const location = api.coord([api.value(0), api.value(1)]);
          const colorRGB = getColorRGB(params.dataIndex);
          
          return {
            type: "group",
            children: [
              {
                type: "CubeLeft",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: generateGradientFill(colorRGB, 1, 0.3),
                },
              },
              {
                type: "CubeRight",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: generateGradientFill(colorRGB, 1, 0.1),
                },
              },
              {
                type: "CubeTop",
                shape: {
                  api,
                  xValue: api.value(0),
                  yValue: api.value(1),
                  x: location[0],
                  y: location[1],
                  xAxisPoint: api.coord([api.value(0), 0]),
                },
                style: {
                  fill: generateGradientFill(colorRGB, 1, 1),
                },
              },
            ],
          } as any;
        },
        data: data,
      },
      // 透明bar系列，用于显示标签
      {
        type: "bar",
        label: {
          show: props.showLabel,
          position: "top",
          formatter: (params: any) => {
            return labelFormatter(params.value, params.dataIndex);
          },
          fontSize: 14,
          color: props.darkMode ? "#E3E9F3" : "#333333",
          offset: [0, -20],
        },
        itemStyle: {
          color: "transparent",
        },
        tooltip: {
          show: false,
        },
        data: data.map((item: ChartBar3DDataItem) => item.value),
      },
    ],
  };

  return option;
};

// 初始化图表
const initChart = () => {
  if (!chartContainer.value) {
    console.warn("ChartBar3D: chartContainer is not available");
    return;
  }

  try {
    // 注册自定义图形
    registerShapes();

    // 如果已经存在实例，先销毁
    if (chartInstance) {
      chartInstance.dispose();
      chartInstance = null;
    }

    chartInstance = echarts.init(chartContainer.value);
    const option = buildOption();
    chartInstance.setOption(option);
  } catch (error) {
    console.error("ChartBar3D initialization error:", error);
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
    console.error("ChartBar3D update error:", error);
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
    props.categories,
    props.colors,
    props.showLabel,
    props.darkMode,
    props.yAxisMax,
    props.yAxisMin,
    props.showGrid,
    props.unit,
    props.backgroundColor,
    props.barWidth,
    props.barBorderRadius,
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
.m-chart-bar-3d {
  width: 100%;
  height: 100%;
}
</style>

