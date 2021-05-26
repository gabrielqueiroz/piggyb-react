import React from 'react'
    
const UsageGraph = ({ piggyBank }) => {
  const usage_percentage = (piggyBank.total_credit * 100) / (piggyBank.total_debit * -1)

  return (    
    <div>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style={{ width: usage_percentage + "%" }} aria-valuenow={piggyBank.total_debit * -1} aria-valuemin="0" aria-valuemax={piggyBank.total_credit}></div>
      </div>
    </div>
  )
};

export default UsageGraph