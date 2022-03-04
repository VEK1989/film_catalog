import React, { useContext } from "react";

import altImg from "../../assets/images/altTitle.svg";
import altImgDark from "../../assets/images/altPhotoDark.png";
import style from "./NoPosterCard.module.css";
import { Context } from "../Context/Context";

const NoPosterCard: React.FC = () => {
  const { theme } = useContext(Context);
  return (
    <div className={style.fuckYou}>
      <div>
        <img
          src={theme === "dark" ? altImgDark : altImg}
          alt="Oops!"
          width="100px"
          height="100px"
        />
        <p>Oops!</p>
      </div>
    </div>
  );
};

export default NoPosterCard;
