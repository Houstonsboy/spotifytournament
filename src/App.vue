<template>
  <div class="header">
    <h1 id="companyname">Honestly NeverMind</h1>
    <nav>
      <router-link to="/">Asgard</router-link>
      <router-link to="/about">Olympus</router-link>
      <router-link to="/DawnFMVsAfterHours">DawnFMVsAfterHours</router-link>
      <router-link to="/RodeoVsAstroworld">RodeoVsAstroworld</router-link>
      <router-link to="/LoadingDock">LoadingDock</router-link>
    </nav>
  </div>
  <router-view/>
</template>

<style>
/* Keep existing styles */

.header {
  /* Create a flex container to arrange the elements in a row */
  display: flex;
  align-items: center; /* Vertically center the content */
  padding: 10px 30px; /* Adjust the padding as needed */
  
  
}

#companyname {
  /* Remove float: left; as flex layout will handle the positioning */
  padding: 0px;
  font-size: 30px;
  color: rgb(10, 225, 10);
  margin-right: auto; /* Push the title to the left by using auto margin */
}

nav {
  /* Adjust margin and padding to create space between the title and nav links */
  margin-left: 20px;
  padding: 0;
  display:flex;
  gap:15px;
}



nav a {

  font-weight: bold;
  color: #2c3e50;
  transition: transform 0.3s ease;
  text-decoration: none;
}

nav a:hover {
  transform: scale(1.01);
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
