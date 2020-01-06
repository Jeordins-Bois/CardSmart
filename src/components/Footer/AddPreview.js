//Footer with add button
import React, { useState, useEffect } from "react";
import "./AddPreview.css";
import FooterCategory from "./FooterCategory";
import AddDeck from "./AddDeck";
import ColorFan from "./ColorFan";
import ComprehendConnect from "./Comprehend/ComprehendConnect";
import FileUpload from "./FileUpload";
import Finalize from "./Finalize/Finalize";

import axios from "axios";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Drawer, IconButton } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import { height } from "@material-ui/system";
import {
  ChevronLeft,
  Add,
  CreateNewFolder,
  WorkTwoTone
} from "@material-ui/icons";
//!
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//

const useStyles = makeStyles({
  //!
  root: {
    width: "100%"
  },
  backButton: {
    // marginRight: theme.spacing(1)
  },
  instructions: {
    width: "100%"
    // marginTop: theme.spacing(1),
    // marginBottom: theme.spacing(1)
  },
  //!
  list: {
    width: 250
  },
  fullList: {
    height: "90vh",
    backgroundColor: "rgba(245,245,245, 1)"
  },
  appBar: {
    top: "auto",
    bottom: 0,
    boxShadow:
      "0px -2px 4px -1px rgba(0,0,0,0.2), 0px -4px 5px 0px rgba(0,0,0,0.14), 0px -1px 10px 0px rgba(0,0,0,0.12)"
  },
  stepper: {
    backgroundColor: "#f5f5f5"
  }
});

//!
function getSteps() {
  return ["Category", "Content", "Questions", "Finalize"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "SELECT CATEGORY...";
    case 1:
      return "CHOOSE A TITLE/ACCENT COLOR.";
    case 2:
      return "APPROVE DECK";
    case 3:
      return "FINALIZE CARDS";
    default:
      return "UNKNOWN STEP INDEX";
  }
}
//!

const AddPreview = () => {
  const classes = useStyles();
  const theme = useTheme();

  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  //!
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  //!

  let [completed, setCompleted] = useState(false);

  let [selected, setSelected] = useState(null);

  let selectedComponent;

  const [state, setState] = useState({
    categories: []
  });

  let [cardSetUp, setCard] = useState({
    category: "",
    title: "",
    color: "",
    notes: ""
  });

  useEffect(() => {
    axios
      .get("/api/categories")
      .then(res => {
        setState({ categories: res.data });
      })
      .catch(err => "getCategories error: " + err);
  }, []);

  const selectCategory = index => {
    setSelected(index);
  };

  if (activeStep === 0 && state.categories.length !== 0) {
    //! Controller for which component shown
    selectedComponent = state.categories.map((category, index) => {
      if (selected === index) {
        return (
          <FooterCategory
            index={index}
            selectCategory={selectCategory}
            selected={true}
            key={`categorykey${category.title}`}
            category={category}
            setCompleted={setCompleted}
            setCard={setCard}
            cardSetUp={cardSetUp}
          />
        );
      } else {
        return (
          <FooterCategory
            index={index}
            selectCategory={selectCategory}
            selected={false}
            key={`categorykey${category.title}`}
            category={category}
            setCompleted={setCompleted}
            setCard={setCard}
            cardSetUp={cardSetUp}
          />
        );
      }
    });
  } else if (activeStep === 1) {
    selectedComponent = (
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <AddDeck setCard={setCard} cardSetUp={cardSetUp} />
        <ColorFan setCard={setCard} cardSetUp={cardSetUp} />
        <FileUpload setCard={setCard} cardSetUp={cardSetUp} />
      </section>
    );
  } else if (activeStep === 2) {
    selectedComponent = <ComprehendConnect cardSetUp={cardSetUp} />;
  } else if (activeStep >= 3) {
    selectedComponent = <Finalize cardSetUp={cardSetUp} />;
  }

  if (cardSetUp.title && cardSetUp.color) {
    completed = true;
  }

  return (
    <>
      <AppBar
        classes={{ root: classes.appBar }}
        position="fixed"
        // style={{
        //   top: "auto",
        //   bottom: 0,
        //   boxShadow:
        //     "0px -2px 4px -1px rgba(0,0,0,0.2), 0px -4px 5px 0px rgba(0,0,0,0.14), 0px -1px 10px 0px rgba(0,0,0,0.12)"
        // }}
        color="primary"
      >
        <Toolbar>
          <Fab
            style={{
              backgroundColor: `${theme.palette.secondary.A100}`,
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
            <Add fontSize="large" />
          </Fab>
        </Toolbar>
      </AppBar>
      <Drawer anchor="bottom" open={open}>
        <div className={classes.fullList} role="presentation">
          <IconButton onClick={toggleDrawer}>
            <ChevronLeft fontSize="large" />
            <div className={classes.root}></div>
          </IconButton>
          <Stepper
            classes={{ root: classes.stepper }}
            activeStep={activeStep}
            alternativeLabel
          >
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div>
            {activeStep === steps.length ? (
              <div>
                <Typography
                  align="center"
                  variant="h6"
                  className={classes.instructions}
                >
                  All steps completed
                </Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <Typography
                  align="center"
                  variant="h6"
                  className={classes.instructions}
                >
                  {getStepContent(activeStep)}
                </Typography>
                <div
                  style={{
                    marginTop: "2vh",
                    display: "flex",
                    justifyContent: "space-around"
                  }}
                >
                  <Button
                    variant="contained"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={function() {
                      handleNext();
                      setCompleted(false);
                    }}
                    disabled={!completed}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            )}
          </div>
          {selectedComponent}
        </div>
      </Drawer>
    </>
  );
};

export default AddPreview;
