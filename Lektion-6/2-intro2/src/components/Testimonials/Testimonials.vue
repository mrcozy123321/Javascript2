<template>
<div class="container mt-5">


<!--Section: Content-->
<section class="team-section text-center dark-grey-text">

  <!-- Section heading -->
  <h3 class="font-weight-bold mb-4 pb-2">Testimonials</h3>
  <!-- Section description -->
  <p class="text-center w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam
    eum porro a pariatur veniam.</p>

  <!--Grid row-->
  <div class="row text-center">

    <TestimonialCard />
    <TestimonialCard />
    <TestimonialCard />

  </div>
  <!--Grid row-->

</section>
<!--Section: Content-->


</div>
</template>

<script>
import TestimonialCard from './TestimonialCard.vue'
export default {
  components: { TestimonialCard }
  name: 'TestimonialComponents'
}
</script>

<style>

</style>