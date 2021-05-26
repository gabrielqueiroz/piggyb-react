import React from 'react'
import PiggyBank from './piggyBank';
    
const PiggyBanks = ({ piggyBanks }) => {
  return (
    <div>
      <center><h1>PiggyBank List</h1></center>
      <div class="row">
        { piggyBanks.map((piggyBank) => (
          <div class="col-6">
            <PiggyBank piggyBank={piggyBank} />
          </div>
        ))}
      </div>
    </div>
  )
};

export default PiggyBanks