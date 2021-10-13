import { unrestricted } from "lib/routes";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const helmetContext = {};

const App = () => (
  <HelmetProvider context={helmetContext}>
    <BrowserRouter>
      <Switch>
        {unrestricted.map(({ path, component }, index) => (
          <Route key={index} component={component}></Route>
        ))}
      </Switch>
    </BrowserRouter>
  </HelmetProvider>
);

export default App;
