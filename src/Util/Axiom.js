import { Alert } from "@mui/material";
import axios from "axios";

import { ConnectionManager } from "./ConnectionManager";
// import { Alert } from "react-native";

const get = async (url, options) => resolver(axios.get(url, options));

const post = async (url, body, options) =>
  resolver(axios.post(url, body, options));

const patch = async (url, body, options) =>
  resolver(axios.patch(url, body, options));

const resolver = async (promise) => {
  let connectionState = await ConnectionManager.post();
  // console.log('connectionState', connectionState)
  if (connectionState != null) {
    if (!connectionState.isConnected) {
      Alert.alert("Network Issue", "Please check your internet connection");
      console.log("monaliiii");
      return [null, "NO_INTERNET"];
    } else {
      let data,
        error = null;
      try {
        let response = await promise;
        data = response.data;
      } catch (err) {
        error = err;
      }

      return [data, error];
    }
  } else {
    let data,
      error = null;
    try {
      let response = await promise;
      data = response.data;
    } catch (err) {
      error = err;
    }

    return [data, error];
  }
};

export default {
  get,
  post,
  patch,
};
