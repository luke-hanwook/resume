<template lang="html">
  <div class="">
    <div class="" v-for="d in data" :key="d.name">
      <span>{{d.name}}</span>
      <span>{{d.url}}</span>
      <span>{{d.type}}</span>
    </div>
  </div>
</template>

<script>
import {contact} from '../api'

export default {
  data() {
    return {
      data: []
    }
  },
  created() {
    console.log('contact')
    contact.fetch().then(list=>{
      this.data = list
    })
  }
}
</script>
