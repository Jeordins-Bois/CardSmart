import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { Cancel } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  }
}));

export default function CreateCards({
  card,
  categoryIndex,
  questionIndex,
  deleteItem
}) {
  const classes = useStyles();
  const [question, setQuestion] = React.useState("");
  const [answer, setAnswer] = React.useState("");
  const [open, setOpen] = React.useState(false);

  console.log(question);

  const handleChange = event => {
    setQuestion(event.target.value);
  };

  const handleChangeAnswer = event => {
    setQuestion(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseAnswer = () => {
    setOpen(false);
  };

  const handleOpenAnswer = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Question</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={question}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>...</em>
          </MenuItem>
          {card.dropdown.map((question, index) => {
            return (
              <MenuItem
                value={`${question}`}
                key={`menuItem ${index}`}
              >{`${question}`}</MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {card.subject}
      <Cancel
        onClick={() => deleteItem(categoryIndex, questionIndex)}
        style={{ fontSize: "30px" }}
      />
      {/* <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">answer</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleCloseAnswer}
          onOpen={handleOpenAnswer}
          value={answer}
          onChange={handleChangeAnswer}
        >
          <MenuItem value="">
            <em>...</em>
          </MenuItem>
          {card.answer.map((answer, index) => {
            return (
              <MenuItem
                value={`${answer}`}
                key={`menuItem ${index}`}
              >{`${answer}`}</MenuItem>
            );
          })}
        </Select>
      </FormControl> */}
    </div>
  );
}
