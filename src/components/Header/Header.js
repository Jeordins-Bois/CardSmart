//Main header with 2 dropdowns
import React, { useEffect } from "react";
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
  Paper,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import EmptyHeader from "./EmptyHeader";
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
    backgroundColor: theme.palette.primary[700]
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
  },
  spaceHolder: {
    color: theme.palette.primary[700],
    padding: "5px",
    boxSizing: "border-box",
    height: "20vh",
    width: "100%",
    border: "solid black .5px"
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

  const handleLogout = () => {
    window.location.href = "http://localhost:3069/api/logout";
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };
  //! This was working until I started doing user profile stuff and it broke so i commented it out
  const getBreadcrumbContent = () => {
    const path = props.location.pathname.split("/");
    console.log(path);

    if (path[1] === "saved") {
      return (
        <Typography
          style={{
            fontSize: "4vw",
            color: "#f5f5f5",
            textDecoration: "underline"
          }}
        >
          Saved Deck
        </Typography>
      );
    } else if (path[1] === "user") {
      return (
        <Typography style={{ fontSize: "4vw" }}>
          <Link style={{ color: "#f5f5f5" }} to={`/user`}>
            Profile
          </Link>
        </Typography>
      );
    } else {
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
          <Typography key={`breadcrumbkey${i}`} style={{ fontSize: "4vw" }}>
            <Link style={{ color: "#f5f5f5" }} to={`/${e}`}>
              {i === 0
                ? props.ducks.headerReducer.category
                : props.ducks.headerReducer.topic}
            </Link>
          </Typography>
        );
      });
    }
  };
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
            <MenuIcon
              fontSize="large"
              style={{ color: `${theme.palette.secondary["A100"]}` }}
            />
          </IconButton>
          {props.ducks.userReducer.loggedIn ? (
            <>
              <Button
                onClick={() => handleLogout()}
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
              <ChevronLeftIcon
                fontSize="large"
                style={{ color: `${theme.palette.secondary["A100"]}` }}
              />
            ) : (
              <ChevronRightIcon
                fontSize="large"
                style={{ color: `${theme.palette.secondary["A100"]}` }}
              />
            )}
          </IconButton>
        </div>
        {props.ducks.userReducer.loggedIn ? (
          <SavedDecks
            toggleDrawer={toggleDrawer}
            user={props.ducks.userReducer.user}
          />
        ) : (
          <EmptyHeader classes={classes} />
        )}
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
