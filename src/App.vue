<template>
  <div class="three-canvas" ref="threeTarget"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref } from "vue";
import { TEngine } from "./assets/ts/TEngine";
import { message } from "ant-design-vue";
import { DefaultLoaderManager } from "./assets/ts/TLoaderManager";

import { basicObjectList } from "./assets/ts/TBasicObject";
import { LightsList } from "./assets/ts/Tlights";
import { helperList } from "./assets/ts/THelper";
import { codeModelList } from "./assets/ts/TCodeModel";
// import { framePromise } from './assets/ts/TLoadModel'
import { groupPromise, groupListPromise } from "./assets/ts/TGroup";
import { pointsPartical } from "./assets/ts/TPoints";
import { testSprite } from "./assets/ts/TSprite";

const key = "tips";
const tipsBox = reactive(DefaultLoaderManager.tipsBox);
DefaultLoaderManager.tipsBox = tipsBox;
const tips = message.loading({
  content: () =>
    `正在加载资源：${Math.round(
      ((tipsBox.success + tipsBox.error) / tipsBox.total) * 100
    )}%`,
  key,
  duration: 0,
});
DefaultLoaderManager.addEventListener("loaded", () => {
  tips();
});

export default defineComponent({
  setup() {
    const threeTarget = ref(null);

    onMounted(() => {
      const TE = new TEngine(threeTarget.value!);
      TE.addObject(...basicObjectList);
      TE.addObject(...LightsList);
      TE.addObject(...helperList);
      TE.addObject(...codeModelList);
      TE.addObject(pointsPartical);
      // TE.addObject(testSprite);

      // groupPromise.then((group) => {
      //   TE.addObject(group);
      // });

      groupListPromise.then((groupList) => {
        TE.addObject(...groupList);
      });
    });

    return {
      threeTarget,
    };
  },
});
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
