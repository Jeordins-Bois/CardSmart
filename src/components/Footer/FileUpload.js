import React, { useState } from "react";
import { CreateNewFolder, Cancel } from "@material-ui/icons";
import { TextField } from "@material-ui/core";

const FileUpload = () => {
  let [showDropdown, changeDropdown] = useState(false);

  const handleClick = () => {
    changeDropdown(!showDropdown);
    console.log(showDropdown);
  };

  let inputComponent = (
    <div style={{marginTop: '25px'}}>
      <TextField
        id="standard-basic"
        label="Notes to Convert"
        variant="outlined"
        multiline={true}
        rows='10'
        size='large'
        style={{width: "80%"}}
      />
      <Cancel onClick={() => handleClick()} style={{ fontSize: "30px" }} />
    </div>
  );

  return (
    <div>
      {showDropdown ? (
        <div>{inputComponent}</div>
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
