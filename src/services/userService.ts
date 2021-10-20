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

export { login };
