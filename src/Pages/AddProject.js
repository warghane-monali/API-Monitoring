import React from "react";
import { Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";

const textStyle = { marginBottom: "25px" };
const butnStyle = {
  alignItem: "center",
  backgroundColor: "green",
  color: "white",
  marginTop: "20px",
};

const handleClickShowPassword = () => {
  // setInput({ ...input, showPassword : !input.showPassword });
};

function AddProject() {
  return (
    <>
      <Paper
        style={{ width: "300px", margin: "20px auto", padding: "50px 80px" }}
      >
        <Typography
          style={{
            fontWeight: "600",
            fontSize: "28px",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Add Project
        </Typography>
        <TextField
          label="Environment"
          variant="outlined"
          placeholder="Enter Environment here"
          fullWidth
          name="environment"
          style={textStyle}
          //    value={input.phone_number}
          //    onChange={}
        />

        <TextField
          label="API URL"
          variant="outlined"
          placeholder="API URL"
          fullWidth
          name="api_url"
          style={textStyle}
          //    value={input.phone_number}
          //    onChange={}
        />

        <TextField
          label="Platform"
          variant="outlined"
          placeholder="Plateform"
          fullWidth
          name="plateform"
          style={textStyle}
          //    value={input.phone_number}
          //    onChange={}
        />

        <TextField
          label="Created By"
          variant="outlined"
          placeholder="Created By"
          fullWidth
          name="createdBy"
          style={textStyle}
          //    value={input.phone_number}
          //    onChange={}
        />

        <Button type="submit" variant="contained" style={butnStyle} fullWidth>
          Add Project
        </Button>
      </Paper>
    </>
  );
}

export default AddProject;
