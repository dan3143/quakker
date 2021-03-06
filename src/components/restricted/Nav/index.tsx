import {
  faBell,
  faBookmark,
  faEllipsisH,
  faEnvelope,
  faHashtag,
  faHome,
  faSignOutAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "components/common/Logo";
import NavItem from "./NavItem";
import "./navigation.scss";
import { useContext } from "react";
import { AuthContext } from "context/AuthContext";

const Nav = () => {
  const auth = useContext(AuthContext);
  return (
    <nav className="navigation">
      <Logo height={40} width={40} link="/" />
      <NavItem description="Home" destination="/" icon={faHome} />
      <NavItem description="Explore" destination="/explore" icon={faHashtag} />
      <NavItem
        description="Notifications"
        destination="/notifications"
        icon={faBell}
      />
      <NavItem
        description="Messages"
        destination="/messages"
        icon={faEnvelope}
      />
      <NavItem
        description="Bookmarks"
        destination="/bookmarks"
        icon={faBookmark}
      />
      <NavItem description="Profile" destination="/profile" icon={faUser} />
      <NavItem description="Options" destination="/more" icon={faEllipsisH} />
      <NavItem description="Logout" onClick={auth.logout} icon={faSignOutAlt} />

      <button className="button button--primary">Tweet</button>
    </nav>
  );
};

export default Nav;
