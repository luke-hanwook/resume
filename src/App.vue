<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <navbar></navbar>
    <introduce v-if="componentType === 'introduce'"></introduce>
    <career v-if="componentType === 'career'"></career>
    <skills v-if="componentType === 'skills'"></skills>
    <contact v-if="componentType === 'contact'"></contact>
  </div>
</template>

<script>
import introduce from './components/Introduce.vue'
import career from './components/Career.vue'
import skills from './components/Skills.vue'
import contact from './components/Contact.vue'
import navbar from './components/NavBar.vue'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: { introduce, career, skills, contact, navbar },
  data () {
    return {
      msg: '안녕하세요. 유연한 개발자를 꿈꾸는 김한욱입니다.'
    }
  },
  computed: {
    ...mapState ({
      componentType: 'componentType'
    })
  }

}
</script>
