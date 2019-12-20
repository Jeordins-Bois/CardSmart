//Main header with 2 dropdowns
import React, { useEffect, useState } from "react";
import { withRouter, Link, useLocation } from "react-router-dom";

//? Redux Imports
import { connect } from "react-redux";
import { checkSession } from "../../ducks/reducers/userReducer";
import { getCategory, getTopic } from "../../ducks/reducers/headerReducer";

//MaterialUi imports
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Button,
  Drawer,
  IconButton,
  Breadcrumbs,
  Typography,
  Avatar
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import "./Header.css";
import SavedDecks from "./SavedDecks";

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
    display: "flex",
    justifyContent: "flex-start",
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
  },
  breadcrumbSeparator: {
    color: "#f5f5f5"
  }
}));
//End of materialui stuff

const Header = props => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();

  //? Scrolls to top of page on route change -- located in header bc it's always rendered
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  //? Checks Session on mount to see if user is logged in
  useEffect(() => {
    props.getCategory();
    props.getTopic();
    props.checkSession();
  }, []);

  //? Login hands user off to AUTH0 in the index.js
  const userLogin = () => {
    window.location.href = "http://localhost:3069/api/login";
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const getBreadcrumbContent = () => {
    const path = props.location.pathname.split("/");
    // const path = [1, 2, 3];
    path.splice(0, 2);

    const strings = [];
    path.reduce((a, e) => {
      const string = a + "/" + e;
      strings.push(string);
      // console.log(string);
      return string;
    }, "category");
    return strings.map((e, i) => {
      // console.log(e);
      return (
        <Typography style={{ fontSize: "4vw" }}>
          <Link style={{ color: "#f5f5f5" }} to={`/${e}`}>
            {i === 0
              ? props.ducks.headerReducer.category
              : props.ducks.headerReducer.topic}
          </Link>
        </Typography>
      );
    });
  };
  console.log(props.ducks.userReducer.user);
  //? Ternary to show the user logged in or the guest
  // if (props.ducks.userReducer.loggedIn) {
  //   return <h1>{props.ducks.userReducer.user.username}</h1>;
  // } else {
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
            <MenuIcon fontSize="large" />
          </IconButton>
          {props.ducks.userReducer.loggedIn ? (
            <>
              <Button
                size="large"
                variant="contained"
                style={{
                  backgroundColor: `${theme.palette.secondary["A100"]}`,
                  position: "absolute",
                  zIndex: 1,
                  right: 0,
                  marginRight: "5vw"
                }}
              >
                LOGOUT
              </Button>
            </>
          ) : (
            <Button
              size="large"
              variant="contained"
              onClick={() => userLogin()}
              style={{
                backgroundColor: `${theme.palette.secondary["A100"]}`,
                position: "absolute",
                zIndex: 1,
                right: 0,
                marginRight: "5vw"
              }}
            >
              LOGIN
            </Button>
          )}
        </Toolbar>
        <Toolbar
          variant="dense"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Breadcrumbs
            classes={{ separator: classes.breadcrumbSeparator }}
            aria-label="breadcrumb"
          >
            <Typography style={{ fontSize: "4vw" }}>
              <Link style={{ color: "#f5f5f5" }} to="/">
                Home
              </Link>
            </Typography>
            {getBreadcrumbContent()}
          </Breadcrumbs>
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
              <ChevronLeftIcon fontSize="large" />
            ) : (
              <ChevronRightIcon fontSize="large" />
            )}
          </IconButton>
        </div>
        <SavedDecks
          user={
            props.ducks.userReducer.loggedIn
              ? props.ducks.userReducer.user
              : null
          }
        />
      </Drawer>
    </>
  );
  // }
};

const mapReduxToProps = ducks => {
  return {
    ducks
  };
};

export default connect(mapReduxToProps, {
  checkSession,
  getCategory,
  getTopic
})(withRouter(Header));
