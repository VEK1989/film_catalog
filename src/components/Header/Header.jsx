import style from "./Header.module.css";
import icon from "../../assets/images/header-icon.svg";
import iconDark from "../../assets/images/logoDark.png";
import { Search } from "../Search/Search";
import { Toggle } from "../ThemeToggle/Toggler";

export const Header = ({ theme, toggleTheme }) => {
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
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  );
};
