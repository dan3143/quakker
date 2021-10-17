import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Link, NavLink } from "react-router-dom";

interface FooterItemProps {
  to: string;
  icon: IconProp;
}

const FooterItem: FC<FooterItemProps> = ({ to, icon }) => (
  <NavLink
    to={to}
    className="mobile-footer__footer-item"
    activeClassName="mobile-footer__footer-item--active"
  >
    <FontAwesomeIcon icon={icon} />
  </NavLink>
);

export default FooterItem;
