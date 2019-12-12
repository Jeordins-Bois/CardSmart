//Footer with add button
import React, { useState, useEffect } from "react";
import "./AddPreview.css";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Drawer, IconButton } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    height: "90vh"
  }
});

const AddPreview = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <AppBar
        position="fixed"
        style={{
          top: "auto",
          bottom: 0,
          boxShadow:
            "0px -2px 4px -1px rgba(0,0,0,0.2), 0px -4px 5px 0px rgba(0,0,0,0.14), 0px -1px 10px 0px rgba(0,0,0,0.12)"
        }}
        color="primary"
      >
        <Toolbar>
          <Fab
            style={{
              backgroundColor: `${theme.palette.secondary["A100"]}`,
              position: "absolute",
              zIndex: 1,
              top: -28,
              right: 0,
              marginRight: "5vw",
              textAlign: "center",
              fontSize: "30px"
            }}
            onClick={toggleDrawer}
          >
            <i class="fas fa-plus"></i>
          </Fab>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.fullList}
        role="presentation"
        anchor="bottom"
        open={open}
      >
        <div className={classes.fullList} role="presentation">
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
      </Drawer>
    </>
  );
};

export default AddPreview;
