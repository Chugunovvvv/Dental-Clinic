import { FC } from "react";
import { menu_links } from "../../../utils/menu_links";
import HeaderItem from "../HeaderItem/HeaderItem";
import "./HeaderNav.scss";

const HeaderNav: FC = () => {
  return (
    <nav className="header__nav">
      <ul className="header__list">
        {menu_links.map((link) => (
          <HeaderItem href={link.href} title={link.title} key={link.id} />
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
