import style from "./Toggler.module.css";
import cn from "classnames";
import { useContext } from "react";
import { Context } from "../Context/Context";

export const Toggle = () => {
  const { theme, themeToggler } = useContext(Context);

  return (
    <div className={style.switch}>
      <span>Dark theme</span>
      <div
        className={cn(style.switch_btn, {
          [style.switch_on]: theme === "dark",
        })}
        onClick={themeToggler}
      ></div>
    </div>
  );
};
