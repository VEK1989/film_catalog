import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import altImg from "../../assets/images/altTitle.svg";
import altImgDark from "../../assets/images/altPhotoDark.png";
import loading from "../../assets/images/loading.gif";
import star from "../../assets/images/star.png";
import { LikeButton } from "../LikeButton/LikeButton";
import style from "./FilmCard.module.css";

const FilmCard = ({
  isHovered,
  unHovered,
  poster_path,
  title,
  id,
  hover,
  release_date,
  vote_average,
  genres,
  theme,
  name,
}) => {
  const { genresId, isLoading } = useSelector((state) => state.films);

  const genre = genresId.filter((n) => {
    return genres.indexOf(n.id) > -1;
  });

  return (
    <article>
      {!isLoading ? (
        <div onMouseEnter={isHovered} onMouseLeave={unHovered}>
          {hover.id === id ? (
            <div className={style.filmItem}>
              <NavLink to={`/details/${name}/${id}`} className={style.link}>
                <div className={style.filmInfo}>
                  <LikeButton id={id} className={style.like} />
                  <div className={style.info}>
                    <div>
                      {genre[0] ? (
                        <div>
                          {genre.length > 1 ? (
                            <span>
                              {genre[0].name}/{genre[1].name}
                            </span>
                          ) : (
                            <span>{genre[0].name}</span>
                          )}
                        </div>
                      ) : null}
                      <div>
                        {release_date ? release_date.split(["-"])[0] : ""}
                      </div>
                    </div>
                  </div>
                  <div className={style.rating}>
                    {vote_average}{" "}
                    <img src={star} alt="star" width="14px" height="14px" />
                  </div>
                </div>
              </NavLink>
              <span className={style.title}>{title}</span>
            </div>
          ) : (
            <figure className={style.filmItem}>
              {poster_path ? (
                <img
                  src={`https://www.themoviedb.org/t/p/original${poster_path}`}
                  alt="#"
                  width="250px"
                  height="330px"
                />
              ) : (
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
              )}

              <figcaption className={style.title}>
                {title ? title : "Name is not found"}
              </figcaption>
            </figure>
          )}
        </div>
      ) : (
        <div className={style.loading}>
          <img src={loading} alt="Loading" width="100px" height="100px" />
        </div>
      )}
    </article>
  );
};

export default FilmCard;
