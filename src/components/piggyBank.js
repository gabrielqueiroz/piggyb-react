import React from 'react'
import './piggyBank.css';
import clsx from 'clsx';
import UsageGraph from './usageGraph';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
  root: {
    minWidth: 275,
    '&:hover': 'box-shadow: 0 10px 20px rgba(0, 0, 0, .12), 0 4px 8px rgba(0, 0, 0, .06)',
  },
  totalValue: {
    textAlign: 'right',
    marginTop: 0,
    marginBottom: 0,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));


const PiggyBank = ({ piggyBank }) => {
  const classes = useStyles();
  const divider = <div class="mdc-list-divider"/>;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (    
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">
              {piggyBank.name}
            </Typography>
            <Typography variant="subtitle1">
              {piggyBank.description}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography className={classes.totalValue} variant="h6">
              {piggyBank.currency}$ <span class="total-value">{piggyBank.balance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Delete />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {divider}
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <b>Total credits</b>
                <div class="text-right">
                  {piggyBank.currency}$ <span class="value">{piggyBank.total_credit.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                  <span class="material-icons green"> arrow_upward </span>
                </div>
            </Grid>
            <Grid item xs={12} sm={6}>
                <b>Total debits</b>
                <div class="text-right">
                  {piggyBank.currency}$ <span class="value">{piggyBank.total_debit.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                  <span class="material-icons red"> arrow_downward </span>
                </div>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
      <UsageGraph piggyBank={piggyBank}/>
    </Card>
  )
};

export default PiggyBank