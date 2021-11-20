import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { NavLink } from "react-router-dom";

interface NavItemProps {
  icon: IconProp;
  description: string;
  destination?: string;
  onClick?: () => void;
}

const NavItem: FC<NavItemProps> = ({
  icon,
  destination,
  description,
  onClick,
}) => (
  <NavLink
    to={destination ?? ""}
    exact
    className="navigation__item"
    activeClassName={
      destination === undefined ? "" : "navigation__item--active"
    }
    onClick={onClick}
  >
    <div className="navigation__item__icon">
      <FontAwesomeIcon icon={icon} />
    </div>
    <span className="navigation__item__description">{description}</span>
  </NavLink>
);

export default NavItem;
