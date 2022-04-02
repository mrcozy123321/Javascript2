<template>
  <Navbar/>
  <Carousel/>
  <Testimonials/>
  <Footer/>
</template>

<script>
import Navbar from './components/navigation/Navbar.vue'
import Footer from './components/navigation/Footer.vue'
import Carousel from './components/Carousel.vue'
import Testimonials from './components/Testimonials/Testimonial.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Carousel,
    Testimonials
  }
}
</script>

<style>

</style>
