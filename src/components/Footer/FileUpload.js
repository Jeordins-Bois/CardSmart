import React, { useState } from "react";
import { CreateNewFolder, Cancel } from "@material-ui/icons";
import { TextField } from "@material-ui/core";

const FileUpload = props => {
  let [showDropdown, changeDropdown] = useState(false);
  console.log(props);

  const handleClick = () => {
    changeDropdown(!showDropdown);
  };

  let inputComponent = (
    <div
      style={{ marginTop: "25px", placeSelf: "center", position: "relative" }}
    >
      <TextField
        id="standard-basic"
        label="Notes to Convert"
        variant="outlined"
        multiline={true}
        rows="10"
        size="large"
        style={{ width: "100%" }}
        onChange={e =>
          props.setCard({
            category: props.cardSetUp.category,
            title: props.cardSetUp.title,
            color: props.cardSetUp.color,
            notes: e.target.value
          })
        }
      />
      <Cancel
        onClick={() => handleClick()}
        style={{
          fontSize: "30px",
          position: "absolute",
          right: "-15px",
          top: "-15px"
        }}
      />
    </div>
  );

  return (
    <div style={{ marginTop: "3vh" }}>
      {showDropdown ? (
        <div style={{ display: "flex" }}>{inputComponent}</div>
      ) : (
        <div>
          <CreateNewFolder
            style={{ fontSize: "60px", color: "#455a64" }}
            onClick={() => handleClick()}
          />
        </div>
      )}
    </div>
  );
};
export default FileUpload;
