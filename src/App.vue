<template>
  <div id="app">
    <Header />
    <Home />
    <Skills />
    <About />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Skills from './components/Skills.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Home,
    Skills,
    About,
    Contact,
    Footer
  }
}
</script>

<style>
/* You can add some global styles here or use Tailwind classes in your components */
</style>
