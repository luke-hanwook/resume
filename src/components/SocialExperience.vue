<template>
  <div class="row">
    <div class="" v-for="d in data">
      <h3>{{d.title}}</h3>
      <span>{{d.period}}</span>
      <p>{{d.description}}</p>
    </div>
  </div>
</template>

<script>
import SocialExperience from '../models/SocialExperience.js'

export default {
  data() {
    return {
      data: []
    }
  },
  created() {
    SocialExperience.list().then(data=>{
      this.data = data
    })
  }
}
</script>
