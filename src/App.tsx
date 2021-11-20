import { unrestricted } from "lib/routes";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "components/restricted/Dashboard";
import { useContext } from "react";
import { AuthContext } from "context/AuthContext";

const helmetContext = {};

const App = () => {
  const auth = useContext(AuthContext);
  return (
    <HelmetProvider context={helmetContext}>
      <BrowserRouter>
        {auth.isLoggedIn() ? (
          <Dashboard />
        ) : (
          <Switch>
            {unrestricted.map(({ path, component }, index) => (
              <Route
                key={index}
                component={component}
                path={path}
                exact
              ></Route>
            ))}
          </Switch>
        )}
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
