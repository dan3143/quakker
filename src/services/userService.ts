import { post } from "./http";

const login = async (username: string, password: string) => {
  const user = {
    username,
    password,
  };
  const response = await post("users/login", user);
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

export { login, signUp };
