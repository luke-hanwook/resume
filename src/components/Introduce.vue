<template>
  <section>
    <div class="intro">
      <div class="luke"></div>
      <h1 class="title">{{ newmsg }}</h1>
      <p>{{data[1]}}</p>
    </div>
    <contact></contact>
  </section>
</template>

<script>
import {introduction} from '../api'
import contact from './Contact.vue'

export default {
  data() {
    return {
      data: '',
      msg: `안녕하세요. OOO입니다.`
    }
  },
  components: { contact },
  created() {
    introduction.fetch().then(list=>{
      this.data = list
    })
  },
  computed: {
    newmsg() {
      return this.msg.replace('OOO', this.data[0])
    }
  }
}
</script>
