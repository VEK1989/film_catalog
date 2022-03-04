import { useContext } from "react";
import style from "./Main.module.css";
import { Route, NavLink } from "react-router-dom";
import { Films } from "../../components/Films/Films";
import { TvSeries } from "../../components/TV_series/TvSeries";
import cn from "classnames";
import { Context } from "../../components/Context/Context";

export const Main = () => {
  const { theme } = useContext(Context);
  const routes = [
    {
      link: "/films",
      name: "Films",
    },
    {
      link: "/tv_series",
      name: "TV series",
    },
  ];

  return (
    <div>
      <nav className={style.links}>
        {routes.map((route) => {
          return (
            <NavLink
              to={route.link}
              activeClassName={cn(style.active, {
                [style.dark]: theme === "dark",
              })}
              className={style.link}
            >
              {route.name}
            </NavLink>
          );
        })}
      </nav>
      <main>
        <Route path="/films" render={() => <Films />} />
        <Route path="/tv_series" render={() => <TvSeries />} />
      </main>
    </div>
  );
};
