//Footer with add button
import React, { useState, useEffect } from "react";
import "./AddPreview.css";
import FooterCategory from "./FooterCategory";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { AppBar, Toolbar, Drawer, IconButton } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import { height } from "@material-ui/system";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Add from "@material-ui/icons/Add";
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
  return ["Category", "Content", "Submit"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return "Select campaign settings...";
    case 1:
      return "What is an ad group anyways?";
    case 2:
      return "This is the bit I really care about!";
    default:
      return "Unknown stepIndex";
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

  //?
  const [state, setState] = useState({
    categories: [
      {
        title: "dummy thicc data",
        description: "I'm trying to code, but the clap of this card's etc.",
        id: 1
      },
      { title: "category 2", description: "The boring one", id: 2 },
      { title: "djkhaled", description: "another one", id: 3 }
    ]
  });
  //?
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
            <ChevronLeftIcon fontSize="large" />
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
                <Typography className={classes.instructions}>
                  All steps completed
                </Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.backButton}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            )}
          </div>
          {/* //! */}
          {state.categories.map(category => {
            return (
              <FooterCategory
                key={`categorykey${category.name}`}
                category={category}
              />
            );
          })}
        </div>
      </Drawer>
    </>
  );
};

export default AddPreview;
