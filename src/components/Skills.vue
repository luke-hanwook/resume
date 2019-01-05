<template>
  <div class="">
    <div class="" v-for="data in skills">
      <h3>{{data.title}}</h3>
      <div class="" v-for="desc in data.description">
        <h5 v-if="desc.name">{{desc.name}}</h5>
        <span v-if="desc.level">{{desc.level}}</span>
        <OneLineCard v-for="d in desc.description" v-if="desc.description.length > 1" :text="d" :key="d"></OneLineCard>
        <OneLineCard v-else :text="desc.description[0]"></OneLineCard>
      </div>
    </div>
  </div>
</template>

<script>
import OneLineCard from './OneLineCard.vue'
import {skills} from '../api'

export default {
  data() {
    return {
      skills: []
    }
  },
  components: {OneLineCard},
  created() {
    console.log('skills')
    skills.fetch().then(list=>{
      this.skills = list
    })
  }
}
</script>
