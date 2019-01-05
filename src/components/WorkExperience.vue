<template>
  <div class="">
    <div v-for="d in data">
      <div class="row-left">
        <h3>{{d.company}}</h3>
        <span>{{d.sub}}</span>
        <span>{{d.position}}</span>
        <span>{{d.period}}</span>
        <span>{{d.period_num}}</span>
      </div>
      <div class="">
        {{d.description}}
      </div>
      <div class="row-right">
        <div class="" v-for="p in d.project">
          <h3>{{p.name}}</h3>
          <span>{{p.description}}</span>
          <h5>{{title[0]}}</h5>
          <OneLineCard v-for="task in p.works" :text="task" :key="task"></OneLineCard>
          <h5>{{title[1]}}</h5>
          <OneLineCard v-for="s in p.skill_stack" :text="s" :key="s"></OneLineCard>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
import {career} from '../api'
import OneLineCard from './OneLineCard.vue'

export default {
  data() {
    return {
      title: ['한 일', '기술 스택'],
      data: []
    }
  },
  components: { OneLineCard },
  created() {
    console.log('career')
    career.fetch().then(list=>{
      this.data = list
    })
  }
}
</script>
