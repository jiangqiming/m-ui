<template>
  <div
    v-if="!liquidMode"
    ref="chartContainer"
    :class="['m-chart-pie', `m-chart-pie--${legendPosition}`]"
    :style="{ width: width, height: computedHeight }"
  ></div>
  <div
    v-else
    ref="liquidContainer"
    :class="['m-chart-pie', 'm-chart-pie--liquid']"
    :style="{ width: width, height: computedHeight }"
  >
    <canvas ref="liquidCanvas" class="m-chart-pie__liquid-canvas"></canvas>
    <div class="m-chart-pie__liquid-label">
      <div class="m-chart-pie__liquid-label-text">{{ progressLabel || "完成率" }}</div>
      <div class="m-chart-pie__liquid-percent">{{ liquidPercentText }}%</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from "vue";
import * as echarts from "echarts";
import type { PieSeriesOption, GaugeSeriesOption } from "echarts";
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
  percentPrecision: 0, // 默认百分比不显示小数
  tooltipShowPercent: true, // 默认 tooltip 显示百分比
  progressMode: false, // 是否启用进度环模式
  progressMax: 100, // 进度环最大值
  progressColor: () => ["#87CEEB", "#4169E1"], // 进度环渐变色 [起始色, 结束色]
  progressBgColor: "rgba(200, 200, 200, 0.2)", // 进度环背景色
  progressLabel: "完成率", // 进度环中心显示的文案
  gaugeMode: false, // 是否启用仪表盘模式
  gaugeMin: 0, // 仪表盘最小值
  gaugeMax: 100, // 仪表盘最大值
  gaugeColor: () => ["#91CC75", "#FAC858", "#EE6666"], // 仪表盘分段颜色
  liquidMode: false, // 是否启用水球模式
  liquidColor: "#3BA3FF", // 水球颜色
  liquidBgColor: "rgba(59, 163, 255, 0.1)", // 水球背景色
  liquidRadius: 0.4, // 水球半径比例（0-1之间）
  roseType: false,
});

const chartContainer = ref<HTMLDivElement | null>(null);
const liquidContainer = ref<HTMLDivElement | null>(null);
const liquidCanvas = ref<HTMLCanvasElement | null>(null);
let chartInstance: echarts.ECharts | null = null;
let liquidAnimationId: number | null = null;

// 计算总数值
const totalValue = computed(() => {
  return props.data?.reduce((sum, item) => sum + item.value, 0) || 0;
});

// 格式化百分比
const formatPercent = (value: number, total: number): string => {
  if (total === 0) return "0";
  const percent = (value / total) * 100;
  return percent.toFixed(props.percentPrecision);
};

// 水球图相关
const liquidPercentText = computed(() => {
  if (!props.liquidMode || !props.data || props.data.length === 0) return "0";
  const maxValue = props.progressMax || 100;
  return formatPercent(props.data[0].value, maxValue);
});

// 绘制水球图
const drawLiquidChart = () => {
  if (!liquidCanvas.value || !liquidContainer.value) return;

  const canvas = liquidCanvas.value;
  const container = liquidContainer.value;
  const rect = container.getBoundingClientRect();
  // 使用容器的最小尺寸确保是正方形
  const size = Math.min(rect.width, rect.height);
  
  // 设置 canvas 的实际像素尺寸（用于绘制）
  const dpr = window.devicePixelRatio || 1;
  canvas.width = size * dpr;
  canvas.height = size * dpr;
  
  // 设置 canvas 的显示尺寸为正方形
  canvas.style.width = size + 'px';
  canvas.style.height = size + 'px';
  
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  
  // 缩放上下文以支持高DPI
  ctx.scale(dpr, dpr);

  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * props.liquidRadius;
  
  // 计算填充百分比
  const liquidValue = props.data && props.data.length > 0 ? props.data[0].value : 0;
  const maxValue = props.progressMax || 100;
  const percent = maxValue > 0 ? (liquidValue / maxValue) * 100 : 0;
  const fillPercent = Math.min(100, Math.max(0, percent)) / 100;
  
  // 清空画布
  ctx.clearRect(0, 0, size, size);
  
  // 绘制背景圆
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.fillStyle = props.liquidBgColor || "rgba(59, 163, 255, 0.1)";
  ctx.fill();
  
  // 绘制边框
  ctx.strokeStyle = props.liquidBgColor || "rgba(59, 163, 255, 0.2)";
  ctx.lineWidth = 2;
  ctx.stroke();
  
  // 计算液体高度
  const liquidHeight = radius * 2 * fillPercent;
  const liquidTop = centerY + radius - liquidHeight;
  
  // 创建裁剪区域（圆形）
  ctx.save();
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
  ctx.clip();
  
  // 绘制波浪效果
  const waveHeight = radius * 0.05;
  const waveLength = radius * 2;
  const time = Date.now() * 0.001; // 动画时间
  
  // 绘制多层波浪
  for (let i = 0; i < 2; i++) {
    ctx.beginPath();
    const offset = i * Math.PI;
    const waveSpeed = 0.5 + i * 0.3;
    
    for (let x = centerX - radius; x <= centerX + radius; x += 2) {
      const y = liquidTop + Math.sin((x / waveLength) * Math.PI * 2 + time * waveSpeed + offset) * waveHeight;
      if (x === centerX - radius) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    
    // 填充到底部
    ctx.lineTo(centerX + radius, centerY + radius);
    ctx.lineTo(centerX - radius, centerY + radius);
    ctx.closePath();
    
    // 渐变填充
    const gradient = ctx.createLinearGradient(centerX - radius, liquidTop, centerX + radius, centerY + radius);
    const baseColor = props.liquidColor || "#3BA3FF";
    gradient.addColorStop(0, baseColor + "CC");
    gradient.addColorStop(1, baseColor + "99");
    ctx.fillStyle = gradient;
    ctx.fill();
  }
  
  ctx.restore();
  
  // 继续动画
  if (props.liquidMode) {
    liquidAnimationId = requestAnimationFrame(drawLiquidChart);
  }
};

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

  const data = props.data || [];
  
  // 仪表盘模式
  if (props.gaugeMode) {
    const gaugeValue = data.length > 0 ? data[0].value : 0;
    const formattedPercent = formatPercent(gaugeValue, props.gaugeMax);
    
    return {
      color: props.gaugeColor,
      legend: {
        show: false,
      },
      tooltip: {
        trigger: "item",
        formatter: () => {
          return `${formattedPercent}%`;
        },
      },
      series: [
        {
          type: "gauge",
          radius: "80%",
          center: ["50%", "75%"],
          startAngle: 180,
          endAngle: 0,
          min: props.gaugeMin,
          max: props.gaugeMax,
          splitNumber: 8,
          axisLine: {
            lineStyle: {
              width: 10,
              color: [
                [gaugeValue / props.gaugeMax, props.gaugeColor[0] || "#91CC75"],
                [1, props.gaugeColor[2] || "#EE6666"],
              ],
            },
          },
          pointer: {
            itemStyle: {
              color: "auto",
            },
          },
          axisTick: {
            distance: -30,
            splitNumber: 5,
            lineStyle: {
              width: 2,
              color: "#999",
            },
          },
          splitLine: {
            distance: -35,
            length: 14,
            lineStyle: {
              width: 3,
              color: "#999",
            },
          },
          axisLabel: {
            distance: -20,
            color: "#999",
            fontSize: 12,
          },
          title: {
            offsetCenter: [0, "-20%"],
            fontSize: 20,
            color: "#666",
          },
          detail: {
            valueAnimation: true,
            width: "60%",
            lineHeight: 20,
            borderRadius: 8,
            offsetCenter: [0, "0%"],
            fontSize: 30,
            fontWeight: "bold",
            formatter: `{value|${gaugeValue}}\n{unit|%}`,
            rich: {
              value: {
                fontSize: 30,
                fontWeight: "bold",
                color: "#333",
              },
              unit: {
                fontSize: 16,
                color: "#666",
                padding: [0, 0, -10, 10],
              },
            },
          },
          data: [
            {
              value: gaugeValue,
              name: props.progressLabel || "完成率",
            },
          ],
        } as GaugeSeriesOption,
      ],
    };
  }
  
  // 水球模式使用 Canvas 绘制，不返回 ECharts 配置
  if (props.liquidMode) {
    return {} as echarts.EChartsOption;
  }
  
  // 进度环模式
  if (props.progressMode) {
    const progressValue = data.length > 0 ? data[0].value : 0;
    const formattedPercent = formatPercent(progressValue, props.progressMax);
    
    return {
      color: props.colors,
      legend: {
        show: false,
      },
      tooltip: {
        trigger: "item",
        formatter: () => {
          return `${formattedPercent}%`;
        },
      },
      series: [
        {
          type: "pie",
          radius: [props.innerRadius, props.radius],
          center: ["50%", "50%"],
          startAngle: 90, // 从顶部开始
          clockwise: true,
          data: [
            {
              value: progressValue,
              name: "进度",
              itemStyle: {
                color: {
                  type: "linear",
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    { offset: 0, color: props.progressColor[0] },
                    { offset: 1, color: props.progressColor[1] },
                  ],
                },
              },
            },
            {
              value: Math.max(0, props.progressMax - progressValue),
              name: "剩余",
              itemStyle: {
                color: props.progressBgColor,
              },
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
            },
          ],
          label: {
            show: true,
            position: "center",
            formatter: `{label|${props.progressLabel}}\n{percent|${formattedPercent}%}`,
            rich: {
              label: {
                fontSize: 16,
                color: "#666",
                lineHeight: 24,
              },
              percent: {
                fontSize: 32,
                fontWeight: "bold",
                color: "#333",
                lineHeight: 40,
              },
            },
          },
          emphasis: {
            disabled: true,
          },
        } as PieSeriesOption,
      ],
    };
  }
  
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
        orient: (props.legendPosition === "left" || props.legendPosition === "right" ? "vertical" : "horizontal") as "vertical" | "horizontal",
        left: props.legendPosition === "left" ? "left" : props.legendPosition === "right" ? "right" : "center",
        top: props.legendPosition === "top" ? "top" : props.legendPosition === "bottom" ? "bottom" : "middle",
        formatter: (name: string) => {
          const item = data.find((d) => d.name === name);
          if (!item) return name;
          
          const percent = formatPercent(item.value, totalValue.value);
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
            const percent = formatPercent(params.value, totalValue.value);
            return `{name|${params.name}}\n{value|${params.value}}\n{percent|${percent}%}`;
          }
          
          let formatterText = "";
          if (props.showValue) {
            formatterText += `${params.value}`;
          }
          if (props.showPercent) {
            if (formatterText) formatterText += "\n";
            const percent = formatPercent(params.value, totalValue.value);
            formatterText += `${percent}%`;
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
        let tooltipText = `${params.name}<br/>${params.value}个`;
        if (props.tooltipShowPercent) {
          const percent = formatPercent(params.value, totalValue.value);
          tooltipText += ` (${percent}%)`;
        }
        return tooltipText;
      },
    },
    series: [
      {
        type: "pie",
        radius: [props.innerRadius, props.radius],
        center: getPieCenter(),
        data: seriesData,
        roseType: props.roseType, // 支持玫瑰图
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
  // 水球模式使用 Canvas 绘制
  if (props.liquidMode) {
    // 停止之前的动画
    if (liquidAnimationId !== null) {
      cancelAnimationFrame(liquidAnimationId);
      liquidAnimationId = null;
    }
    nextTick(() => {
      drawLiquidChart();
    });
    return;
  }
  
  // 停止水球动画（如果从水球模式切换到其他模式）
  if (liquidAnimationId !== null) {
    cancelAnimationFrame(liquidAnimationId);
    liquidAnimationId = null;
  }

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
    // 检查是否是空配置（水球模式）
    if (option && Object.keys(option).length > 0) {
      chartInstance.setOption(option);
    }
  } catch (error) {
    console.error("ChartPie initialization error:", error);
  }
};

// 更新图表
const updateChart = () => {
  // 水球模式使用 Canvas 绘制
  if (props.liquidMode) {
    drawLiquidChart();
    return;
  }

  if (!chartInstance) {
    // 如果实例不存在，尝试重新初始化
    initChart();
    return;
  }
  try {
    const option = buildOption();
    // 检查是否是空配置（水球模式）
    if (option && Object.keys(option).length > 0 && !props.liquidMode) {
      chartInstance.setOption(option, true);
    }
  } catch (error) {
    console.error("ChartPie update error:", error);
  }
};

// 响应式调整
useResizeObserver(chartContainer, () => {
  if (props.liquidMode) {
    drawLiquidChart();
  } else if (chartInstance) {
    chartInstance.resize();
  }
});

// 监听水球容器尺寸变化
useResizeObserver(liquidContainer, () => {
  if (props.liquidMode) {
    drawLiquidChart();
  }
});

// 监听尺寸变化
watch(
  () => [props.width, props.height],
  () => {
    if (props.liquidMode) {
      drawLiquidChart();
    } else if (chartInstance) {
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
    props.percentPrecision,
    props.tooltipShowPercent,
    props.progressMode,
    props.progressMax,
    props.progressColor,
    props.progressBgColor,
    props.progressLabel,
    props.gaugeMode,
    props.gaugeMin,
    props.gaugeMax,
    props.gaugeColor,
    props.liquidMode,
    props.liquidColor,
    props.liquidBgColor,
    props.liquidRadius,
    props.roseType,
    props.options,
  ],
  () => {
    updateChart();
  },
  { deep: true }
);

onBeforeUnmount(() => {
  // 清理动画
  if (liquidAnimationId !== null) {
    cancelAnimationFrame(liquidAnimationId);
    liquidAnimationId = null;
  }
  
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
  
  &--liquid {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    // 确保容器是正方形
    aspect-ratio: 1;
    max-width: 100%;
    max-height: 100%;
  }
  
  &__liquid-canvas {
    display: block;
    // 确保 canvas 保持正方形，不会被拉伸
    width: auto !important;
    height: auto !important;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  &__liquid-label {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    pointer-events: none;
    z-index: 10;
  }
  
  &__liquid-label-text {
    font-size: 16px;
    color: #666;
    line-height: 24px;
    margin-bottom: 4px;
  }
  
  &__liquid-percent {
    font-size: 32px;
    font-weight: bold;
    color: #333;
    line-height: 40px;
  }
}
</style>

