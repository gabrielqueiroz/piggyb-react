import React from 'react'
import './piggyBank.css';
import UsageGraph from './usageGraph';    

const PiggyBank = ({ piggyBank }) => {
  return (    
    <div class="mdc-card mdc-card--outlined">
      <div class="card-content">
        <div class="mdc-card__title mdc-typography mdc-typography--headline6">{piggyBank.name}</div>
        <div class="mdc-card__body1 mdc-typography mdc-typography--subtitle3">{piggyBank.description}</div>
        <br/>
        Total currency
        <div class="text-right">
          {piggyBank.currency}$ <span class="total-value">{piggyBank.balance.toFixed(2)}</span>
        </div>
      </div>
      <div class="mdc-list-divider"/>
      <div class="mdc-layout-grid no-margin">
        <div class="mdc-layout-grid__inner">
          <div class="mdc-layout-grid__cell--span-6">
            Total credits
            <div class="text-right">
              {piggyBank.currency}$ <span class="value">{piggyBank.total_credit.toFixed(2)}</span>
            </div>
          </div>
          <div class="mdc-layout-grid__cell--span-6">
            Total Debits
            <div class="text-right">
              {piggyBank.currency}$ <span class="value">{piggyBank.total_debit.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default PiggyBank