import { createContext, FC, useEffect, useState } from "react";
import { isObjectEmpty } from "utils";
import { getUser as findUser } from "services/userService";
import { AuthInfo } from "types/user";

interface IAuthProvider {
  login: (u: AuthInfo) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
  getUser: () => AuthInfo;
  update: (username: string, email: string, nanem: string) => void;
}

const defaultState = {
  login: (u: AuthInfo) => {},
  logout: () => {},
  isLoggedIn: () => false,
  getUser: () => {
    return {};
  },
  update: (username: string, email: string, name: string) => {},
};

const AuthContext = createContext<IAuthProvider>(defaultState);

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<AuthInfo>();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") ?? "{}");
    setUser(user);
  }, []);

  const update = (username: string, email: string, name: string) => {
    const { _id, token } = user ?? {};
    const newInfo = { _id, token, username, name, email };
    localStorage.setItem("user", JSON.stringify(newInfo));
    setUser(newInfo);
  };

  const login = (user: AuthInfo) => {
    findUser(user.username!)
      .then((foundUser) => {
        const { username, name, email, _id } = foundUser;
        const userInfo = { _id, username, name, email, token: user.token };
        setUser(userInfo);
        localStorage.setItem("user", JSON.stringify(userInfo));
      })
      .catch((err) => console.error(err));
  };

  const logout = () => {
    setUser({});
    localStorage.removeItem("user");
  };

  const isLoggedIn = () => !isObjectEmpty(user);

  const getUser = () => user ?? {};

  return (
    <AuthContext.Provider
      value={{ login, logout, isLoggedIn, getUser, update }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
