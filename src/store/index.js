import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  state: {
    settings: {
      contrast: false,
      theme: {name: 'default'},
      lineLengths: 50,
      textSize: 50,
      font: {name: 'default'},
      bold: false,
      lineSpacing: 50,
      letterSpacing: 50,
      wordSpacing: 50
    },
    drawerExpanded: false,
    isAddVisible: false,
    isAddExpense: false,
    isMobileVersion: false,
    expenses: [
      {time: '8:23', product: 'Bus ticket', amount: '1.20', category: 'Transport', comments: ''},
      {time: '10:20', product: 'Coffee', amount: '2.20', category: 'Food', comments: ''},
      {time: '18:00', product: 'Samsung TV', amount: '150', category: 'Electronics', comments: 'First installment out of 12'},
      {time: '21:00', product: 'Dinner in a restaurant', amount: '25', category: 'Food', comments: ''}
    ],
    income: [
      {time: '8:00', source: 'Weekly salary', amount: '850', comments: ''}
    ]
  },
  mutations: {
    openAdd(state, isExpense) {
      state.isAddVisible = true;
      state.isAddExpense = isExpense;
    },
    closeAdd(state) {
      state.isAddVisible = false;
    },
    expandDrawer(state) {
      state.drawerExpanded = true;
    },
    collapseDrawer(state) {
      state.drawerExpanded = false;
    },
    setMobileVersion(state, isMobile) {
      state.isMobileVersion = isMobile;
    },
    addExpense(state, exp) {
      state.expenses.push(exp);
    },
    addIncome(state, inc) {
      state.income.push(inc);
    },
    setBrightness(state, value) {
      state.settings.brightness = value;
    },
    setContrast(state, value) {
      state.settings.contrast = value;
    },
    setTheme(state, value) {
      state.settings.theme = value;
    },
    setLineLengths(state, value) {
      state.settings.lineLengths = value;
    },
    setTextSize(state, value) {
      state.settings.textSize = value;
    },
    setFont(state, value) {
      state.settings.font = value;
    },
    setBold(state, value) {
      state.settings.bold = value;
    },
    setLineSpacing(state, value) {
      state.settings.lineSpacing = value;
    },
    setWordSpacing(state, value) {
      state.settings.wordSpacing = value;
    },
    setLetterSpacing(state, value) {
      state.settings.letterSpacing = value;
    },
  },
  actions: {
  },
  modules: {
  }
})
