import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "components/common/Logo";
import { AuthContext } from "context/AuthContext";

import { FC, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { getUserPfpUrl } from "services/userService";
import "./header.scss";

const Header: FC = () => {
  const auth = useContext(AuthContext);
  const user = auth.getUser();
  const { email, username } = user;
  const pic = getUserPfpUrl(email);

  return (
    <header className="mobile-header">
      <Link to={`/timeline/${username}`}>
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
