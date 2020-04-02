//Specific Category Card
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Categories.css";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Card, CardHeader, CardContent } from "@material-ui/core";
import { setCategory } from "../../ducks/reducers/headerReducer";

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
    padding: 0,
    height: "20%"
  }
}));
//End of materialui stuff

const Category = props => {
  const classes = useStyles();
  // console.log(props.category);
  return (
    //   Link goes to "Topics" page of corresponding category

    <Container
      style={{
        marginBottom: "5vh"
      }}
      onClick={() => props.setCategory(props.category.category_name)}
      maxWidth="lg"
    >
      <Link
        to={`/category/${props.category.category_id}`}
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
            title={props.category.category_name}
          />
          <div
            style={{
              height: "50%",
              width: "50%",
              backgroundImage: `url(${props.category.category_img})`,
              backgroundSize: "cover",
              backgroundPostion: "center"
            }}
          />
          <CardContent>{props.category.category_description}</CardContent>
        </Card>
      </Link>
    </Container>
  );
};

const mapStateToProps = reduxState => {
  return reduxState;
};

const mapDispatchToProps = {
  setCategory
};


//! connect(function that returns redux state you will assign to props, object that contains the action functions/builders that will get assigned)
export default connect(mapStateToProps, mapDispatchToProps)(Category);
