<template>
  <div class="drawer">
    <div class="topRow">
        <div class="topRow-header">Adjustment settings</div>
        <img @click="collapse" class="topRow-icon" src="../assets/sidebar-icon.png"/>
    </div>
    <div class="settings">
        <SettingBinary label="High contrast" :value="settings.contrast" :onValueUpdated="onContrastChanged" />
        <SettingDropdown label="Theme" :value="settings.theme" :onValueUpdated="onThemeChanged" :options="[{name: 'default'}, {name: 'light'}, {name: 'dark'}]"/>
        <SettingLinear label="Line lengths" :value="settings.lineLengths" :onValueUpdated="onLineLengthsChanged"/>
        <SettingLinear label="Text size" :value="settings.textSize" :onValueUpdated="onTextSizeChanged"/>
        <SettingDropdown label="Font" :value="settings.font" :onValueUpdated="onFontChanged" :options="[{name: 'default'}, {name: 'Arial'}, {name: 'Georgia'}, {name: 'Calibri'}]"/>
        <SettingBinary label="Bold font" :value="settings.bold" :onValueUpdated="onBoldChanged"/>
        <SettingLinear label="Line spacing" :value="settings.lineSpacing" :onValueUpdated="onLineSpacingChanged"/>
        <SettingLinear label="Letter spacing" :value="settings.letterSpacing" :onValueUpdated="onLetterSpacingChanged"/>
        <SettingLinear label="Word spacing" :value="settings.wordSpacing" :onValueUpdated="onWordSpacingChanged"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import SettingLinear from './SettingLinear'
import SettingBinary from './SettingBinary'
import SettingDropdown from './SettingDropdown'
export default {
  name: 'Drawer',
  components: {
      SettingLinear,
      SettingBinary,
      SettingDropdown
  },
  methods: {
    collapse() {
      this.$store.commit("collapseDrawer");
    },
    onContrastChanged(value) {
      this.$store.commit("setContrast", value);
    },
    onBrightnessChanged(value) {
      this.$store.commit("setBrightness", value);
    },
    onLineLengthsChanged(value) {
      this.$store.commit("setLineLengths", value);
    },
    onTextSizeChanged(value) {
      this.$store.commit("setTextSize", value);
    },
    onLineSpacingChanged(value) {
      this.$store.commit("setLineSpacing", value);
    },
    onLetterSpacingChanged(value) {
      this.$store.commit("setLetterSpacing", value);
    },
    onWordSpacingChanged(value) {
      this.$store.commit("setWordSpacing", value);
    },
    onBoldChanged(value) {
      this.$store.commit("setBold", value);
    },
    onThemeChanged(value) {
      this.$store.commit("setTheme", value);
    },
    onColorblindModeChanged(value) {
      this.$store.commit("setColorblindMode", value);
    },
    onFontChanged(value) {
      this.$store.commit("setFont", value);
    },
  },
  computed: {
    settings() {
      return this.$store.state.settings
    },
  }
}
</script>

<style scoped>
    .drawer {
        width: 100%;
        height: 100%;
        z-index: 1000;
        overflow: auto;
    }

    .topRow {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4%;
        margin-bottom: 2rem;
    }

    .topRow-header {
        color: #90c1e4;
        font-size: 2rem;
    }

    .topRow-icon {
        height: 20px;
        cursor: pointer;
    }

    .settings {
        width: 90%;
    }

    .topRow-icon:hover {
    content: url("../assets/sidebar-icon-hover.png");
  }
</style>
