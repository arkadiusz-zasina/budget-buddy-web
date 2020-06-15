<template>
  <div class="settingLinear">
      <div class="label">{{label}}</div>
      <div class="pointer" @click="setValue" ref="pointer">
          <div class="pointer-ind" :style="{ width: value + '%' }"/>
      </div>
  </div>
</template>

<script>

export default {
  name: 'SettingLinear',
  props: {
      label: String,
      onValueUpdated: Function,
      value: Number
  },
  methods: {
      setValue(e) {
        let widthPrc = e.offsetX / this.$refs.pointer.clientWidth * 100;
        this.onValueUpdated(Math.round(widthPrc));
      }
  }
}
</script>

<style scoped>
    .settingLinear {
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
    }

    .pointer-ind {
        background-color: #00959e;
        height: 100%;
        width: 30%;
        border-radius: 0.3rem;
    }
</style>
