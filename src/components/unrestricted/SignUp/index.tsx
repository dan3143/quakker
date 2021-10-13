import Form from "components/common/Form";
import Input from "components/common/Input";
import { Link } from "react-router-dom";
import Metadata from "components/common/Metadata";

const SignUp = () => (
  <div className="auth-form">
    <Metadata title="Register" description="Create your account" />
    <Form title="Create your account" action="/login">
      <Input id="name" title="Name" type="text" required="required" />
      <Input id="username" title="Userame" type="text" required="required" />
      <Input id="email" title="Email" type="email" required="required" />
      <Input
        id="password"
        title="Password"
        type="password"
        required="required"
      />
      <Input
        id="password-confirm"
        title="Password Confirmation"
        type="password"
        required="required"
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

export default SignUp;
