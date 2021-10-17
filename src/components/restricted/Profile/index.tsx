import Input from "components/common/Input";
import Metadata from "components/common/Metadata";
import { FC } from "react";
import "./profile.scss";

const Profile: FC = () => (
  <main className="profile">
    <Metadata title="My Profile" />
    <h1>Profile Info</h1>
    <form action="" method="POST">
      <Input title="Name" id="name" type="text" defaultValue="Kevin" required />
      <Input
        title="Username"
        id="username"
        type="text"
        defaultValue="kev"
        required
      />
      <Input
        title="Email"
        id="email"
        type="email"
        defaultValue="kevin2020@yopmail.com"
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

export default Profile;
