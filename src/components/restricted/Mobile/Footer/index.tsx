import {
  faBell,
  faEnvelope,
  faHashtag,
  faHome,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "context/AuthContext";
import { FC, useContext } from "react";
import "./footer.scss";
import FooterItem from "./FooterItem";

const Footer: FC = () => {
  const auth = useContext(AuthContext);
  return (
    <footer className="mobile-footer">
      <FooterItem to="/" icon={faHome} name="Home" />
      <FooterItem to="/explore" icon={faHashtag} name="Explore" />
      <FooterItem to="/notifications" icon={faBell} name="Notifications" />
      <FooterItem to="/messages" icon={faEnvelope} name="Messages" />
      <FooterItem
        onClick={() => auth.logout()}
        icon={faSignOutAlt}
        name="Sign out"
      />
    </footer>
  );
};

export default Footer;
