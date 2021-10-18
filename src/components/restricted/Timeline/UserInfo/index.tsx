import useUsers from "hooks/useUser";
import { FC } from "react";
import { formatNumber } from "utils";

interface UserInfoProps {
  username: string;
  nQuaks: number;
}

const UserInfo: FC<UserInfoProps> = ({ username, nQuaks }) => {
  const [users, ..._] = useUsers();
  const user = users.find((user) => user.username === username);
  if (!user) return <div></div>;
  const { profilePic, name } = user;
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
