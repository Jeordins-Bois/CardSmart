//Specific Category Card
import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  CardActions
} from "@material-ui/core";
import { getCategory } from "../../ducks/reducers/headerReducer";

//this is all material ui stuff i couldn't get it to work in another file and then import it so it's here
//----------------------------------------------------------------
// This hook makes it so you can add classes into materialUI Components
// Used like this: above, the useStyles const invokes makestyles and then takes a callback function
// the function returns and object of objects.  each object inside the returned object
// is the name of the class you want to override on a given component.
// the Card component only has one base class that can be overridden: root so i put all the styling inside the root object
// next you call the hook and store it as a variable (classes, below)
// then down below i pass in as 'classes' props an object that contains the key value pair
// root: classes.root and that overrides the default styling of the root class in the Card Component
// with whatever styling I give it
//----------------------------------------------------------------
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "white"
  },
  headerRoot: {
    borderTopRightRadius: "4px",
    borderTopLeftRadius: "4px",
    width: "100%",
    margin: 0,
    padding: 0
  },
  avatar: {
    position: "relative",
    left: 5,
    top: 5
  },
  title: {}
}));
//End of materialui stuff

const Category = props => {
  const classes = useStyles();
  console.log(props);
  return (
    //   Link goes to "Topics" page of corresponding category

    <Container maxWidth="lg">
      <Link
        to={`/category/${props.category.id}`}
        style={{ textDecoration: "none" }}
      >
        <Card
          classes={{
            root: classes.root
          }}
          className="card"
          raised={true}
        >
          <CardHeader
            classes={{ root: classes.headerRoot }}
            className="category-box-text"
            title={props.category.title}
          />
          <CardContent>{props.category.description}</CardContent>
        </Card>
      </Link>
    </Container>
  );
};

export default Category;
