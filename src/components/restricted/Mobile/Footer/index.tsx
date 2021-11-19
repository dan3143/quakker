import {
  faBell,
  faEnvelope,
  faHashtag,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import FooterItem from "./FooterItem";

const Footer: FC = () => (
  <footer className="mobile-footer">
    <FooterItem to="/" icon={faHome} />
    <FooterItem to="/explore" icon={faHashtag} />
    <FooterItem to="/notifications" icon={faBell} />
    <FooterItem to="/messages" icon={faEnvelope} />
  </footer>
);

export default Footer;
