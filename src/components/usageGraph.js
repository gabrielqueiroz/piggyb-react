import React from 'react'
    
const UsageGraph = ({ piggyBank }) => {
  const debit_percentage = (piggyBank.total_debit * 100) / piggyBank.total_credit
  const credit_percentage = 100 - debit_percentage

  return (    
    <div>
      <div class="progress mt-2">
        <div 
          class="progress-bar-striped bg-success"
          role="progressbar"
          style={{ width: credit_percentage + "%" }}
          aria-valuenow={piggyBank.total_credit}
          aria-valuemin="0" aria-valuemax={piggyBank.total_credit}
        />
        <div 
          class="progress-bar-striped bg-danger"
          role="progressbar"
          style={{ width: debit_percentage + "%" }}
          aria-valuenow={piggyBank.total_debit * -1}
          aria-valuemin="0" aria-valuemax={piggyBank.total_credit}
        />
      </div>
    </div>
  )
};

export default UsageGraph