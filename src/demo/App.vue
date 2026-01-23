<template>
  <div class="demo-container">
    <h1>M-UI 组件库演示</h1>

    <section class="demo-section">
      <h2>ChartMapCq 重庆地图（2D）</h2>
      <MChartMapCq
        :data="[
          { name: '北碚区', value: 55 },
          { name: '渝北区', value: 60 },
          { name: '江北区', value: 58 },
          { name: '沙坪坝区', value: 52 },
          { name: '巴南区', value: 48 },
          { name: '荣昌区', value: 45 },
          { name: '大足区', value: 50 },
          { name: '潼南区', value: 30 },
          { name: '铜梁区', value: 25 },
          { name: '江津区', value: 35 },
          { name: '彭水县', value: 20 },
          { name: '云阳县', value: 15 },
          { name: '城口县', value: 5 },
          { name: '巫溪县', value: 8 },
          { name: '开州区', value: 3 },
          { name: '秀山县', value: 2 },
          { name: '綦江区', value: 4 },
          { name: '垫江县', value: -5 },
          { name: '长寿区', value: -8 },
          { name: '涪陵区', value: -3 },
          { name: '奉节县', value: -15 },
          { name: '黔江区', value: -12 },
          { name: '万州区', value: 40 },
          { name: '渝中区', value: 58 },
          { name: '大渡口区', value: 50 },
          { name: '江北区', value: 55 },
          { name: '九龙坡区', value: 52 },
          { name: '南岸区', value: 48 },
          { name: '高新区', value: 60 },
        ]"
        :height="450"
      />
    </section>

    <section class="demo-section">
      <h2>ChartMapCq3D 重庆3D地图</h2>
      <MChartMapCq3D
        :data="[
          { name: '北碚区', value: 55 },
          { name: '渝北区', value: 60 },
          { name: '江北区', value: 58 },
          { name: '沙坪坝区', value: 52 },
          { name: '巴南区', value: 48 },
          { name: '荣昌区', value: 45 },
          { name: '大足区', value: 50 },
          { name: '潼南区', value: 30 },
          { name: '铜梁区', value: 25 },
          { name: '江津区', value: 35 },
          { name: '彭水县', value: 20 },
          { name: '云阳县', value: 15 },
          { name: '城口县', value: 5 },
          { name: '巫溪县', value: 8 },
          { name: '开州区', value: 3 },
          { name: '秀山县', value: 2 },
          { name: '綦江区', value: 4 },
          { name: '垫江县', value: -5 },
          { name: '长寿区', value: -8 },
          { name: '涪陵区', value: -3 },
          { name: '奉节县', value: -15 },
          { name: '黔江区', value: -12 },
          { name: '万州区', value: 40 },
          { name: '渝中区', value: 58 },
          { name: '大渡口区', value: 50 },
          { name: '九龙坡区', value: 52 },
          { name: '南岸区', value: 48 },
        ]"
        :height="500"
        :height-scale="0.15"
        legend-position="right"
      />
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
    Cantarell, "Helvetica Neue", sans-serif;
  background: #f5f5f5;
}

.demo-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.demo-container h1 {
  font-size: 32px;
  margin-bottom: 40px;
  color: #303133;
}

.demo-section {
  background: #fff;
  padding: 30px;
  margin-bottom: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.demo-section h2 {
  font-size: 24px;
  margin-bottom: 20px;
  color: #303133;
}

.demo-row {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  align-items: center;
}

.demo-row .m-input {
  width: 200px;
}
</style>
