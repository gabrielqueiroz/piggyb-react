import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import Grid from '@material-ui/core/Grid';
import PiggyBank from './piggyBank';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  }
}));

    
const PiggyBanks = ({ piggyBanks }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        { 
          piggyBanks.map((piggyBank, index) => (
            <Zoom in={true} style={{ transitionDelay: 500 * (index/5) + 'ms' }}>
              <Grid item xs={12} sm={6}>
                <PiggyBank piggyBank={piggyBank} />
              </Grid>  
            </Zoom>
          ))
        }
      </Grid>  
    </div>
  )
};

export default PiggyBanks