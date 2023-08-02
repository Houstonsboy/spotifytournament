<template>
    <div>
      <button @click="loadComponent('BlondVsAfterHours')">BlondVsAfterHours</button>
      <button @click="loadComponent('RodeoVsAstroWorld')">RodeoVsAstroWorld</button>
      <button @click="loadComponent('TravisScottVsAsapRocky')">TravisScottVsAsapRocky</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      loadComponent(componentName) {
        this.$emit('load-component', componentName);
      },
    },
  };
  </script>
  