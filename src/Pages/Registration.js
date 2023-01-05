import styled from "styled-components";
import React, { useState } from "react";
import { Paper, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import axios from "axios";
import Axiom from "../Util/Axiom";

const textStyle = { marginTop: "25px" };
const butnStyle = {
  alignItem: "center",
  backgroundColor: "green",
  color: "white",
  marginTop: "25px",
};

function Registration() {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    contactNo: "",
    createdBy: "",
    password: "",
    showPassword: false,
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setRegister({ ...register, [name]: value });
  };

  // console.log("register", register);

  const handleClickShowPassword = () => {
    setRegister({ ...register, showPassword: !register.showPassword });
  };

  // for character
  const [nameserror, setNamesError] = useState({});
  var alphaExp = /^[a-zA-Z]+$/;

  // for email
  const [emailerror, setEmailError] = useState({});
  var emailExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // for mobile number
  const [phonenoerror, setPhoneNoError] = useState({});
  var phonenoExp = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;

  // for password
  const [passworderror, setPasswordError] = useState({});
  var passwordExp =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;

  // for submit button
  const handlerSubmit = (e) => {
    e.preventDefault();
    setNamesError({});
    setEmailError({});
    setPasswordError({});
    setPhoneNoError({});
    const isValid = formValidation();
    console.log("isvalid", isValid);
    return isValid;
  };

  // for validation
  const formValidation = () => {
    const nameserror = {};
    const emailerror = {};
    const passworderror = {};
    const phonenoerror = {};
    let isValid = true; //using flag

    if (register.name == "") {
      nameserror.name = "required field";
      isValid = false;
    } else if (register.name.length < 6) {
      nameserror.name = "Name must be more than 6 character required";
      isValid = false;
    } else if (!register.name.match(alphaExp)) {
      nameserror.name = "please enter only character";
      isValid = false;
    }

    if (register.email == "") {
      emailerror.email = "required field";
      isValid = false;
    } else if (!register.email.match(emailExp)) {
      emailerror.email = "Invalid email address";
      isValid = false;
    }

    if (register.password == "") {
      passworderror.password = "required field";
      isValid = false;
    } else if (!register.password.length >= 8) {
      passworderror.password = "Password must have at least 8 characters";
      isValid = false;
    } else if (!register.password.match(passwordExp)) {
      passworderror.password =
        "password must be only characters, numeric digits, underscore and first character must be a letter";
      isValid = false;
    }

    if (register.contactNo == "") {
      phonenoerror.contactNo = "required field";
      isValid = false;
    } else if (register.contactNo.length < 10) {
      phonenoerror.contactNo = "Please enter 10 digit mobile number";
      isValid = false;
    } else if (register.contactNo.length > 10) {
      phonenoerror.contactNo = "Mobile number not greater than 10 digit ";
      isValid = false;
    } else if (!register.contactNo.match(phonenoExp)) {
      phonenoerror.contactNo = "Enter Only 10 digit";
      isValid = false;
    }

    setNamesError(nameserror);
    setEmailError(emailerror);
    setPasswordError(passworderror);
    setPhoneNoError(phonenoerror);
    console.log(isValid);
    return isValid;
  };

  const PostData = async (e) => {
    e.preventDefault();
    console.log("testing..");
    if (handlerSubmit(e)) {
      console.log("confirm..");
      const { name, email, contactNo, createdBy, password } = register;
      const data = {
        name: name,
        email: email,
        contactNo: contactNo,
        createdBy: "admin",
        password: password,
      };
      await axios
        .post("http://api.catalysis.foxberry.link/users/registration", data, {
          headers: {},
        })
        .then((response) => response.json())
        .then((data) => console.log("dataasxdcfvg", data.data));
    }
  };

  return (
    <>
      <Paper
        style={{ width: "500px", margin: "20px auto", padding: "60px 80px" }}
      >
        <Typography
          style={{
            fontWeight: "600",
            fontSize: "28px",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Registration
        </Typography>
        <form
          onSubmit={(e) => {
            PostData(e);
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            placeholder="Enter Your Name"
            fullWidth
            name="name"
            value={register.name}
            required
            onChange={(e) => {
              handleInputs(e);
            }}
            // onChange={ (e) => setName({...name,[e.target.name] : e.target.value})}
          />
          {Object.keys(nameserror).map((key) => {
            return (
              <Typography
                variant="subtitle1"
                sx={{ color: "red", marginBottom: "5px" }}
              >
                {nameserror[key]}
              </Typography>
            );
          })}

          <TextField
            label="Email"
            variant="outlined"
            placeholder="Email"
            fullWidth
            name="email"
            style={textStyle}
            value={register.email}
            required
            // onChange={ (e) => setEmail({...email,[e.target.name] : e.target.value})}
            onChange={handleInputs}
          />
          {Object.keys(emailerror).map((key) => {
            return (
              <Typography variant="subtitle1" sx={{ color: "red" }}>
                {emailerror[key]}
              </Typography>
            );
          })}

          <TextField
            label="Conatact Number"
            variant="outlined"
            placeholder="Contact Number"
            fullWidth
            name="contactNo"
            style={textStyle}
            value={register.contactNo}
            required
            // onChange={ (e) => setContactNo({...contactNo,[e.target.name] : e.target.value})}
            onChange={handleInputs}
          />
          {Object.keys(phonenoerror).map((key) => {
            return (
              <Typography variant="subtitle1" sx={{ color: "red" }}>
                {phonenoerror[key]}
              </Typography>
            );
          })}

          {/* <TextField
          label="Created By"
          variant="outlined"
          placeholder="Created By"
          fullWidth
          name="createdBy"
          style={textStyle}
             value={input.phone_number}
             onChange={}
             onChange={ (e) => setCreatedBy({...createdBy,[e.target.name] : e.target.value})}
        /> */}

          <TextField
            label="Password"
            variant="outlined"
            name="password"
            placeholder="Password"
            // type="password"
            style={textStyle}
            type={register.showPassword ? "text" : "password"}
            value={register.password}
            required
            onChange={handleInputs}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {register.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            fullWidth
          />
          {Object.keys(passworderror).map((key) => {
            return (
              <Typography variant="subtitle1" sx={{ color: "red" }}>
                {passworderror[key]}
              </Typography>
            );
          })}

          <Button
            type="submit"
            variant="contained"
            style={butnStyle}
            fullWidth
            // onClick={PostData}
          >
            Register
          </Button>
          <p
            style={{
              desplay: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Have already an account? Login here
          </p>
        </form>
      </Paper>
    </>
  );
}

export default Registration;
