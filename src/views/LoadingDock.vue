<template>
  <div>
    <h1>TournamentView</h1>
    TournamentView
    <component :is="currentComponent" />
  </div>
</template>

<script>
import BlondVsAfterHours from '@/components/BlondVsAfterHours.vue';
import RodeoVsAstroWorld from '@/components/RodeoVsAstroworld.vue';
import TravisScottVsAsapRocky from '@/components/TravisScottVsAsapRocky.vue';

export default {
  data() {
    return {
      currentComponent: null,
    };
  },
  components: {
    BlondVsAfterHours,
    RodeoVsAstroWorld,
    TravisScottVsAsapRocky,
  },
  created() {
    this.$on('load-component', this.loadComponent);
  },
  methods: {
    loadComponent(componentName) {
      // Set the currentComponent to the corresponding component
      switch (componentName) {
        case 'BlondVsAfterHours':
          this.currentComponent = BlondVsAfterHours;
          break;
        case 'RodeoVsAstroWorld':
          this.currentComponent = RodeoVsAstroWorld;
          break;
        case 'TravisScottVsAsapRocky':
          this.currentComponent = TravisScottVsAsapRocky;
          break;
        default:
          this.currentComponent = null;
          break;
      }
    },
  },
};
</script>
