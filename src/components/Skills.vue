<template>
  <div class="">
    <div class="" v-for="data in skills">
      <h3>{{data.title}}</h3>
      <div class="" v-for="desc in data.description">
        <h5 v-if="desc.name">{{desc.name}}</h5>
        <span v-if="desc.level">{{desc.level}}</span>
        <div class="" v-if="desc.description.length > 1">
          <ul>
            <li v-for="d in desc.description">
              <p>{{d}}</p>
            </li>
          </ul>
        </div>
        <div class="" v-else>
          <p>{{desc.description[0]}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {skills} from '../api'

export default {
  data() {
    return {
      skills: []
    }
  },
  created() {
    console.log('skills')
    skills.fetch().then(list=>{
      this.skills = list
    })
  }
}
</script>
