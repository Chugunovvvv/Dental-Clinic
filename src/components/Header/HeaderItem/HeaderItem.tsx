import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./HeaderItem.scss";

interface IHeaderItem {
  href: string;
  title: string;
}

const HeaderItem: FC<IHeaderItem> = ({ href, title }) => {
  return (
    <li className="header__list-item">
      <NavLink className="header__list-link" to={href}>
        {title}
      </NavLink>
    </li>
  );
};

export default HeaderItem;
