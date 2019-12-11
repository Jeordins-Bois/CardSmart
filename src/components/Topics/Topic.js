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
    backgroundColor: "#607d8b",
    overflow: "visible"
  },
  headerRoot: {
    width: "100%",
    margin: 0,
    padding: 0,
    height: "20%",
    backgroundColor: "#ffc400"
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

    <Container maxWidth="md" style={{ marginBottom: "5vh" }}>
      <Link
        to={`/category/${props.match.params.topicId}/${props.topic.id}`}
        style={{ textDecoration: "none", color: "#ffc400" }}
      >
        <Card
          classes={{
            root: classes.root
          }}
          className="topic-box"
          raised={true}
        >
          <div className="icon"></div>
          <CardHeader
            classes={{ root: classes.headerRoot, avatar: classes.avatar }}
            className="topic-box-text"
          />
          <CardContent>{props.topic.name}</CardContent>
        </Card>
        <div style={{ width: "100%" }}>
          <p
            style={{
              width: "100%",
              textAlign: "right"
            }}
          >
            downloads
          </p>
        </div>
      </Link>
    </Container>
  );
};

export default withRouter(Topic);
