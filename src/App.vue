<template>
  <div id="app" :style="styleForApp">
    <div @click="collapse" :class="backdropClass"/>
    <div :class="drawerClass">
      <Drawer/>
    </div>
    <div :class="addClass">
        <AddOverlay :isExpenses="isExpense"/>
    </div>
    <div class="topBar">
      <img @click="expand" class="sidebarIcon" src="./assets/sidebar-icon.png"/>
      <router-link to="/" class="logo">
        <div class="logo1">Budget</div>
        <div class="logo2">Buddy</div>
      </router-link>
      <div class="spacer"/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Drawer from './views/Drawer'
import AddOverlay from './views/AddOverlay'
export default {
  name: 'App',
  components: {
    Drawer,
    AddOverlay
  },
  methods: {
    expand() {
      this.$store.commit("expandDrawer");
    },
    collapse() {
      this.$store.commit("collapseDrawer");
    }
  },
  computed: {
    drawerClass() {
      return this.$store.state.drawerExpanded ? "sideDrawerExpanded" : "sideDrawer";
    },
    backdropClass() {
      return this.$store.state.drawerExpanded ? "backdropVisible" : "backdropHidden";
    },
    addClass() {
      return this.$store.state.isAddVisible ? "addVisible" : "addHidden";
    },
    isExpense() {
      return this.$store.state.isAddExpense;
    },
    settings() {
      return this.$store.state.settings;
    },
    calculateBackground() {
      if (this.settings.contrast && (this.settings.theme.name == 'default' || this.settings.theme.name == 'dark')) return 'gray';
      if (this.settings.contrast && (this.settings.theme.name == 'light')) return 'white';
      if (!this.settings.contrast && (this.settings.theme.name == 'default')) return '#ddecf7';
      if (!this.settings.contrast && (this.settings.theme.name == 'dark')) return '#163f5e';
      if (!this.settings.contrast && (this.settings.theme.name == 'light')) return '#ddecf7';
      
      return null;
    },
    styleForApp() {
      return {
        backgroundColor: this.calculateBackground
      }
    }
  }
}
</script>

<style>
@import url(//db.onlinewebfonts.com/c/0a6ee448d1bd65c56f6cf256a7c6f20a?family=Bahnschrift);

  #app {
    font-family: Bahnschrift, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    background-color: #ddecf7;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }

  body, html {
    margin: 0;
    padding: 0;

    height: 100%;
  }

</style>

<style scoped>

  .topBar {
    width: 100%;
    height: 10vh;
    background-color: #004e53;
    display: flex;
    align-items: center;
  }

  .logo {
    display: flex;
    justify-content: center;
    font-size: 4vh;
    text-decoration: none;
  }

  .logo1 {
    color: #90c1e4;
  }

  .logo2 {
    color: #e9fdff;
  }

  .sidebarIcon {
    height: 30%;
    margin-left: 4vh;
    margin-right: 4vh;
    cursor: pointer;
  }

  .sidebarIcon:hover {
    content: url("./assets/sidebar-icon-hover.png");
  }

  .sideDrawer, .sideDrawerExpanded {
    position: absolute;

    height: 100%;
    min-width: 50%;
    max-width: 90%;
    background-color: #004e53;
    transform: translateX(-100%);

    transition: transform 1s ease-in-out;
  }

  .sideDrawerExpanded {
    transform: translateX(0%);
  }

  .backdropVisible, .backdropHidden {
    position: absolute;
    pointer-events: none;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    transition: opacity 1s ease-in-out;
  }

  .backdropHidden {
    opacity: 0;
  }

   .backdropVisible {
     pointer-events: all;
   }

  .spacer {
    flex: 1;
  }

  .addVisible, .addHidden {
        position: absolute;
        width: 100%;
        height: 100%;
        transition: opacity .3s ease-in-out;
    }

    .addVisible {
      opacity: 1;
      pointer-events: all;
    }

    .addHidden {
      opacity: 0;
      pointer-events: none;
    }
</style>

      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/main">About</router-link> -->