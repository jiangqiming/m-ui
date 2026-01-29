<script setup name="ResponsivePage">
import { debounce } from "lodash";

const style = ref({})
const useResponsive = () => {
    // 基准分辨率
    const baseWidth = 1920
    const baseHeight = 1080
    const style = ref({
        width: `${baseWidth}px`,
        height: `${baseHeight}px`,
        transform: 'scale(1)', // 默认不缩放
        'transform-origin': 'left top', // 重要
    })

    // 获取缩放比例
    const getScale = () => {
        // console.log(window.innerHeight, window.innerWidth)
        const w = window.innerWidth / baseWidth
        // console.log('window.innerWidth: ', window.innerWidth)
        // console.log('w: ', w)
        const h = window.innerHeight / baseHeight
        // console.log('window.innerHeight: ', window.innerHeight)
        // console.log('h: ', h)
        // return w < h ? w : h
        return [w, h]
    }

    // 设置缩放比例
    const setScale = () => {
        style.value.transform = `scale(${getScale()[0]},${getScale()[1]})`
    }

    onMounted(() => {
        setScale()
        window.addEventListener('resize', debounce(setScale, 100))
    })
    onUnmounted(() => {
        window.removeEventListener('resize', debounce(setScale, 100))
    })
    style.value = style
}
</script>

<template>
    <div :style="style" class="w-full h-screen font-medium">
        <slot></slot>
    </div>
</template>

<style lang="less" scoped></style>
