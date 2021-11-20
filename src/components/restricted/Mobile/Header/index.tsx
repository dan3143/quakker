import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "components/common/Logo";
import useUsers from "hooks/useUser";

import { FC } from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.scss";

const Header: FC = () => {
  const [users, getUser, addUser, deleteUser] = useUsers();
  const pic =
    getUser("kev")?.profilePic ??
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";
  return (
    <header className="mobile-header">
      <Link to="/timeline/kev">
        <img
          src={pic}
          alt="Your profile pic"
          className="mobile-header__profile-pic"
        />
      </Link>

      <Logo height={32} width={32} link="/" />
      <NavLink to="/search" activeClassName="mobile-header__button--active">
        <FontAwesomeIcon icon={faSearch} className="mobile-header__button" />
      </NavLink>
    </header>
  );
};

export default Header;
