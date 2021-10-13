import Form from "../../common/Form";
import Input from "../../common/Input";
import { Link } from "react-router-dom";
import Metadata from "../../common/Metadata";

const ForgotPassword = () => (
  <div className="auth-form">
    <Metadata
      title="Recover password"
      description="Recover the password of your Quakker account"
    />
    <Form title="Recover your password">
      <Input
        id="username"
        title="Email or Username"
        required="required"
        type="text"
      />
      <input
        type="submit"
        value="Recover your password"
        aria-label="Recover your password"
        className="button button--primary auth-form__button"
      />
      <p className="auth-form__message">
        Return to <Link to="/login">Login</Link>
      </p>
    </Form>
  </div>
);

export default ForgotPassword;
