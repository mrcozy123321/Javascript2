<template>
  <Header />
  <Carousel />
  <div class="container">
    <div class="hej">Hej i App</div>

    <CardDeck class="mt-5"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Carousel from './components/Carousel.vue'
import CardDeck from './components/cards/CardDeck.vue'
export default {
  components: { Header, Carousel, CardDeck },
}
</script>

<style scoped>
  .hej {
    color: blue;
  }
</style>