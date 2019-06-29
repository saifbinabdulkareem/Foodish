
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export default function Chips() {
  const classes = useStyles();

  function handleDelete() {
    alert('You clicked the delete icon.');
  }

  function handleClick() {
    alert('You clicked the Chip.');
  }

  return (
    <div className={classes.root}>
       <Chip
        label="Karachi"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
      <Chip
        label="Islamabad"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
      <Chip
        label="Lahore"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
      <Chip
        label="Multan"
        className={classes.chip}
        component="a"
        href="#chip"
        clickable
      />
      <Chip
        label="Rawalpindi"
        clickable
        className={classes.chip}
        color="primary"
      />
      <Chip
        label="Quetta"
        clickable
        className={classes.chip}
        color="primary"
      />
      <Chip
        label="Peshawar"
        clickable
        className={classes.chip}
        color="primary"
      />
      <Chip
        label="Gujranwala"
        clickable
        className={classes.chip}
        color="primary"
      />
      <Chip
        label="Sukkar"
        className={classes.chip}
        color="secondary"
      />
       <Chip
        label="Kashmir"
        className={classes.chip}
        color="secondary"
      />
      <Chip
        label="Hyderabad"
        className={classes.chip}
        color="secondary"
      />
       <Chip
        label="Sibbi"
        className={classes.chip}
        color="secondary"
      />
    </div>
  );
}