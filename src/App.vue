<template>
  <div class="three-canvas" ref="threeTarget"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { TEngine } from "./assets/ts/TEngine";

import { basicObjectList } from "./assets/ts/TBasicObject";
import { LightsList } from "./assets/ts/Tlights";
import { helperList } from "./assets/ts/THelper";
import { codeModelList } from "./assets/ts/TCodeModel";
// import { framePromise } from './assets/ts/TLoadModel'
import { groupPromise } from "./assets/ts/TGroup";

export default defineComponent({
  setup() {
    const threeTarget = ref(null);

    onMounted(() => {
      const TE = new TEngine(threeTarget.value!);
      TE.addObject(...basicObjectList);
      TE.addObject(...LightsList);
      TE.addObject(...helperList);
      TE.addObject(...codeModelList);

      groupPromise.then((group) => {
        TE.addObject(group);
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
