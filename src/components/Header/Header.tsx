import { FC } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav/HeaderNav";
import Button from "../UI/Button/Button";

const Header: FC = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src="./logo.svg" alt="logo dental clinic" />
      </Link>
      <HeaderNav />
      <div className="header__book">
        <img src="./person.svg" alt="people photo" />
        <Button text="book now" />
      </div>
    </header>
  );
};

export default Header;
