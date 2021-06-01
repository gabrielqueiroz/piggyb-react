import React from 'react'
import './piggyBank.css';
import UsageGraph from './usageGraph';    

const PiggyBank = ({ piggyBank }) => {
  return (    
    <div class="card card_bank mb-4 animate__animated animate__fadeInUp">
      <div class="card-body">
        <div class="row">
          <div class="col-xl-5">
            <h5 class="card-title">{piggyBank.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{piggyBank.description}</h6>
          </div>
          <div class="col-xl-7">
            <div class="row">
              <div class="col-md-3 text-nowrap small">
                {piggyBank.currency}
              </div>
              <div class="col-md-9 text-right">
                <h1>$ {piggyBank.balance.toFixed(2)}</h1>
              </div>
            </div>

            <div class="row text-muted">
              <div class="col-md-6 small">
              <div class="row">
                <div class="col-md-12">
                  <b>Total Credits</b>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 text-nowrap small">
                  {piggyBank.currency}
                </div>
                <div class="col-md-8 text-right">
                  $ {piggyBank.total_credit.toFixed(2)}
                </div>
              </div>
            </div>

            <div class="col-md-6 small">
              <div class="row">
                <div class="col-md-12">
                  <b>Total Debits</b>
                </div>
              </div>
                <div class="row">
                  <div class="col-md-4 text-nowrap small">
                    {piggyBank.currency}
                  </div>
                  <div class="col-md-8 text-right">
                    $ {piggyBank.total_debit.toFixed(2)}
                  </div>
                </div>
              </div>
            </div>            
          </div>
        </div>
        <div class="row">
          <UsageGraph piggyBank={piggyBank} />
        </div>
      </div>
    </div>
  )
};

export default PiggyBank