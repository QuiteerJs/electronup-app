<script setup lang="ts">
import { init } from 'echarts'

const chartDom = ref<HTMLElement>()

onMounted(() => {
  console.log('chartDom: ', chartDom)

  chartDom.value && init(chartDom.value).setOption({
    graphic: {
      elements: [
        {
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            text: 'Electron Up !',
            fontSize: 80,
            fontWeight: 'bold',
            lineDash: [0, 200],
            lineDashOffset: 0,
            fill: '#c6e6e8',
            stroke: '#c0c4c3',
            lineWidth: 1
          },
          keyframeAnimation: {
            duration: 3000,
            loop: true,
            keyframes: [
              {
                percent: 0.7,
                style: {
                  fill: 'transparent',
                  lineDashOffset: 200,
                  lineDash: [200, 0]
                }
              },
              {
              // Stop for a while.
                percent: 0.8,
                style: {
                  fill: '#648e93'
                }
              },
              {
                percent: 1,
                style: {
                  fill: '#c4d7d6'
                }
              }
            ]
          }
        }
      ]
    }
  })
})
</script>

<template>
  <div ref="chartDom" style="height:600px;" />
</template>

