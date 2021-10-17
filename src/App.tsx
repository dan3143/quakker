import { unrestricted } from "lib/routes";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "components/restricted/Dashboard";

const helmetContext = {};

const App = () => (
  <HelmetProvider context={helmetContext}>
    <BrowserRouter>
      <Switch>
        {unrestricted.map(({ path, component }, index) => (
          <Route key={index} component={component} path={path} exact></Route>
        ))}
        <Route component={Dashboard} />
      </Switch>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
