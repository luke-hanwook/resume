<template>
  <section>
    <div class="row not-flex-container" v-for="data in skills">
      <h3 class="title">{{data.title}}</h3>
      <div class="" v-for="desc in data.description">
        <div>
          <h5 class="title" v-if="desc.name">{{desc.name}}</h5>
          <span v-if="desc.level" :class="`level level-${desc.level} ${mainColor}-background`">{{desc.level}}</span>
        </div>
        <OneLineCard v-for="d in desc.description" v-if="desc.description.length > 1" :text="d" :key="d"></OneLineCard>
        <OneLineCard v-else :text="desc.description[0]"></OneLineCard>
      </div>
    </div>
  </section>
</template>

<script>
import OneLineCard from './OneLineCard.vue'
import {skills} from '../api'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      skills: []
    }
  },
  components: {OneLineCard},
  computed: {
    ...mapState({
      mainColor : 'mainColor'
    })
  },
  created() {
    console.log('skills')
    skills.fetch().then(list=>{
      this.skills = list
    })
  }
}
</script>
