//Specific topic
import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Topics.css";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  CardActions
} from "@material-ui/core";

//this is all material ui stuff i couldn't get it to work in another file and then import it so it's here
//----------------------------------------------------------------
//see category.js for explanation
//----------------------------------------------------------------
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#607d8b"
  },
  headerRoot: {
    width: "100%",
    margin: 0,
    padding: 0
  },
  avatar: {
    position: "relative",
    left: -10,
    top: -10
  },
  title: {}
}));
//End of materialui stuff

const Topic = props => {
  const classes = useStyles();
  console.log(props);
  return (
    //   Link goes to "Topics" page of corresponding category

    <Container maxWidth="md">
      <Link
        to={`/category/${props.match.params.topicId}/${props.topic.id}`}
        style={{ textDecoration: "none" }}
      >
        <Card
          classes={{
            root: classes.root
          }}
          className="category-box"
          raised={true}
        >
          <CardHeader
            classes={{ root: classes.headerRoot, avatar: classes.avatar }}
            className="category-box-text"
            title={props.topic.name}
          />
        </Card>
      </Link>
    </Container>
  );
};

export default withRouter(Topic);
