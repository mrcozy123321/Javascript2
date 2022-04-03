<template>
  <div class="row row-cols-1 row-cols-md-3 g-4">

    <Card :imgURL='imgOne' title="HEJ" body="hej på dig du" />
    <Card imgURL='img/bild2.jpg' title="Rubrik 2" body="awufpaiugwfgapwiu" />
    <Card imgURL='img/bild3.jpg' />

  </div>
</template>

<script>
import Card from './Card.vue'
export default {
  components: { Card },
  data() {
    return {
      imgOne: require('@/assets/img/bild1.jpg')
    }
  }
}
</script>

<style>

</style>