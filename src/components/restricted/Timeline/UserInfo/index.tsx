import { FC, useEffect, useState } from "react";
import { getUser, getUserPfpUrl } from "services/userService";
import { Author } from "types/quak";
import { formatNumber } from "utils";

interface UserInfoProps {
  user: Author;
  nQuaks: number;
}

const UserInfo: FC<UserInfoProps> = ({ user, nQuaks }) => {
  const { name, email, username } = user;
  const profilePic = getUserPfpUrl(email);
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
