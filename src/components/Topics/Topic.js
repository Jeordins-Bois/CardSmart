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
  Fab
} from "@material-ui/core";

//? Redux imports
import { connect } from "react-redux";
import { setTopic } from "../../ducks/reducers/headerReducer";

//this is all material ui stuff i couldn't get it to work in another file and then import it so it's here
//----------------------------------------------------------------
//see category.js for explanation
//----------------------------------------------------------------
const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "white",
    overflow: "visible"
  },
  headerRoot: {
    borderTopRightRadius: "4px",
    borderTopLeftRadius: "4px",
    width: "100%",
    margin: 0,
    padding: 0,
    height: "20%",
    backgroundColor: theme.palette.primary[700]
  },
  fab: {
    height: "75px",
    width: "75px",
    backgroundColor: theme.palette.primary[700],
    boxShadow:
      "inset 0px 0px 4px -1px rgba(237, 236, 236), inset 0px 0px 5px 0px rgba(237, 236, 236), inset 0px 0px 10px 0px rgba(237, 236, 236)",
    position: "absolute",
    zIndex: 1,
    top: -20,
    left: -10
  }
}));
//End of materialui stuff

const Topic = props => {
  const classes = useStyles();
  // console.log(props);
  return (
    //   Link goes to "Topics" page of corresponding category

    <Container
      maxWidth="lg"
      style={{ marginBottom: "5vh" }}
      onClick={() => props.setTopic(props.topic.deck_name)}
    >
      <Link
        to={`/category/${props.match.params.topicId}/${props.topic.deck_id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Card
          classes={{
            root: classes.root
          }}
          className="card"
          raised={true}
        >
          <Fab
            disableRipple={true}
            classes={{
              root: classes.fab
            }}
          >
            {" "}
          </Fab>
          <CardHeader classes={{ root: classes.headerRoot }} />
          <CardContent>{props.topic.deck_name}</CardContent>
          <div
            style={{ width: "100%", marginBottom: "5px", marginRight: "5px" }}
          >
            <p
              style={{
                width: "100%",
                textAlign: "right"
              }}
            >
              downloads
            </p>
          </div>
        </Card>
      </Link>
    </Container>
  );
};
const mapStateToProps = reduxState => {
  return reduxState;
};

const mapDispatchToProps = {
  setTopic
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Topic));
