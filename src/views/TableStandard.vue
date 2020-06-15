<template>
  <div class="tableStandard" :style="styleForTable">
      <div class="header" :style="styleForHeader">{{header}}</div>
      <table class="table" v-if="isExpenses" :style="styleForTables">
        <tr class="table-headers" :style="styleForHeaders" >
            <th>Time</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Comments</th>
        </tr>
        <tr class="table-row" :style="styleForRow" v-for="expense in expensesPaged(page)" :key="expense.product">
            <td>{{expense.time}}</td>
            <td>{{expense.product}}</td>
            <td>{{'€' + expense.amount}}</td>
            <td>{{expense.category}}</td>
            <td>{{expense.comments}}</td>
        </tr>
      </table>
      <table class="table" v-if="!isExpenses" :style="styleForTables">
        <tr class="table-headers" :style="styleForHeaders">
            <th>Time</th>
            <th>Source</th>
            <th>Amount</th>
            <th>Comments</th>
        </tr>
        <tr class="table-row" :style="styleForRow"  v-for="inc in incomePaged(page)" :key="inc.source">
            <td>{{inc.time}}</td>
            <td>{{inc.source}}</td>
            <td>{{'€' + inc.amount}}</td>
            <td>{{inc.comments}}</td>
        </tr>
      </table>
      <div class="spacer"/>
      <div class="pager" :style="styleForPager">
          <img class="pagerButton" @click="previousPage" src="../assets/page-left-icon.png"/>
          <div class="pagerNumber" :style="styleForPagerNumber">{{page}} of {{isExpenses ? expensesPageNumber : incomePageNumber}}</div>
          <img class="pagerButton" @click="nextPage" src="../assets/page-right-icon.png"/>
      </div>
  </div>
</template>

<script>

export default {
  name: 'TableStandard',
  props: {
      isExpenses: Boolean
  },
  data: function () {
    return {
      page: 1,
      rowsPerPage: 7
    }
  },
  created() {
  },
  methods: {
      expensesPaged(page) {
          return this.expenses.slice((page - 1) * this.rowsPerPage, (page - 1) * this.rowsPerPage + this.rowsPerPage)
      },
      incomePaged(page) {
          return this.income.slice((page - 1) * this.rowsPerPage, (page - 1) * this.rowsPerPage + this.rowsPerPage)
      },
      nextPage() {
          if (this.page != (this.isExpenses ? this.expensesPageNumber : this.incomePageNumber))
          this.page++;
      },
      previousPage() {
          if (this.page != 1)
          this.page--;
      },

  },
  computed: {
        header() {
            return this.isExpenses ? 'Your expenses:' : 'Your income:';
        },
        expenses() {
            return this.$store.state.expenses;
        },
        income() {
            return this.$store.state.income;
        },
        expensesPageNumber() {
            return Math.floor(this.$store.state.expenses.length / this.rowsPerPage) + 1;
        },
        incomePageNumber() {
            return Math.floor(this.$store.state.income.length / this.rowsPerPage) + 1;
        },
        settings() {
            return this.$store.state.settings;
        },
        calculatedFontSizeDifference() {
            return parseFloat((this.settings.textSize - 50) / 50);
        },
        calculatedLetterSpacingDifference() {
            return parseFloat((this.settings.letterSpacing - 50) / 15);
        },
        calculatedWordSpacingDifference() {
            return parseFloat((this.settings.wordSpacing - 50) / 1);
        },
        calculatedLineSpacingDifference() {
            return parseFloat((this.settings.lineSpacing - 50) / (50/20));
        },
        calculatedBackgroundForHeader() {
            if (this.settings.contrast && (this.settings.theme.name == 'default' || this.settings.theme.name == 'dark')) return 'black';
            if (this.settings.contrast && (this.settings.theme.name == 'light')) return 'white';
            if (!this.settings.contrast && (this.settings.theme.name == 'default')) return '#539fd5';
            if (!this.settings.contrast && (this.settings.theme.name == 'dark')) return '#1f5285';
            if (!this.settings.contrast && (this.settings.theme.name == 'light')) return '#fafcfe';
            
            return null;
        },
        calculatedColorForHeader() {
            if (this.settings.contrast && (this.settings.theme.name == 'default' || this.settings.theme.name == 'dark')) return 'white';
            if (this.settings.contrast && (this.settings.theme.name == 'light')) return 'black';
            if (!this.settings.contrast && (this.settings.theme.name == 'default')) return 'white';
            if (!this.settings.contrast && (this.settings.theme.name == 'dark')) return '#e6f0fb';
            if (!this.settings.contrast && (this.settings.theme.name == 'light')) return '#378fce';
            
            return null;
        },
        calculatedColorForHeaders() {
            if (this.settings.contrast && (this.settings.theme.name == 'default' || this.settings.theme.name == 'dark')) return 'white';
            if (this.settings.contrast && (this.settings.theme.name == 'light')) return 'black';
            if (!this.settings.contrast && (this.settings.theme.name == 'default')) return 'white';
            if (!this.settings.contrast && (this.settings.theme.name == 'dark')) return '#e6f0fb';
            if (!this.settings.contrast && (this.settings.theme.name == 'light')) return '#246593';
            
            return null;
        },
        calculatedBackgroundForHeaders() {
            if (this.settings.contrast && (this.settings.theme.name == 'default' || this.settings.theme.name == 'dark')) return 'black';
            if (this.settings.contrast && (this.settings.theme.name == 'light')) return 'white';
            if (!this.settings.contrast && (this.settings.theme.name == 'default')) return '#81b7e0';
            if (!this.settings.contrast && (this.settings.theme.name == 'dark')) return '#14364f';
            if (!this.settings.contrast && (this.settings.theme.name == 'light')) return '#cae1f2';
            
            return null;
        },
        calculatedColorForRows() {
            if (this.settings.contrast && (this.settings.theme.name == 'default' || this.settings.theme.name == 'dark')) return 'white';
            if (this.settings.contrast && (this.settings.theme.name == 'light')) return 'black';
            if (!this.settings.contrast && (this.settings.theme.name == 'default')) return '#378fce';
            if (!this.settings.contrast && (this.settings.theme.name == 'dark')) return '#e6f0fb';
            if (!this.settings.contrast && (this.settings.theme.name == 'light')) return '#378fce';
            
            return null;
        },
        calculatedBackgroundForRows() {
            if (this.settings.contrast && (this.settings.theme.name == 'default' || this.settings.theme.name == 'dark')) return 'black';
            if (this.settings.contrast && (this.settings.theme.name == 'light')) return 'white';
            if (!this.settings.contrast && (this.settings.theme.name == 'default')) return '#fbfcff';
            if (!this.settings.contrast && (this.settings.theme.name == 'dark')) return '#1f5285';
            if (!this.settings.contrast && (this.settings.theme.name == 'light')) return '#fbfcff';
            
            return null;
        },
        styleForTables() {
            return {
            fontSize: (.7 + this.calculatedFontSizeDifference) + 'rem', 
            fontWeight: this.settings.bold ? 'bold' : '300',
            fontFamily: this.settings.font.name == 'default' ? 'Bahnschrift' : this.settings.font.name,
            letterSpacing: (0.0 + this.calculatedLetterSpacingDifference) + 'px',
            wordSpacing: (0.0 + this.calculatedWordSpacingDifference) + 'px',
            lineHeight: (20 + this.calculatedLineSpacingDifference) + 'px',
            };
        },
        styleForHeader() {
            return {
            fontSize: (1.5 + this.calculatedFontSizeDifference) + 'rem', 
            fontWeight: this.settings.bold ? 'bold' : '300',
            fontFamily: this.settings.font.name == 'default' ? 'Bahnschrift' : this.settings.font.name,
            letterSpacing: (0.0 + this.calculatedLetterSpacingDifference) + 'px',
            wordSpacing: (0.0 + this.calculatedWordSpacingDifference) + 'px',
            lineHeight: (20 + this.calculatedLineSpacingDifference) + 'px',
            backgroundColor: this.calculatedBackgroundForHeader,
            color: this.calculatedColorForHeader
            };
        },
        styleForHeaders() {
            return {
                backgroundColor: this.calculatedBackgroundForHeaders,
                color: this.calculatedColorForHeaders
            }
        },
        styleForRow() {
            return {
                backgroundColor: this.calculatedBackgroundForRows,
                color: this.calculatedColorForRows
            }
        },
        styleForTable() {
            return {
                backgroundColor: this.calculatedBackgroundForRows
            }
        },
        styleForPager() {
            return {
                backgroundColor: this.calculatedBackgroundForHeaders
            }
        },
        styleForPagerNumber() {
            return {
                color: this.calculatedColorForHeaders
            }
        }
      
      
  }
}
</script>

<style scoped>
    .tableStandard {
        width: 100%;
        background-color: #fbfcff;
        color: white;
        font-size: 1.5rem;

        border-radius: .2rem;
        min-height: 320px;
        z-index: 0;

        display: flex;
        flex-direction: column;


        -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
        -moz-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
        box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);


    }

    .header {
        padding-top: 1rem;
        padding-bottom: 1rem;
        text-align: left;
        padding-left: 3rem;
        background-color: #539fd5;
    }
    .table {
        width: 100%;
        border-spacing: 0px;
        font-size: .7rem;
    }

    .table-headers {
        background-color: #81b7e0;
    }

    .table-headers th {
        border-style: solid;
        border-width: 0px 1px 0px 0px;
        border-color: white;
        margin: 0;
        font-weight: 300;
        padding-top: .5rem;
        padding-bottom: .5rem;
    }

    .table-row {
        background-color: #fbfcff;
        color: #378fce;


    }
    .table-row td {
                border-style: solid;
        border-width: 0px 0px 1px 0px;
        border-color: #dce5ff;

        padding-top: .5rem;
        padding-bottom: .5rem;
    }

    .spacer {
        flex: 1;
    }

    .pager {
        width: 100%;
        background-color: #81b7e0;
        height: 20px;
        display: flex;
        justify-content: center;
        font-size: .7rem;
        align-items: center;
    }

    .pagerButton {
        height: 70%;
        margin-left: .5rem;
        margin-right: .5rem;
        cursor: pointer;
    }
</style>
