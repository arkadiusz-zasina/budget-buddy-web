<template>
  <div class="main">
    <MainMobile v-if="isMobile"/>
    <MainStandard v-if="!isMobile"/>
  </div>
</template>

<script>

import MainMobile from './MainMobile'
import MainStandard from './MainStandard'
export default {
  name: 'Main',
  components: {
    MainMobile,
    MainStandard
  },
  created() {
    this.calculateIfMobile();
    window.addEventListener("resize", this.onWindowResize);
  },
  methods: {
    calculateIfMobile() {
      if (this.$store.state.isMobileVersion != window.innerWidth < 700);
        this.$store.commit("setMobileVersion", window.innerWidth < 700);
      return window.innerWidth < 700; 
    },
    onWindowResize() {
      this.calculateIfMobile();
    }
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobileVersion;
    }
  }
}
</script>


