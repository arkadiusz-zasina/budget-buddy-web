<template>
  <div class="mainMobile">
    <div class="budgetPanel">
        <BudgetDatePanel :onlyBudget="true"/>
    </div>
    <div class="datePanel">
        <BudgetDatePanel :onlyDate="true"/>
    </div>
    <TableMobile/>
  </div>
</template>

<script>

import BudgetDatePanel from './BudgetDatePanel'
import TableMobile from './TableMobile'
export default {
  name: 'MainMobile',
  components: {
      BudgetDatePanel,
      TableMobile
  },
  created() {
  },
  methods: {
  },
  computed: {

  }
}
</script>

<style scoped>
    .mainMobile {
        width: 90%;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }
</style>
