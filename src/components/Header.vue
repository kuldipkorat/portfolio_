<template>
    <header class="fixed top-0 left-0 w-full p-8 bg-bg-color flex justify-between items-center z-10">
      <a href="#" class="text-white text-2xl font-bold">Portfolio</a>
      <i class="bx bx-menu text-4xl text-white lg:hidden cursor-pointer" @click="toggleMenu"></i>
      <nav :class="['navbar', { 'hidden': !menuOpen }, 'lg:flex', 'gap-x-20']">
        <a href="#home" class="nav-link text-white" @click="toggleMenu">Home</a>
        <a href="#skill" class="nav-link text-white" @click="toggleMenu">Skills</a>
        <a href="#about" class="nav-link text-white" @click="toggleMenu">About</a>
        <a href="#contact" class="nav-link text-white" @click="toggleMenu">Contact</a>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuOpen: false,
      }
    },
    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen;
      }
    }
  }
  </script>
  
  <style scoped>
  .navbar {
    transition: all 0.3s ease-in-out;
  }
  </style>
  