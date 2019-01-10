<template>
  <div id="app">
    <header :class="mainColor">
      <navbar></navbar>
    </header>

    <div class="container">
      <introduce v-if="componentType === 'introduction'"></introduce>
      <career v-if="componentType === 'career'"></career>
      <skills v-if="componentType === 'skills'"></skills>
    </div>
  </div>
</template>

<script>
import introduce from './components/Introduce.vue'
import career from './components/Career.vue'
import skills from './components/Skills.vue'
import navbar from './components/NavBar.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'app',
  components: { introduce, career, skills, navbar },
  data () {
    return {
      msg: '안녕하세요. 김한욱입니다.'
    }
  },
  computed: {
    ...mapState ({
      componentType: 'componentType',
      mainColor : 'mainColor'
    })
  }
}
</script>
