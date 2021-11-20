import Form from "components/common/Form";
import Input from "components/common/Input";
import { Link, useHistory } from "react-router-dom";
import Metadata from "components/common/Metadata";
import { FormEvent, useEffect, useState } from "react";
import { signUp } from "services/userService";

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [samePassword, setSamePassword] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [showError, setShowError] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setSamePassword(password === passwordConfirm);
  }, [passwordConfirm]);

  const handleSignUp = (event: FormEvent) => {
    event.preventDefault();
    if (!samePassword) return;
    setSamePassword(true);
    signUp(username, email, name, password, passwordConfirm)
      .then((json) => {
        setShowError(false);
        if (json["message"][0] === "invalid password") {
          setIsPasswordValid(false);
          document.getElementById("invalid-password")?.scrollIntoView();
          return;
        }
        setIsPasswordValid(true);
        history.push("/login");
      })
      .catch((error) => setShowError(true));
  };
  return (
    <div className="auth-form">
      <Metadata title="Register" description="Create your account" />
      <Form title="Create your account" action="/login" onSubmit={handleSignUp}>
        <p className="error-box" hidden={!showError}>
          Something went wrong. Try again
        </p>
        <p className="error-box" hidden={isPasswordValid} id="invalid-password">
          Your password is not valid. It should be at least 8 characters long
        </p>
        <Input
          id="name"
          title="Name"
          type="text"
          required="required"
          setState={setName}
          state={name}
        />
        <Input
          id="username"
          title="Username"
          type="text"
          required="required"
          setState={setUsername}
          state={username}
        />
        <Input
          id="email"
          title="Email"
          type="email"
          required="required"
          setState={setEmail}
          state={email}
        />
        <Input
          id="password"
          title="Password (min 8 characters)"
          type="password"
          required="required"
          setState={setPassword}
          state={password}
        />
        <span className="form__error" hidden={samePassword}>
          The two passwords must match
        </span>
        <Input
          id="password-confirm"
          title="Password Confirmation"
          type="password"
          required="required"
          setState={setPasswordConfirm}
          state={passwordConfirm}
        />
        <input
          type="submit"
          value="Sign Up"
          aria-label="Sign Up"
          className="button button--primary auth-form__button"
        />
        <p className="auth-form__message">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </Form>
    </div>
  );
};

export default SignUp;
