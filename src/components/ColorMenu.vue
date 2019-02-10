<template>
  <div class="color"
    @mouseover="show = true"
    @mouseleave="show = false"
    @click="onClickSetColor">

    <!-- <div v-if="show"> -->
      <colorcircle
        v-for="(item, index) in colorList"
        :circle-id="item"
        :circle-name="`fade${colorList.length - index}`"
        :is-show="show"
        :key="item">
      </colorcircle>
    <!-- </div> -->

    <span class="fixed-color-circle"></span>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import colorcircle from './ColorCircle.vue'

export default {
  data() {
    return {
      show: false,
      colorList: ['primary', 'mars', 'saturn', 'neptune']
    }
  },
  components: {colorcircle},
  methods: {
    ...mapMutations([
      'CHANGE_MAIN_COLOR'
    ]),
    onClickSetColor({target}) {
      if(target.id) this.CHANGE_MAIN_COLOR(target.id)
    }
  }
}
</script>
