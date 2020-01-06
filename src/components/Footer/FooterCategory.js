import React from "react";
import { useTheme } from "@material-ui/styles";
import { Typography, Paper } from "@material-ui/core";

const FooterCategory = props => {
  const theme = useTheme();
  console.log(props);
  return (
    <Paper
      style={{
        width: "80%",
        margin: "15px auto",
        backgroundColor: props.selected
          ? theme.palette.primary["500"]
          : theme.palette.primary["100"],
        color: props.selected ? "#f5f5f5" : "inherit"
      }}
    >
      <Typography
        variant="body1"
        align="center"
        onClick={function() {
          props.selectCategory(props.index);
          props.setCompleted(true);
          props.setCard({
            category: props.category,
            title: props.cardSetUp.title,
            color: props.cardSetUp.color,
            notes: props.cardSetUp.notes
          });
        }}
      >
        {props.category.category_name}
      </Typography>
    </Paper>
  );
};

export default FooterCategory;
