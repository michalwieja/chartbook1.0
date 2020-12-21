import axios from "axios";
import { returnErrors } from "./errorActions";

export const loadUser = () => (dispatch, getState) => {
  dispatch({ type: "USER_LOADING" });

  axios
    .get("/auth/user", tokenConfig(getState))
    .then((res) => dispatch({ type: "USER_LOADED", payload: res.data }))
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: "AUTH_ERROR" });
    });
};

export const register = ({ name, email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });

  axios
    .post("/auth/register", body, config)
    .then((res) => dispatch({ type: "REGISTER_SUCCESS", payload: res.data }))
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "REGISTER_FAIL")
      );
      dispatch({ type: "REGISTER_FAIL" });
    });
};

export const login = ({ email, password }) => (dispatch) => {
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  axios
    .post("/auth/login", body, config)
    .then((res) => dispatch({ type: "LOGIN_SUCCESS", payload: res.data }))
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({ type: "LOGIN_FAIL" });
    });
};

export const tokenConfig = (getState) => {
  const token = getState().user.token;
  const config = {
    headers: {
      "Content-type": "application/json",
    },
  };

  if (token) {
    config.headers["auth-token"] = token;
  }
  return config;
};
