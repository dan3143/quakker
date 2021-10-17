import Dummy from "components/common/Dummy";
import { restricted, dummy } from "lib/routes";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Footer from "../Mobile/Footer";
import Header from "../Mobile/Header";
import Nav from "../Nav";
import "./dashboard.scss";

const Dashboard = () => (
  <BrowserRouter>
    <div className="dashboard">
      <Nav />
      <Header />
      <div className="content">
        <Switch>
          {restricted.map(({ path, component }, index) => (
            <Route exact path={path} key={index} component={component} />
          ))}

          {dummy.map(({ path, name }, index) => (
            <Route
              exact
              path={path}
              key={index}
              render={() => <Dummy name={name} />}
            />
          ))}
        </Switch>
      </div>
      <Footer />
    </div>
  </BrowserRouter>
);
export default Dashboard;
