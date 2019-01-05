<template>
  <div class="">
    <div class="" v-for="d in data">
      <h3>{{d.title}}</h3>
      <span>{{d.period}}</span>
      <p>{{d.description}}</p>
    </div>
  </div>
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
