import React from "react";

import loading from "../../assets/images/loading.gif";
import style from "./Loading.module.css";

const Loading: React.FC = () => {
  return (
    <div className={style.loading}>
      <img src={loading} alt="Loading" width="100px" height="100px" />
    </div>
  );
};

export default Loading;
