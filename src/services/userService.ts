import { post, get, putAuth } from "./http";
import md5 from "crypto-js/md5";
import { AuthInfo } from "types/user";

const login = async (username: string, password: string) => {
  const user = {
    username,
    password,
  };
  const response = await post("users/login", user);
  const json = await response.json();
  return json;
};

const getUser = async (username: string) => {
  const response = await get(`users/${username}`);
  const json = await response.json();
  return json.data;
};

const getUserQuaks = async (username: string) => {
  const response = await get(`users/${username}/tweets`);
  const json = await response.json();
  return json.data;
};

const getUserPfpUrl = (email?: string) =>
  `https://gravatar.com/avatar/${email ? md5(email) : ""}`;

const updateUser = async (
  token: string,
  userId: string,
  username: string,
  name: string,
  email: string,
  password: string,
  passwordConfirmation: string
) => {
  const data = {
    name,
    email,
    password,
    username,
    passwordConfirmation,
  };
  const response = await putAuth(`users/${userId}`, token, data);
  const json = await response.json();
  return json;
};

const signUp = async (
  username: string,
  email: string,
  name: string,
  password: string,
  passwordConfirmation: string
) => {
  const data = {
    name,
    email,
    username,
    password,
    passwordConfirmation,
  };

  const response = await post("users", data);
  const json = await response.json();
  return json;
};

export { login, signUp, getUser, getUserPfpUrl, getUserQuaks, updateUser };
