<template>
  <div class="row">
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
          <list
            :title="title[0]"
            :data="p.works"
          ></list>
          <list
            :title="title[1]"
            :data="p.skill_stack"
          ></list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WorkExperience from '../models/WorkExperience.js'
import List from './List.vue'

export default {
  data() {
    return {
      title: ['한 일', '기술 스택'],
      data: []
    }
  },
  components: {
    'list' : List
  },
  created() {
    WorkExperience.list().then(list=>{
      this.data = list
    })
  }
}
</script>
