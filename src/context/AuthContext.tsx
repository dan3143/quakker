import { createContext, FC, useEffect, useState } from "react";
import { isObjectEmpty } from "utils";
import { getUser as findUser } from "services/userService";
import { AuthInfo } from "types/user";

interface IAuthProvider {
  login: (u: AuthInfo) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
  getUser: () => AuthInfo;
}

const defaultState = {
  login: (u: AuthInfo) => {},
  logout: () => {},
  isLoggedIn: () => false,
  getUser: () => {
    return {};
  },
};

const AuthContext = createContext<IAuthProvider>(defaultState);

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<AuthInfo>();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") ?? "{}");
    setUser(user);
  }, []);

  const login = (user: AuthInfo) => {
    findUser(user.username!)
      .then((foundUser) => {
        const { username, name, email } = foundUser;
        const userInfo = { username, name, email, token: user.token };
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
    <AuthContext.Provider value={{ login, logout, isLoggedIn, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
