import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FoodCards from './FoodCards'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid() {
  const [spacing] = React.useState(2);
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={10}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2, 3, 4, 5].map(value => (
            <Grid key={value} item>
                <FoodCards data-aos='fade-up' />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}