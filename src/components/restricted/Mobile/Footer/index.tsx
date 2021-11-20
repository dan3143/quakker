import {
  faBell,
  faEnvelope,
  faHashtag,
  faHome,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "context/AuthContext";
import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import FooterItem from "./FooterItem";

const Footer: FC = () => {
  const auth = useContext(AuthContext);
  return (
    <footer className="mobile-footer">
      <FooterItem to="/" icon={faHome} />
      <FooterItem to="/explore" icon={faHashtag} />
      <FooterItem to="/notifications" icon={faBell} />
      <FooterItem to="/messages" icon={faEnvelope} />
      <FooterItem onClick={() => auth.logout()} icon={faSignOutAlt} />
    </footer>
  );
};

export default Footer;
