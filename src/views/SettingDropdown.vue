<template>
  <div class="settingDropdown">
      <div class="label">{{label}}</div>
      <div class="pointer" @click="expand" ref="pointer">
          <div class="spacer">{{value.name}}</div>
          <div class="pointer-ind" :style="{ width: 10 + '%' }">
              <img class="pointer-ind-dropicon" src="../assets/drop-icon.png"/>
          </div>
          <div v-if="optionsOpen" class="optionsList">
              <div v-for="option in options" :key="option.name" @click="select(option)" class="option">{{option.name}}</div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'SettingDropdown',
  props: {
      label: String,
      onValueUpdated: Function,
      value: Object,
      options: Array
  },
  data: function () {
    return {
      optionsOpen: false,
    }
  },
  methods: {
      expand() {
        this.optionsOpen = !this.optionsOpen;
        
      },
      select(option) {
        this.onValueUpdated(option);
      }
  },
  created() {
      this.selectedOption = this.options[0];
  }
}
</script>

<style scoped>
    .settingDropdown {
        width: 100%;
        color: #c7e0f1;

        display: flex;
        align-items: center;

        margin-top: 1rem;
        margin-bottom: 1rem;
    }

    .label {
        flex: 3;
        text-align: right;
    }

    .pointer {
        position: relative;
        flex: 7;
        background-color: #c7e0f1;
        margin-left: 1rem;
        margin-right: 1rem;
        height: 2rem;
        border-radius: 0.3rem;

        cursor: pointer;

        display: flex;
    }

    .spacer {
        flex: 1;

        display: flex;
        justify-content: center;
        color: #004e53;
        align-items: center;
    }

    .pointer-ind {
        background-color: #00959e;
        flex-grow: 0;
        height: 100%;
        border-radius: 0.3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pointer-ind-dropicon {
        width: 50%;
    }
    
    .optionsList {
        position: absolute;
        top: 30px;
        width: 90%;
        z-index: 100;
        border-radius: .3rem;
        overflow: hidden;
    }

    .option {
        background-color: #b1d2e9;
        height: 2rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #004e53;
        border-width: 2px;
        border-color: #c7e0f1;
        border: solid 1px #c7e0f1;
    }

    .option:hover {
        background-color: #a1bed3;
    }
</style>
