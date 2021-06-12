import React from 'react'
import './piggyBank.css';
import clsx from 'clsx';
import UsageGraph from './usageGraph';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>({
  root: {
    minWidth: 275,
    transition: "transform 0.15s ease-in-out"
  },
  cardHovered: {
    transform: "scale(1.02)"
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
  const formatValue = (value) => { 
    return value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})
  }

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [visible, setVisibility] = React.useState(true);
  const toggleVisibility = () => {
    setVisibility(!visible);
  }

  const [state, setState] = React.useState({
    raised: false,
    shadow: 1,
  });

  const handleDelete = (piggyBankId) => {
    fetch('/piggy_banks/' + piggyBankId, {
      method: 'DELETE',
      headers: { 
        'Authorization': 'Basic Z2FicmllbC5xdWVpcm96QHNob3BpZnkuY29tOnBhc3N3b3Jk',
        'Accept': 'application/json',
        "Access-Control-Allow-Origin": "*",
      },
    })
    .then(res => res.json())
    .catch(console.log);

    toggleVisibility(); 
  }

  return (
    <div>
      {
        visible ? (
          <Card 
            className={classes.root}
            classes={{root: state.raised ? classes.cardHovered : ""}}
            onMouseOver={ () => setState({ raised: true, shadow: 3 }) } 
            onMouseOut={ () => setState({ raised: false, shadow: 1 }) } 
            raised={state.raised}
            zdepth={state.shadow}
          >
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={6}>
                  <Typography variant="h6">
                    {piggyBank.name}
                  </Typography>
                  <Typography variant="subtitle1">
                    {piggyBank.description}
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <Typography className={classes.totalValue} variant="h6">
                    {piggyBank.currency}$ <span class="total-value">{formatValue(piggyBank.balance)}</span>
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton 
                aria-label="delete"
                onClick={ () => handleDelete(piggyBank.id) }
              >
                <Delete />
              </IconButton>
              <IconButton aria-label="edit">
                <Edit />
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
                      <div>
                        {piggyBank.currency}$ <span class="value">{formatValue(piggyBank.total_credit)}</span>
                        <span class="material-icons green"> arrow_upward </span>
                      </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <b>Total debits</b>
                      <div>
                        {piggyBank.currency}$ <span class="value">{formatValue(piggyBank.total_debit)}</span>
                        <span class="material-icons red"> arrow_downward </span>
                      </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Collapse>
            <UsageGraph piggyBank={piggyBank}/>
          </Card>
        ) : null
      }
    </div>
  )
};

export default PiggyBank