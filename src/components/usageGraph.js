import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 5,
    borderRadius: 2,
  },
  colorPrimary: {
    backgroundColor: '#C42012',
  },
  bar: {
    backgroundColor: "#619759",
    borderRadius: 0,
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});
    
const UsageGraph = ({ piggyBank }) => {
  const classes = useStyles();
  const debit_percentage = (piggyBank.total_debit * 100) / piggyBank.total_credit
  const credit_percentage = 100 - debit_percentage

  return (    
    <div className={classes.root}>
      <BorderLinearProgress variant="determinate" value={credit_percentage} />
    </div>
  )
};

export default UsageGraph