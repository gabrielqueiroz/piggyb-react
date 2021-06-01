import React from 'react'
import PiggyBank from './piggyBank';
    
const PiggyBanks = ({ piggyBanks }) => {
  return (
    <div>
      <div><h2>PiggyBank List</h2></div>
      <div class="row mt-4">
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