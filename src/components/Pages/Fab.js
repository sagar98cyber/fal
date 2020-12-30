import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
import { orange } from '@material-ui/core/colors';
import { Icon, Fab } from '@material-ui/core';

const { FabButtons, FabButton } = Fab
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      position: 'absolute',
      bottom: theme.spacing(3),
      right: theme.spacing(2),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Fab position="right-bottom" slot="fixed" color='home.background'>
        <AddIcon />
      </Fab> */}
      {/* <Fab position="left-top" slot="fixed" color="yellow">
        <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
        <Icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></Icon>
        <FabButtons position="bottom">
          <FabButton>1</FabButton>
          <FabButton>2</FabButton>
          <FabButton>3</FabButton>
        </FabButtons>
      </Fab> */}
      hgfddfg
    </div>
  );
}