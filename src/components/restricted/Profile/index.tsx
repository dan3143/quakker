import Input from "components/common/Input";
import Metadata from "components/common/Metadata";
import { AuthContext } from "context/AuthContext";
import { FC, FormEvent, useContext, useEffect, useState } from "react";
import { updateUser } from "services/userService";
import "./profile.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile: FC = () => {
  const auth = useContext(AuthContext);

  const { username, name, email, _id, token } = auth.getUser();
  const [newUsername, setNewUsername] = useState(username ?? "");
  const [newName, setNewName] = useState(name ?? "");
  const [newEmail, setNewEmail] = useState(email ?? "");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [arePasswordsEqual, setArePasswordsEqual] = useState(true);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setArePasswordsEqual(newPassword === passwordConfirmation);
  }, [passwordConfirmation]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    updateUser(
      token ?? "",
      _id ?? "",
      newUsername,
      newName,
      newEmail,
      newPassword,
      passwordConfirmation
    )
      .then((response) => {
        setShowError(false);
        console.log(response);
        if (response["message"][0] === "invalid password") {
          setIsPasswordValid(false);
          document.getElementById("invalid-password")?.scrollIntoView();
          return;
        }
        setIsPasswordValid(true);
        auth.update(newUsername, newEmail, newName);
        setPasswordConfirmation("");
        setNewPassword("");
        setArePasswordsEqual(true);
        toast.success("Information updated");
      })
      .catch((err) => {
        setShowError(true);
        console.error("Error: " + err);
      });
  };
  return (
    <main className="profile">
      <Metadata title="My Profile" />
      <h1>Profile Info</h1>
      <form onSubmit={handleSubmit}>
        <p className="error-box" hidden={!showError}>
          Something went wrong. Try again
        </p>
        <p className="error-box" hidden={isPasswordValid} id="invalid-password">
          Your password is not valid. It should be at least 8 characters long
        </p>
        <Input
          title="Name"
          id="name"
          type="text"
          state={newName}
          setState={setNewName}
          required
        />
        <Input
          title="Username"
          id="username"
          type="text"
          state={newUsername}
          setState={setNewUsername}
          required
        />
        <Input
          title="Email"
          id="email"
          type="email"
          state={newEmail}
          setState={setNewEmail}
          required
        />
        <Input
          title="New password"
          id="new_password"
          type="password"
          state={newPassword}
          setState={setNewPassword}
          required
        />
        <span className="form__error" hidden={arePasswordsEqual}>
          The two passwords must match
        </span>
        <Input
          title="Confirm your password"
          id="password_confirmation"
          type="password"
          state={passwordConfirmation}
          setState={setPasswordConfirmation}
          required
        />
        <input
          type="submit"
          aria-label="Update"
          value="Update"
          className="button button--primary"
        />
      </form>
      <ToastContainer />
    </main>
  );
};

export default Profile;
