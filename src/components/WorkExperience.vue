<template>
  <article>
    <div v-for="d in data" :class="`flex-container row ${mainColor}-line`">
      <div class="flex-item-left">
        <h3 class="title">{{d.company}}</h3>
        <a :class="`${mainColor}-font`" :href="d.url" target="_blank">{{d.sub}}</a>
        <span>{{d.position}}</span>
        <span>{{d.period}}</span>
        <span>{{d.period_num}}</span>
        <p>{{d.description}}</p>
      </div>
      <div class="flex-item-right">
        <div class="" v-for="p in d.project">
          <h4 class="title">{{p.name}}</h4>
          <span>{{p.description}}</span>
          <!-- <div class=""> -->
            <h5 class="title">{{title[0]}}</h5>
            <OneLineCard v-for="task in p.works" :text="task" :key="task"></OneLineCard>
          <!-- </div> -->
          <!-- <div class=""> -->
            <h5 class="title">{{title[1]}}</h5>
            <OneLineCard v-for="s in p.skill_stack" :text="s" :key="s"></OneLineCard>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </article>
</template>
<script>
import {career} from '../api'
import OneLineCard from './OneLineCard.vue'
import { mapState } from 'vuex'


export default {
  data() {
    return {
      title: ['한 일', '기술 스택'],
      data: []
    }
  },
  components: { OneLineCard },
  computed: {
    ...mapState({
      mainColor : 'mainColor'
    })
  },
  created() {
    console.log('career')
    career.fetch().then(list=>{
      this.data = list
    })
  }
}
</script>
