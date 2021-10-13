import { FC } from "react";
import Metadata from "components/common/Metadata";
import Logo from "components/common/Logo";
import { Link } from "react-router-dom";
import "./welcome.scss";

const Welcome: FC = () => (
  <main className="welcome">
    <Metadata description="Quakker" />
    <section className="welcome__left-side">
      <Logo logoClass="logo__svg--contrast" width={256} height={256} />
    </section>
    <section className="welcome__right-side">
      <div>
        <Logo width={64} height={64} />
        <h1>Welcome to Quakker</h1>
        <Link to="/login" className="button button--secondary">
          Login now
        </Link>
        <div>
          <p className="signup-text">
            Don't have an account? <Link to="/signup">Join free today.</Link>
          </p>
          <Link to="/signup" className="button button--secondary">
            Sign up
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default Welcome;
