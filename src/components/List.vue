<template lang="html">
  <div class="">
      <h5>{{title}}</h5>
      <ul>
        <li v-for="d in data">
          <p>{{d}}</p>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: ['title', 'data']
}
</script>
