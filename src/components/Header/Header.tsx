import style from "./Header.module.css";
import icon from "../../assets/images/header-icon.svg";
import iconDark from "../../assets/images/logoDark.png";
import { Search } from "../Search/Search";
import { Toggle } from "../ThemeToggle/Toggler";
import { useContext } from "react";
import { Context } from "../Context/Context";

export const Header = () => {
  const { theme } = useContext(Context);

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <figure className={style.header_leftSide}>
          <img
            src={theme === "dark" ? iconDark : icon}
            alt="icon"
            width="30px"
            height="30px"
          />
          <Search />
        </figure>
        <Toggle />
      </div>
    </header>
  );
};
