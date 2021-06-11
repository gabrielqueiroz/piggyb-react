import React from 'react'
import PiggyBank from './piggyBank';
    
const PiggyBanks = ({ piggyBanks }) => {
  return (
    <div class="mdc-layout-grid">
      <div class="mdc-layout-grid__inner">
        { 
          piggyBanks.map((piggyBank) => (
            <div class="mdc-layout-grid__cell--span-6">
              <PiggyBank piggyBank={piggyBank} />
            </div>
          ))
        }
      </div>  
    </div>
  )
};

export default PiggyBanks