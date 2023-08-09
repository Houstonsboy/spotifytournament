<template>
  <div class="home">
    <nav>
    
    <router-link to="/about">Olympus</router-link>
    <router-link to="/Menu">Menu</router-link>  
    <router-link to="/RodeoVsAstroworld">RodeoVsAstroworld</router-link> 
    <router-link to="/LoadingDock">LoadingDock</router-link> 
    
    
  </nav>

  <h1>Welcome</h1>
  <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6krYS8KtmNAYyb5uTZiYW4?utm_source=generator" width="60%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods:{
    playfunction()
    {
      
    }
  }
}
</script>
<style>

.home{
color: #00ffff;
  background-color: #6011e7;
  background-image: linear-gradient(to right, transparent 1px, #000 1px),
                    linear-gradient(to bottom, transparent 1px, #000 1px);
  background-size: 20px 20px; /* Adjust the size of the grid cells */
}
</style>