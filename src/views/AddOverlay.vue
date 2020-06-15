<template>
  <div class="addOverlay">
    <div class="content">
        <div class="header">{{isExpenses ? 'Add expense' : 'Add income'}}</div>
        <div class="form">
            <div class="formRow" v-if="isExpenses">
                <div class="formLabel">Category</div>
                <div class="formInput dropdown" @click="switchDrop">
                    <div class="dropdownResult">{{selectedCategory}}</div>
                    <img class="dropdownIcon" src="../assets/date-drop-icon.png"/>
                    <div class="dropdownList" v-if="dropOpen">
                        <div class="dropdownList-element" v-for="category in categoriesList" :key="category" @click="pickCategory(category)">{{category}}</div>
                    </div>
                </div>
            </div>
            <div class="formRow">
                <div class="formLabel">{{isExpenses? 'Product' : 'Source'}}</div>
                <input class="formInput" v-model="product" :placeholder="isExpenses ?  'product' : 'source'"/>
            </div>
            <div class="formRow">
                <div class="formLabel">Amount</div>
                <input class="formInput" v-model="amount" placeholder="amount"/>
            </div>
            <div class="formRow">
                <div class="formLabel">Date</div>
                <datepicker v-model="date" input-class="formInputDate" name="uniquename"></datepicker>
            </div>
            <div class="formRow">
                <div class="formLabel">Time</div>
                <input class="formInput" v-model="time" placeholder="time"/>
            </div>
            <div class="formRow">
                <div class="formLabel">Comments</div>
                <input class="formInput" v-model="comments" placeholder="comments"/>
            </div>
        </div>
        <button class="addButton" @click="confirm" >Confirm</button>
    </div>
    <div class="backDrop" @click="close"/>
  </div>
</template>

<script>

import Datepicker from 'vuejs-datepicker';
export default {
  name: 'AddOverlay',
  props: {
      isExpenses: Boolean
  },
  components: {
      Datepicker
  },
  data: function () {
    return {
      dropOpen: false,
      selectedCategory: null,
      date: null,
      product: null,
      amount: null,
      comments: null,
      time: null
    }
  },
  created() {
      this.selectedCategory = this.categoriesList[0];
  },
  methods: {
      confirm() {
          let expense = {
              time: this.time,
              product: this.product,
              amount: this.amount,
              category: this.selectedCategory,
              comments: this.comments
          }
          let income = {
              time: this.time,
              source: this.product,
              amount: this.amount,
              comments: this.comments
          }
          if (this.isExpenses)
            this.$store.commit("addExpense", expense);
          else
            this.$store.commit("addIncome", income);
          this.$store.commit("closeAdd");
          this.clear();
      },
      close() {
          this.$store.commit("closeAdd");
          this.clear();
      },
      switchDrop() {
          this.dropOpen = !this.dropOpen;
      },
      pickCategory(category) {
          this.selectedCategory = category;
      },
      clear() {
          this.time = null,
          this.product = null,
          this.amount = null,
          this.comments = null

      }
  },
  computed: {
      categoriesList() {
          const list = [
              'Transport', 'Entertainment', 'Bills', 'Food', 'Other', 'Electronics', 'Chemical'
          ]
          return list;
      }
  }
}
</script>

<style scoped>
    .addOverlay {
        width: 100%;
        height: 100%;
        text-align: center;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .backDrop {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: black;
        opacity: 0.7;
    }

    .header {
        font-size: 1.5rem;
        width: 100%;
        background-color: #539fd5;
        color: #edf4fa;
        text-align: center;
        padding-top: 1rem;
        padding-bottom: 1rem;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;

        font-weight: bold;

    }

    .content {
        z-index: 10;
        background-color: #fbfcff;
        color: #539fd5;
        border-radius: .3rem;

        -webkit-box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.5);
        box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.5);
    }

    .formRow {
        display: flex;
        align-items: center;
        margin-top: .3rem;
        margin-bottom: .3rem;
    }

    .form {
        padding-top: 1.5rem;
        padding-left: 2rem;
        padding-right: 2rem;
    }

    .addButton {
        font-family: Bahnschrift, Helvetica, Arial, sans-serif;

        font-size: 1.2rem;
        color: white;
        padding-top: .5rem;
        padding-bottom: .5rem;
        padding-left: 4rem;
        padding-right: 4rem;
        background-color: #539fd5;
        border-radius: .2rem;
        border: none;

        margin-top: 2rem;
        margin-bottom: 2rem;

        -webkit-box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.5);
        -moz-box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.5);
        box-shadow: 0px 2px 2px 0px rgba(0,0,0,0.5);

        outline: none;
    }

    .addButton:hover {
        background-color: #1481cf;
        cursor: pointer;
    }

    .formInput {
        flex: 3;
        width: 300px;
        
        outline: none;
        border: none;
        background-color: #539fd52c;
        padding: .5rem;
        margin-left: 1rem;
        margin-right: 1rem;

        border-radius: .1rem;
        padding-left: 1rem;

        color: #246593;
    }

    .dropdown {
        height: 1rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
    }

    .dropdownResult {
        flex: 9;
        text-align: left;
    }
    .dropdownIcon {
        flex: 1;
        object-fit: scale-down;
        height: 70%;
    }

    .formLabel {
        flex: 1;
        text-align: right;
    }

    .dropdownList {
        width: 80%;
        position: absolute;
        top: 2rem;
        border-radius: .3rem;
        overflow: hidden;
        z-index: 1000;
    }

    .dropdownList-element {
        padding-top: .4rem;
        padding-bottom: .4rem;
        background-color: #6995b4;
        color: white;
        width: 100%;
        text-align: left;
        padding-left: 1rem;
    }

    .dropdownList-element:hover {
        background-color: #78aace;
    }
</style>

<style>
    .formInputDate {
        flex: 3;
        width: 307px;
        
        outline: none;
        border: none;
        background-color: #539fd52c;
        padding: .5rem;
        margin-left: 1rem;
        margin-right: 1rem;

        border-radius: .1rem;
        padding-left: 1rem;

        color: #246593;
    }

</style>
