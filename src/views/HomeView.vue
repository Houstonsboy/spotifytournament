<template>
  <div class="home">
    
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Project X"/>
  </div>
  <h1>Hello</h1>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
