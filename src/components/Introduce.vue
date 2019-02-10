<template>
  <section>
    <div class="intro">
      <div :class="`luke ${mainColor}-border`"></div>
      <h1 class="title">{{ newmsg }}</h1>
      <p>{{data[1]}}</p>
    </div>
    <contact></contact>
  </section>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
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
    ...mapState({
      mainColor : 'mainColor'
    }),
    newmsg() {
      return this.msg.replace('OOO', this.data[0])
    }
  }
}
</script>
