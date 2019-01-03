<template>
  <p>{{data}}</p>
</template>

<script>
import Introduce from '../models/Introduce.js'

export default {
  data() {
    return {
      data: ''
    }
  },
  created() {
    Introduce.list().then(data=>{
      this.data = data
    })
  }
}
</script>
