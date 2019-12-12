//Main header with 2 dropdowns
import React, { useEffect, useState } from "react";

//? Redux Imports
import { connect } from "react-redux";
import { checkSession } from "../../ducks/reducers/userReducer";

//MaterialUi imports
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button, Drawer, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./Header.css";

//this is all material ui stuff i couldn't get it to work in another file and then import it so it's here
const drawerWidth = 275;
const useStyles = makeStyles(theme => ({
  root: {
    position: "fixed",
    display: "flex",
    backgroundColor: theme.palette.primary[700]
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#f5f5f5"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));
//End of materialui stuff

const Header = props => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  //? Checks Session on mount to see if user is logged in
  useEffect(() => {
    props.checkSession();
  }, []);

  //? Login hands user off to AUTH0 in the index.js
  const userLogin = () => {
    window.location.href = "http://localhost:3069/api/login";
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  console.log(props.ducks);
  console.log(theme);

  //? Ternary to show the user logged in or the guest
  if (props.ducks.userReducer.loggedIn) {
    return <h1>{props.ducks.userReducer.user.username}</h1>;
  } else {
    return (
      <>
        <AppBar
          position="static"
          color="primary"
          classes={{ root: classes.root }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
            <Button
              variant="contained"
              onClick={userLogin}
              style={{
                backgroundColor: `${theme.palette.secondary["A100"]}`,
                position: "absolute",
                zIndex: 1,
                right: 0,
                marginRight: "5vw"
              }}
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
          className={classes.drawer}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={toggleDrawer}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
        </Drawer>
      </>
    );
  }
};

const mapReduxToProps = ducks => {
  return {
    ducks
  };
};

export default connect(mapReduxToProps, { checkSession })(Header);
