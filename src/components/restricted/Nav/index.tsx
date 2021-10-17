import {
  faBell,
  faBookmark,
  faEllipsisH,
  faEnvelope,
  faHashtag,
  faHome,
  faList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "components/common/Logo";
import NavItem from "./NavItem";
import "./navigation.scss";

const Nav = () => (
  <nav className="navigation">
    <Logo height={40} width={40} />
    <NavItem description="Home" destination="/home" icon={faHome} />
    <NavItem description="Explore" destination="/explore" icon={faHashtag} />
    <NavItem
      description="Notifications"
      destination="/notifications"
      icon={faBell}
    />
    <NavItem description="Messages" destination="/messages" icon={faEnvelope} />
    <NavItem
      description="Bookmarks"
      destination="/bookmarks"
      icon={faBookmark}
    />
    <NavItem description="Lists" destination="/lists" icon={faList} />
    <NavItem description="Profile" destination="/profile" icon={faUser} />
    <NavItem description="More" destination="/more" icon={faEllipsisH} />
    <button className="button button--primary">Tweet</button>
  </nav>
);

export default Nav;
