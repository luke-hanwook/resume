<template>
  <transition :name="circleName">
    <span :id="circleId"></span>
  </transition>
</template>

<script>
export default {
  props: ['circleId', 'circleName']
}
</script>
