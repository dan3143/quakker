import useUsers from "hooks/useUser";
import { FC, useEffect, useState } from "react";
import { getUser, getUserPfpUrl } from "services/userService";
import { formatNumber } from "utils";

interface UserInfoProps {
  username: string;
  nQuaks: number;
}

const UserInfo: FC<UserInfoProps> = ({ username, nQuaks }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    getUser(username)
      .then((user) => {
        setUser(user);
      })
      .catch((err) => console.error("User not found"));
  }, []);
  if (!user) return <div></div>;
  const { name } = user;
  const profilePic = getUserPfpUrl(username);
  const formattedNQuaks = formatNumber(nQuaks);
  return (
    <header className="user-header">
      <img src={profilePic} alt={name} className="user-header__profile-pic" />
      <section className="user-header__info">
        <p className="user-header__info__name">{name}</p>
        <p className="user-header__info__username">@{username}</p>
        <p className="user-header__info__quaks">{formattedNQuaks} quaks</p>
      </section>
    </header>
  );
};

export default UserInfo;
