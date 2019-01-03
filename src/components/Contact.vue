<template lang="html">
  <div class="row">
    <div class="" v-for="d in data">
      <span>{{d.name}}</span>
      <span>{{d.url}}</span>
      <span>{{d.type}}</span>
    </div>
  </div>
</template>

<script>
import Contact from '../models/Contact.js'
export default {
  data() {
    return {
      data: []
    }
  },
  created() {
    Contact.list().then(data=>{
      this.data = data
    })
  }
}
</script>
