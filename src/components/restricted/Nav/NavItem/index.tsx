import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  icon: IconProp;
  destination: string;
  description: string;
}

const NavItem: FC<NavItemProps> = ({ icon, destination, description }) => (
  <NavLink
    to={destination}
    className="navigation__item"
    activeClassName="navigation__item--active"
  >
    <div className="navigation__item__icon">
      <FontAwesomeIcon icon={icon} />
    </div>
    <span className="navigation__item__description">{description}</span>
  </NavLink>
);

export default NavItem;
