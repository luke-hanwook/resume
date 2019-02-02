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
  metaInfo: {
    title: '웹 이력서 - 김한욱',
    meta: [
      {'http-equiv': 'Content-Type', content: 'text/html; charset=utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {name: 'description', content: '주니어 개발자 김한욱의 웹 이력서 입니다.'},
      {property: 'og:title', content: '웹 이력서 - 김한욱'},
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: 'https://luke-hanwook.github.io/resume/'},
      // {property: 'og:image', content: ''},
      {property: 'og:description', content: '주니어 개발자 김한욱의 웹 이력서 입니다.'}
    ]
  },
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
