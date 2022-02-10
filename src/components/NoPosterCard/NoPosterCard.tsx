import React from "react";

import altImg from "../../assets/images/altTitle.svg";
import altImgDark from "../../assets/images/altPhotoDark.png";
import style from "./NoPosterCard.module.css";

const NoPosterCard: React.FC<IProps> = ({ theme }) => {
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

interface IProps {
  theme: string;
}
