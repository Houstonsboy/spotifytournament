<template>
 
  <nav>
    <router-link to="/">Asgard</router-link> 
    <router-link to="/about">Olympus</router-link>
    <router-link to="/Menu">Menu</router-link>  
    <router-link to="/testpage">Valhalla</router-link> 
    <router-link to="/LoadingDock">LoadingDock</router-link> 
    
    
  </nav>
  
  <h1 id="companyname">Honestly NeverMind</h1>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
  
 
}


nav {
  padding: 30px;
  float:right;
  
}
#companyname{
  float:left;
  padding:0px;
  font-size:30px;
  color:rgb(10, 225, 10);
}
router-link{
   margin:30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  margin-right:20px;
  transition: transform 0.3s ease;
    text-decoration:none;
}
nav a:hover{
  transform:scale(1.01);
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
