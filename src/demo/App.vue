<template>
  <ResponsivePage></ResponsivePage>
</template>

<script setup lang="ts">
import ResponsivePage from './ResponsivePage.vue'
</script>

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
