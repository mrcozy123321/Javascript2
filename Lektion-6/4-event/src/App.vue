<template>
  <hero-section />

  <div class="container">
    <div class="row">
      <div class="col-6">
        <SignInForm />
      </div>
      <div class="col-6">
        <SignUpForm />
      </div>
    </div>
  </div>
</template>

<script>
import HeroSection from './components/HeroSection.vue'
import SignInForm from './components/SignInForm.vue'
import SignUpForm from './components/SignUpForm.vue'
export default {
  components: { HeroSection, SignInForm, SignUpForm },

}
</script>

<style>

</style>
