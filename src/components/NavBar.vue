<template lang="html">
  <nav>
    <ul @click.prevent="change">
      <li>
        <div class="nav-tab">
          Introduction
        </div>
      </li>
      <li>
        <div class="nav-tab">
          Career
        </div>
      </li>
      <li>
        <div class="nav-tab">
          Skills
        </div>
      </li>
    </ul>
    <colormenu></colormenu>
  </nav>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import colormenu from './ColorMenu.vue'

export default {
  computed: {
    ...mapState({
      mainColor : 'mainColor'
    })
  },
  components: {colormenu},
  methods: {
    ...mapMutations ([
      'CHANGE_COMPONENT'
    ]),
    change(e) {
      this.CHANGE_COMPONENT(e.target.innerHTML.trim().toLowerCase())
    }
  }
}
</script>
