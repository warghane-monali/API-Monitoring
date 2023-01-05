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

function Login() {
  const [login, setLogin] = useState({
    name: "",
    email: "",
    password: "",
    showPassword: false,
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setLogin({ ...login, [name]: value });
  };

  // console.log("register", register);

  const handleClickShowPassword = () => {
    setLogin({ ...login, showPassword: !login.showPassword });
  };

  // for character
  const [nameserror, setNamesError] = useState({});
  var alphaExp = /^[a-zA-Z]+$/;

  // for email
  const [emailerror, setEmailError] = useState({});
  var emailExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
    const isValid = formValidation();
    console.log("isvalid", isValid);
    return isValid;
  };

  // for validation
  const formValidation = () => {
    const nameserror = {};
    const emailerror = {};
    const passworderror = {};
    let isValid = true; //using flag

    if (login.name == "") {
      nameserror.name = "required field";
      isValid = false;
    } else if (login.name.length < 6) {
      nameserror.name = "Name must be more than 6 character required";
      isValid = false;
    } else if (!login.name.match(alphaExp)) {
      nameserror.name = "please enter only character";
      isValid = false;
    }

    if (login.email == "") {
      emailerror.email = "required field";
      isValid = false;
    } else if (!login.email.match(emailExp)) {
      emailerror.email = "Invalid email address";
      isValid = false;
    }

    if (login.password == "") {
      passworderror.password = "required field";
      isValid = false;
    } else if (!login.password.length >= 8) {
      passworderror.password = "Password must have at least 8 characters";
      isValid = false;
    } else if (!login.password.match(passwordExp)) {
      passworderror.password =
        "password must be only characters, numeric digits, underscore and first character must be a letter";
      isValid = false;
    }

    setNamesError(nameserror);
    setEmailError(emailerror);
    setPasswordError(passworderror);
    console.log(isValid);
    return isValid;
  };

  const PostData = async (e) => {
    e.preventDefault();
    console.log("testing..");
    if (handlerSubmit(e)) {
      console.log("confirm..");
      const { name, email, password } = login;
      const data = {
        name: name,
        email: email,
        password: password,
      };
      await axios
        .post("http://localhost:3000/users/login", data, {
          headers: {},
        })
        .then((response) => response.json())
        .then((data) => console.log("dataasxdcfvg", data.data));
    }
  };

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
          Login
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
            required
            // style={textStyle}
            value={login.name}
            onChange={(e) => {
              handleInputs(e);
            }}
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
            required
            style={textStyle}
            value={login.email}
            onChange={(e) => {
              handleInputs(e);
            }}
          />
          {Object.keys(emailerror).map((key) => {
            return (
              <Typography variant="subtitle1" sx={{ color: "red" }}>
                {emailerror[key]}
              </Typography>
            );
          })}

          <TextField
            label="Password"
            variant="outlined"
            name="password"
            placeholder="Password"
            required
            style={textStyle}
            type={login.showPassword ? "text" : "password"}
            value={login.password}
            onChange={(e) => {
              handleInputs(e);
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleClickShowPassword}>
                    {login.showPassword ? <Visibility /> : <VisibilityOff />}
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
          <Button type="submit" variant="contained" style={butnStyle} fullWidth>
            Login
          </Button>
          <p
            style={{
              desplay: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Don't have an account? Register here
          </p>
        </form>
      </Paper>
    </>
  );
}

export default Login;
