<template>
  <div class="budgetDatePanel" :style="styleForPanel">
      <div class="row">
            <div v-if="onlyDate || onlyBudget" class="spacer"/>
            <div v-if="!onlyDate" :class="budgetClass">Current budget:</div>
            <div v-if="!onlyDate" class="budget" :style="styleForBudget">{{'€' + budget}}</div>
            <div v-if="!onlyDate && !onlyBudget" class="spacer"/>
            <div v-if="!onlyBudget" class="dateLabel">Date:</div>
            <div v-if="!onlyBudget" :class="dateClass" :style="styleForDate">
                <div class="selectedDate">14 June 2020</div>
                <img class="dropIcon" src="../assets/date-drop-icon.png"/>
            </div>
            <div v-if="onlyDate || onlyBudget" class="spacer"/>
      </div>
  </div>
</template>

<script>

export default {
  name: 'BudgetDatePanel',
  props: {
      onlyBudget: Boolean,
      onlyDate: Boolean
  },
  methods: {
  },
  computed: {
      budget() {
          let exp = this.$store.state.expenses
          let sumExp = 0;
          let inc = this.$store.state.income
          let sumInc = 0;
          exp.forEach(element => {
              sumExp += parseFloat(element.amount);
          });

          inc.forEach(element => {
              sumInc += parseFloat(element.amount);
          });
          return sumInc - sumExp;
      },
      budgetClass() {
          return this.onlyBudget ? 'budgetOnlyLabel' : 'budgetLabel'
      },
      dateClass() {
          return this.onlyDate ? 'dateOnly' : 'date'
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
      styleForPanel() {
          return {
            fontSize: (1.5 + this.calculatedFontSizeDifference) + 'rem', 
            fontWeight: this.settings.bold ? 'bold' : '300',
            fontFamily: this.settings.font.name == 'default' ? 'Bahnschrift' : this.settings.font.name,
            letterSpacing: (0.0 + this.calculatedLetterSpacingDifference) + 'px',
            wordSpacing: (0.0 + this.calculatedWordSpacingDifference) + 'px',
            lineHeight: (20 + this.calculatedLineSpacingDifference) + 'px',
              color: this.colorForPanel,
              backgroundColor: this.backgroundForPanel
          }
      },
      styleForBudget() {
          return {
              color: this.colorForBudget
          }
      },
      styleForDate() {
          return {
            color: this.colorForDate,
            backgroundColor: this.backgroundForDate
          }
      },
        backgroundForPanel() {
            if (this.settings.contrast && (this.settings.theme.name == 'default' || this.settings.theme.name == 'dark')) return 'black';
            if (this.settings.contrast && (this.settings.theme.name == 'light')) return 'white';
            if (!this.settings.contrast && (this.settings.theme.name == 'default')) return '#539fd5';
            if (!this.settings.contrast && (this.settings.theme.name == 'dark')) return '#1f5285';
            if (!this.settings.contrast && (this.settings.theme.name == 'light')) return '#fafcfe';
            
            return null;
        },
        colorForPanel() {
            if (this.settings.contrast && (this.settings.theme.name == 'default' || this.settings.theme.name == 'dark')) return 'white';
            if (this.settings.contrast && (this.settings.theme.name == 'light')) return 'black';
            if (!this.settings.contrast && (this.settings.theme.name == 'default')) return 'white';
            if (!this.settings.contrast && (this.settings.theme.name == 'dark')) return '#e6f0fb';
            if (!this.settings.contrast && (this.settings.theme.name == 'light')) return '#378fce';
            
            return null;
        },
        colorForBudget() {
            if (this.settings.contrast && (this.settings.theme.name == 'default' || this.settings.theme.name == 'dark')) return 'white';
            if (this.settings.contrast && (this.settings.theme.name == 'light')) return 'black';
            if (!this.settings.contrast && (this.settings.theme.name == 'default')) return '#bce0ff';
            if (!this.settings.contrast && (this.settings.theme.name == 'dark')) return '#e6f0fb';
            if (!this.settings.contrast && (this.settings.theme.name == 'light')) return '#256796';
            
            return null;
        },
        backgroundForDate() {
            if (this.settings.contrast && (this.settings.theme.name == 'default' || this.settings.theme.name == 'dark')) return 'black';
            if (this.settings.contrast && (this.settings.theme.name == 'light')) return 'white';
            if (!this.settings.contrast && (this.settings.theme.name == 'default')) return '#fbfcff';
            if (!this.settings.contrast && (this.settings.theme.name == 'dark')) return '#e6f0fb';
            if (!this.settings.contrast && (this.settings.theme.name == 'light')) return '#004e53';
            
            return null;
        },
        colorForDate() {
            if (this.settings.contrast && (this.settings.theme.name == 'default' || this.settings.theme.name == 'dark')) return 'white';
            if (this.settings.contrast && (this.settings.theme.name == 'light')) return 'black';
            if (!this.settings.contrast && (this.settings.theme.name == 'default')) return '#539fd5';
            if (!this.settings.contrast && (this.settings.theme.name == 'dark')) return '#1f5285';
            if (!this.settings.contrast && (this.settings.theme.name == 'light')) return '#fcfdfe';
            
            return null;
        },
  }
}
</script>

<style scoped>
    .budgetDatePanel {
        width: 100%;
        font-size: 1.5rem;
        color: white;
        padding-top: 1rem;
        padding-bottom: 1rem;
        background-color: #539fd5;
        border-radius: .2rem;


        margin-top: 3rem;
        margin-bottom: 3rem;

        -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
        -moz-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
        box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.2);
    }

    .row {
        display: flex;
        align-items: center;
    }

    .spacer {
        flex: 1;
    }

    .budgetOnlyLabel {
        margin-left: 0rem;
    }

    .budgetLabel {
        margin-left: 3rem;
    }

    .budget {
        margin-left: 1rem;
        color: #bce0ff;
    }
    
    .dateLabel {
        margin-right: 1rem;
    }

    .date, .dateOnly {
        display: flex;
    }

    .dateOnly {
        margin-right: 0rem;
    }

    .date {
        margin-right: 3rem;
    }

    .date, .dateOnly {
        background-color: #fbfcff;
        color: #539fd5;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: .3rem;
        padding-bottom: .3rem;
        border-radius: .3rem;

        cursor: pointer;
    }

    .dropIcon {
        margin-left: 1rem;
        object-fit: scale-down;
    }
</style>
