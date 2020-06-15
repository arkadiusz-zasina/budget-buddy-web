<template>
  <div class="settingBinary">
      <div class="label">{{label}}</div>
      <div class="pointer" ref="pointer">
          <div :class="value ? 'pointer-ind' : 'pointer-ind-disabled'"  @click="setValue(true)" :style="{ width: 50 + '%' }">on</div>
          <div :class="!value ? 'pointer-ind' : 'pointer-ind-disabled'"  @click="setValue(false)" :style="{ width: 50 + '%' }">off</div>
      </div>
  </div>
</template>

<script>

export default {
  name: 'SettingBinary',
  props: {
      label: String,
      onValueUpdated: Function,
      value: Boolean
  },
  methods: {
      setValue(left) {
        this.onValueUpdated(left);
      }
  }
}
</script>

<style scoped>
    .settingBinary {
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
        flex: 7;
        background-color: #c7e0f1;
        margin-left: 1rem;
        margin-right: 1rem;
        height: 2rem;
        border-radius: 0.3rem;

        cursor: pointer;

        display: flex;
    }

    .pointer-ind, .pointer-ind-disabled {
        background-color: #00959e;
        height: 100%;
        width: 30%;
        border-radius: 0.3rem;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pointer-ind-disabled {
        background-color: transparent;
        color: #004e53;
    }
</style>
