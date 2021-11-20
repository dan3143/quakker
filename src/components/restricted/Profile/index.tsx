import Input from "components/common/Input";
import Metadata from "components/common/Metadata";
import { AuthContext } from "context/AuthContext";
import { FC, useContext } from "react";
import "./profile.scss";

const Profile: FC = () => {
  const auth = useContext(AuthContext);
  const { username, name, email } = auth.getUser();
  return (
    <main className="profile">
      <Metadata title="My Profile" />
      <h1>Profile Info</h1>
      <form action="" method="POST">
        <Input
          title="Name"
          id="name"
          type="text"
          defaultValue={name}
          required
        />
        <Input
          title="Username"
          id="username"
          type="text"
          defaultValue={username}
          required
        />
        <Input
          title="Email"
          id="email"
          type="email"
          defaultValue={email}
          required
        />
        <Input title="Current Password" id="current_password" type="password" />
        <Input title="New password" id="new_password" type="password" />
        <input
          type="submit"
          aria-label="Update"
          value="Update"
          className="button button--primary"
        />
      </form>
    </main>
  );
};

export default Profile;
