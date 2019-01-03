<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <introduce></introduce>
    <workexperience></workexperience>
    <socialexperience></socialexperience>
    <skills></skills>
    <contact></contact>
  </div>
</template>

<script>
import introduce from './components/Introduce.vue'
import workexperience from './components/WorkExperience.vue'
import socialexperience from './components/SocialExperience.vue'
import skills from './components/Skills.vue'
import contact from './components/Contact.vue'

export default {
  name: 'app',
  components: { introduce, workexperience
    , socialexperience, skills, contact },
  data () {
    return {
      msg: '안녕하세요. 유연한 개발자를 꿈꾸는 김한욱입니다.'
    }
  }
}
</script>
