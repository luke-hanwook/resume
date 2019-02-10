<template>
  <transition :name="circleName">
    <span :id="circleId" v-if="isShow"></span>
  </transition>
</template>

<script>
export default {
  props: ['circleId', 'circleName', 'isShow']
}
</script>
