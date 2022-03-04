import style from "./FilmDetails.module.css";
import { NavLink } from "react-router-dom";
import altImg from "../../assets/images/altTitle.svg";
import altImgDark from "../../assets/images/altPhotoDark.png";
import { StarsRating } from "../../components/StarsRating/StarsRating";
import { LikeButton } from "../../components/LikeButton/LikeButton";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { filmActionCreator } from "../../store/action-creators/filmActionCreators.ts";
import { useContext, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import { Context } from "../../components/Context/Context";
import { useTypedSelector } from "../../hooks/useTypeSelector";

export const FilmDetails = ({ filmId, name }) => {
  const { properties, isLoading } = useTypedSelector((state) => state.films);
  const dispatch = useDispatch();
  const { theme } = useContext(Context);
  useEffect(() => {
    dispatch(filmActionCreator.getFilmsProperty(filmId, name));
  }, [dispatch, filmId, name]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section>
      <div className={style.container}>
        <nav className={style.header}>
          <NavLink
            to="/films"
            className={cn(style.back, { [style.dark]: theme === "dark" })}
          >
            <span>{"<"} Back</span>
          </NavLink>
        </nav>

        <figure className={style.poster}>
          {properties.poster_path ? (
            <img
              src={`https://www.themoviedb.org/t/p/original${properties.poster_path}`}
              alt="poster"
              width="380px"
              height="573px"
              className={style.poster}
            />
          ) : (
            <div className={style.fuckYou}>
              <div>
                <img
                  src={theme === "dark" ? altImgDark : altImg}
                  alt="Fuck you"
                  width="100px"
                  height="100px"
                />
                <p>Oops!</p>
              </div>
            </div>
          )}
        </figure>
        <span className={style.name}>
          {properties.title ? properties.title : ""}
        </span>
        <div className={style.rating}>
          <StarsRating rating={properties.vote_average} id={properties.id} />
        </div>
        <aside className={style.props}>
          {properties.genres?.length > 0 ? (
            <span className={style.props_name}>Genre:</span>
          ) : null}
          <span className={style.props_name}>Year:</span>
          <span className={style.props_name}>Running time:</span>
        </aside>
        <aside className={style.value}>
          {properties.genres?.length > 0 ? (
            <span className={style.value_name}>
              {properties.genres.length > 1 ? (
                <span>
                  {properties.genres[0].name}/{properties.genres[1].name}
                </span>
              ) : (
                <span>{properties.genres[0].name}</span>
              )}
            </span>
          ) : null}
          <span className={style.value_name}>
            {properties.release_date
              ? properties.release_date.split(["-"])[0]
              : ""}
          </span>
          <span className={style.value_name}>
            {properties.runtime ? properties.runtime : ""}minutes
          </span>
        </aside>
        <article className={style.descriotion}>{properties.overview}</article>
        <div className={style.like}>
          <LikeButton id={properties.id} />
        </div>
      </div>
    </section>
  );
};
