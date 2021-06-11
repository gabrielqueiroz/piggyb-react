import React from 'react'
    
const UsageGraph = ({ piggyBank }) => {
  const debit_percentage = (piggyBank.total_debit * 100) / piggyBank.total_credit
  const credit_percentage = 100 - debit_percentage

  return (    
    <div role="progressbar" class="mdc-linear-progress--indeterminate" aria-label="Credit Usage" aria-valuemin="0" aria-valuemax="1" aria-valuenow={credit_percentage / 100}>
      <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
        <span class="mdc-linear-progress__bar-inner"></span>
      </div>
      <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
        <span class="mdc-linear-progress__bar-inner"></span>
      </div>
    </div>
  )
};

export default UsageGraph