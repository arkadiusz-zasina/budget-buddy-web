<template>
    <div class="tableMobile">
        <div class="tabs" :style="styleForTabs">
            <div :class="isExpenses ? 'tab' : 'tab-inactive'" :style="isExpenses ? styleForActive : styleForInactive" @click="switchTabs(true)">Your expenses</div>
            <div :class="!isExpenses ? 'tab' : 'tab-inactive'" :style="!isExpenses ? styleForActive : styleForInactive" @click="switchTabs(false)">Your income</div>
        </div>
        <div class="addButton" @click="openAdd" :style="styleForActive">{{isExpenses ? 'Add expense' : 'Add income'}}</div>    
        <div v-if="isExpenses">
            <div class="element" v-for="expense in expensesPaged(page)" :key="expense.product" :style="styleForTables">
                <div class="elementRow">
                    <div>{{expense.product}}</div>
                    <div class="spacer"></div>
                    <div>{{expense.time}}</div>
                </div>
                <div class="elementRow">
                    <div>{{'€' + expense.amount}}</div>
                    <div class="spacer"></div>
                    <div>{{expense.category}}</div>
                </div>
                <div class="elementRow">
                    <div class="element-comments">{{expense.comments}}</div>
                </div>
            </div>
        </div>
        <div v-if="!isExpenses">
            <div class="element" v-for="inc in incomePaged(page)" :key="inc.source" :style="styleForTables">
                <div class="elementRow">
                    <div>{{inc.source}}</div>
                    <div class="spacer"></div>
                    <div>{{inc.time}}</div>
                </div>
                <div class="elementRow">
                    <div>{{'€' + inc.amount}}</div>
                    <div class="spacer"></div>
                </div>
                <div class="elementRow">
                    <div class="element-comments">{{inc.comments}}</div>
                </div>
            </div>
        </div>
        <div class="spacer" :style="styleForTables"/>
        <div class="pager" :style="styleForPager">
            <img class="pagerButton" @click="previousPage" src="../assets/page-left-icon.png"/>
            <div class="pagerNumber" :style="styleForPagerNumber">{{page}} of {{isExpenses ? expensesPageNumber : incomePageNumber}}</div>
            <img class="pagerButton" @click="nextPage" src="../assets/page-right-icon.png"/>
        </div>
    </div>
</template>

<script>

export default {
  name: 'TableMobile',
  data: function () {
    return {
      isExpenses: true,
      page: 1,
      rowsPerPage: 3
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
      switchTabs(isExpenses) {
          this.isExpenses = isExpenses
      },
      openAdd() {
          this.$store.commit("openAdd", this.isExpenses);
      }
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
        calculatedBackgroundForInactive() {
            if (this.settings.contrast && (this.settings.theme.name == 'default' || this.settings.theme.name == 'dark')) return 'black';
            if (this.settings.contrast && (this.settings.theme.name == 'light')) return 'white';
            if (!this.settings.contrast && (this.settings.theme.name == 'default')) return '#90c1e3';
            if (!this.settings.contrast && (this.settings.theme.name == 'dark')) return '#276c9b';
            if (!this.settings.contrast && (this.settings.theme.name == 'light')) return '#90c1e3';
            
            return null;
        },
        calculatedColorForInactive() {
            if (this.settings.contrast && (this.settings.theme.name == 'default' || this.settings.theme.name == 'dark')) return 'white';
            if (this.settings.contrast && (this.settings.theme.name == 'light')) return 'black';
            if (!this.settings.contrast && (this.settings.theme.name == 'default')) return '#edf4fa';
            if (!this.settings.contrast && (this.settings.theme.name == 'dark')) return '#edf4fa';
            if (!this.settings.contrast && (this.settings.theme.name == 'light')) return '#23628f';
            
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
            fontSize: (1.5 + this.calculatedFontSizeDifference) + 'rem', 
            fontWeight: this.settings.bold ? 'bold' : '300',
            fontFamily: this.settings.font.name == 'default' ? 'Bahnschrift' : this.settings.font.name,
            letterSpacing: (0.0 + this.calculatedLetterSpacingDifference) + 'px',
            wordSpacing: (0.0 + this.calculatedWordSpacingDifference) + 'px',
            lineHeight: (20 + this.calculatedLineSpacingDifference) + 'px',
            backgroundColor: this.calculatedBackgroundForRows,
            color: this.calculatedColorForRows
            };
        },
        styleForTabs() {
            return {
                backgroundColor: this.calculatedBackgroundForHeader
            }
        },
        styleForActive() {
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
        styleForInactive() {
            return {
            fontSize: (1.5 + this.calculatedFontSizeDifference) + 'rem', 
            fontWeight: this.settings.bold ? 'bold' : '300',
            fontFamily: this.settings.font.name == 'default' ? 'Bahnschrift' : this.settings.font.name,
            letterSpacing: (0.0 + this.calculatedLetterSpacingDifference) + 'px',
            wordSpacing: (0.0 + this.calculatedWordSpacingDifference) + 'px',
            lineHeight: (20 + this.calculatedLineSpacingDifference) + 'px',
            backgroundColor: this.calculatedBackgroundForInactive,
            color: this.calculatedColorForInactive
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
    .tableMobile {
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

        margin-bottom: 4rem;
    }

    .tabs {
        display: flex;
        align-items: center;
        background-color: #539fd5;
    }
    .tab-inactive {
        background-color: #90c1e3;
    }

    .tab, .tab-inactive {
        flex: 1;
        height: 100%;
        padding-top: 1rem;
        padding-bottom: 1rem;
        cursor: pointer;
    }
    
    .addButton {
        width: 100%;
        background-color: #539fd5;
        padding-top: 1rem;
        padding-bottom: 1rem;
        cursor: pointer;
    }

    .element {
        color: #378fce;
        padding: 1rem;
        border-style: solid;
        border-width: 2px 0px 0px 0px;
        border-color: #dce5ff;
    }

    .element-comments {
        font-size: 1.4rem;
        color: #7db6df;
    }

    .elementRow {
        display: flex;
        margin-top: .2rem;
        margin-bottom: .2rem;
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
