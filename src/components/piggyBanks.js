import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import PiggyBank from './piggyBank';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  grid: {
    marginTop: 10,
  }
}));

    
const PiggyBanks = ({ piggyBanks }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" > My Piggy Banks </Typography>
      <Grid 
        container 
        spacing={3}
        justify="flex-start"
        alignItems="flex-start"
        className={classes.grid}
      >
        { 
          piggyBanks ? (
            piggyBanks.map((piggyBank, index) => (
              <Zoom in={true} style={{ transitionDelay: 500 * (index/5) + 'ms' }}>
                <Grid item xs={12} sm={6}>
                  <PiggyBank piggyBank={piggyBank} />
                </Grid>  
              </Zoom>
            )) 
          ) : (
            <Grid item xs={12} sm={6}>
              <Card>
                <CardContent>
                  <Skeleton />
                  <Skeleton animation={false} />
                  <Skeleton animation="wave" />
                </CardContent>
              </Card>
            </Grid>
          )
        }
      </Grid>  
    </div>
  )
};

export default PiggyBanks