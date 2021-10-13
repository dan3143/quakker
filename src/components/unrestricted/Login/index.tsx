import Form from "components/common/Form";
import Input from "components/common/Input";
import { Link } from "react-router-dom";
import Metadata from "components/common/Metadata";

const Login = () => (
  <div className="auth-form">
    <Metadata title="Login" description="Login to your quakker account" />
    <Form title="Login to your account" action="/home">
      <Input
        id="username"
        title="Email or Username"
        type="text"
        required="required"
      />
      <Input
        id="password"
        title="Password"
        type="password"
        required="required"
      />
      <Link to="/forgot-password" className="auth-form__forgot-link">
        Forgot your password?
      </Link>
      <input
        type="submit"
        value="Login now"
        aria-label="Login now"
        className="button button--primary auth-form__button"
      />
      <p className="auth-form__message">
        Don't have an account? <Link to="/signup">Join free today.</Link>
      </p>
    </Form>
  </div>
);

export default Login;
