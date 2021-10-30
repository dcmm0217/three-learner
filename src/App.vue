<template>
  <div class="three-canvas" ref="threeTarget"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { TEngine} from './assets/ts/TEngine'

import { basicObjectList } from './assets/ts/TBasicObject'

import { TCanvasTextureEditor } from './assets/ts/TCanvasTextureEditor'

export default defineComponent({
  setup() {
    const threeTarget = ref(null)

    onMounted(() => {
      const TE = new TEngine(threeTarget.value!)
      TE.addObject(...basicObjectList)

      const testCanvas = new TCanvasTextureEditor()
      testCanvas.draw(ctx => {
        ctx.fillStyle = 'blue'

        ctx.beginPath()
        ctx.rect(10, 10, 200, 200) // 画一个矩形路径
        // ctx.strokeStyle = 'red' // 设置笔的描边的颜色
        // ctx.stroke() // 通知笔进行描边
        ctx.fill()
        ctx.closePath()
      
        ctx.translate(100, 100)
        ctx.beginPath()
        ctx.rect(10, 10, 200, 200) // 画一个矩形路径
        ctx.fill()
        ctx.closePath()


      }).preview()
    })

    return {
      threeTarget
    }
  },
})
</script>

<style>
.three-canvas {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
