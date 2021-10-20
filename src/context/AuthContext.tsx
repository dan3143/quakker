import { createContext, FC, useEffect, useState } from "react";
import { isObjectEmpty } from "utils";

interface AuthInfo {
  token?: string;
  name?: string;
  username?: string;
  email?: string;
}

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
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
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
