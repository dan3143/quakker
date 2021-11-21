import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { NavLink } from "react-router-dom";

interface FooterItemProps {
  to?: string;
  icon: IconProp;
  onClick?: () => void;
  name: string;
}

const FooterItem: FC<FooterItemProps> = ({ to, icon, onClick, name }) => (
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
    <span className="sr-only">{name}</span>
  </NavLink>
);

export default FooterItem;
