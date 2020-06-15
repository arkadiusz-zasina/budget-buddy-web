<template>
  <div class="mainStandard" :style="mainStyle">
    <div class="budgetDatePanel">
        <BudgetDatePanel/>
    </div>
    <div class="tableColumns">
        <div class="column">
            <TableStandard :isExpenses="true"/>
            <button class="addButton" :style="styleForButton" @click="openAddExpense">Add expense</button>
        </div>
        <div class="spacer" :style="spacerStyle"/>
        <div class="column">
            <TableStandard :isExpenses="false"/>
            <button class="addButton" :style="styleForButton" @click="openAddIncome">Add income</button>
        </div>
    </div>
  </div>
</template>

<script>

import BudgetDatePanel from './BudgetDatePanel'
import TableStandard from './TableStandard'
export default {
  name: 'MainStandard',
  components: {
      BudgetDatePanel,
      TableStandard
  },
  created() {
  },
  methods: {
      openAddExpense() {
          this.$store.commit("openAdd", true);
      },
      openAddIncome() {
          this.$store.commit("openAdd", false);
      }
  },
  computed: {
      calculatedWidthForMain() {
          return (this.$store.state.settings.lineLengths - 50) / 10;
      },
      calculatedFlexForSpacer() {
          return (this.$store.state.settings.lineLengths - 50) / 50;
      },
      settings() {
        return this.$store.state.settings;
      },
      colorForButton() {
        if (this.settings.contrast && (this.settings.theme.name == 'default' || this.settings.theme.name == 'dark')) return 'white';
        if (this.settings.contrast && (this.settings.theme.name == 'light')) return 'black';
        if (!this.settings.contrast && (this.settings.theme.name == 'default')) return 'white';
        if (!this.settings.contrast && (this.settings.theme.name == 'dark')) return '#e6f0fb';
        if (!this.settings.contrast && (this.settings.theme.name == 'light')) return '#378fce';
        
        return null;
      },
      backgroundColorForButton() {
        if (this.settings.contrast && (this.settings.theme.name == 'default' || this.settings.theme.name == 'dark')) return 'black';
        if (this.settings.contrast && (this.settings.theme.name == 'light')) return 'white';
        if (!this.settings.contrast && (this.settings.theme.name == 'default')) return '#539fd5';
        if (!this.settings.contrast && (this.settings.theme.name == 'dark')) return '#1f5285';
        if (!this.settings.contrast && (this.settings.theme.name == 'light')) return '#fafcfe';
        
        return null;
      },
      styleForButton() {
          return {
              color: this.colorForButton,
              backgroundColor: this.backgroundColorForButton
          }
      },
      mainStyle() {
          return {
              width:  (90 + this.calculatedWidthForMain) + '%'
          }
      },
      spacerStyle() {
          return {
              flex: 1 - this.calculatedFlexForSpacer
          }
      }
  }
}
</script>

<style scoped>
    .mainStandard {
        width: 90%;
        text-align: center;
        margin-left: auto;
        margin-right: auto;

    }
    .tableColumns {
        display: flex;
        width: 100%;
        
    }
    .column {
        flex: 5;
    }
    .addButton {
        font-family: Bahnschrift, Helvetica, Arial, sans-serif;

        font-size: 1.5rem;
        color: white;
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
        background-color: #539fd5;
        border-radius: .2rem;
        border: none;

        margin-top: 3rem;
        margin-bottom: 3rem;

        -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
        -moz-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
        box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);

        outline: none;
    }

    .addButton:hover {
        background-color: #1481cf;
        cursor: pointer;
    }
    .spacer {
        flex: 1;
    }


</style>
