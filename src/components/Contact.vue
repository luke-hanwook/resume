<template lang="html">
  <article>
    <div class="contact" v-for="d in data" :key="d.name">
      <span>{{d.name}}</span>
      <a :class="`${mainColor}-font`" :href="d.url" v-if="d.type === 'url'" target="_blank">{{d.url}}</a>
      <a :class="`${mainColor}-font`" :href="`mailto:${d.url}`" v-else>{{d.url}}</a>
    </div>
  </article>
</template>

<script>
import {contact} from '../api'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      data: []
    }
  },
  computed: {
    ...mapState({
      mainColor : 'mainColor'
    })
  },
  created() {
    console.log('contact')
    contact.fetch().then(list=>{
      console.log(list)
      this.data = list
    })
  }
}
</script>
