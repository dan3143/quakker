import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Link, NavLink } from "react-router-dom";

interface FooterItemProps {
  to?: string;
  icon: IconProp;
  onClick?: () => void;
}

const FooterItem: FC<FooterItemProps> = ({ to, icon, onClick }) => (
  <NavLink
    to={to ?? ""}
    className="mobile-footer__footer-item"
    activeClassName={
      to === undefined ? "" : "mobile-footer__footer-item--active"
    }
    onClick={onClick}
    exact
  >
    <FontAwesomeIcon icon={icon} />
  </NavLink>
);

export default FooterItem;
