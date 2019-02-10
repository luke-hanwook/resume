<template>
  <article>
    <div class="row not-flex-container" v-for="d in data" :key="d.title">
      <h3 class="title">{{d.title}}</h3>
      <span>{{d.period}}</span>
      <p>{{d.description}}</p>
    </div>
  </article>
</template>

<script>
import {social} from '../api'

export default {
  data() {
    return {
      data: []
    }
  },
  created() {
    console.log('social')
    social.fetch().then(list=>{
      this.data = list
    })
  }
}
</script>
