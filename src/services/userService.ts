import { post, get } from "./http";
import md5 from "crypto-js/md5";
import { Author } from "types/quak";

const login = async (username: string, password: string) => {
  const user = {
    username,
    password,
  };
  const response = await post("users/login", user);
  const json = await response.json();
  return json;
};

const getUser = async (username: string): Promise<Author> => {
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

export { login, signUp, getUser, getUserPfpUrl, getUserQuaks };
