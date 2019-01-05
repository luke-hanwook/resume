<template>
  <div class="">
    <p>{{data}}</p>
  </div>
</template>

<script>
import {introduce} from '../api'

export default {
  data() {
    return {
      data: ''
    }
  },
  created() {
    console.log('introduce')
    introduce.fetch().then(list=>{
      this.data = list
    })
  }
}
</script>
