import React from 'react'
    
const PiggyBanks = ({ piggyBanks }) => {
  return (
    <div>
      <center><h1>PiggyBank List</h1></center>
      { piggyBanks.map((piggyBank) => (
          <div class="card mb-4 shadow">
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
                      <h1>{piggyBank.balance}</h1>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-6 small">
                    <div class="row">
                      <div class="col-md-12">
                        Total Credits
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-4 text-nowrap small">
                        {piggyBank.currency}
                      </div>
                      <div class="col-md-8 text-right">
                        {piggyBank.total_credit}
                      </div>
                    </div>
                  </div>

                  <div class="col-md-6 small">
                    <div class="row">
                      <div class="col-md-12">
                        Total Debits
                      </div>
                    </div>
                      <div class="row">
                        <div class="col-md-4 text-nowrap small">
                          {piggyBank.currency}
                        </div>
                        <div class="col-md-8 text-right">
                          {piggyBank.total_debit}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      ))}
    </div>
  )
};

export default PiggyBanks