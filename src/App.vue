<template>
  <div id="app">
    <Header />
    <main class="main-component">
      <transition name="main" mode="out-in">
        <router-view />
      </transition>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/PageFooter.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bungee+Inline&family=Manrope:wght@200;300;400;500;600;700;800&display=swap");

* {
  font-family: "Bungee Inline", cursive;
  font-family: "Manrope", sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

ul,
ol,
li {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  border: none;
  background-color: transparent;
  outline: none;
}

input {
  border: none;
  outline: none;
}

.main-component {
  background: #071e42;
}

.main-enter-active,
.main-leave-active {
  transition: opacity 0.5s;
}
.main-enter,
.main-leave-to {
  opacity: 0;
}
</style>
