import Form from "components/common/Form";
import Input from "components/common/Input";
import { Link, useHistory } from "react-router-dom";
import Metadata from "components/common/Metadata";
import { FormEvent, useState, useContext } from "react";
import { login as logUserIn } from "services/userService";
import { AuthContext } from "context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const auth = useContext(AuthContext);
  const history = useHistory();

  const handleLogin = (event: FormEvent) => {
    event.preventDefault();
    logUserIn(username, password)
      .then((data) => {
        if (data.message === "ok") {
          const user = data.data;
          auth.login(user);
          setShowError(false);
          history.push("/");
        } else {
          setShowError(true);
        }
      })
      .catch((err) => setShowError(true));
  };

  return (
    <div className="auth-form">
      <Metadata title="Login" description="Login to your quakker account" />
      <Form title="Login to your account" onSubmit={handleLogin}>
        <p className="error-box" hidden={!showError}>
          Something went wrong. Check your username and password
        </p>
        <Input
          id="username"
          title="Email or Username"
          type="text"
          required="required"
          setState={setUsername}
          state={username}
        />
        <Input
          id="password"
          title="Password"
          type="password"
          required="required"
          setState={setPassword}
          state={password}
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
};

export default Login;
