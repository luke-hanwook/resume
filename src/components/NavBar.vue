<template lang="html">
  <div class="" @click.prevent="change">
    <a>career</a>
    <a>skills</a>
    <a>contact</a>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations ([
      'CHANGE_COMPONENT'
    ]),
    change(e) {
      this.CHANGE_COMPONENT(e.target.text)
    }
  }
}
</script>
