import { NavLink } from "react-router-dom";

import Loading from "../Loading/Loading";
import FilmPoster from "../FilmPoster/FilmPoster";
import star from "../../assets/images/star.png";
import { LikeButton } from "../LikeButton/LikeButton";
import style from "./FilmCard.module.css";
import { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypeSelector";

const FilmCard = ({
  poster_path,
  title,
  id,
  release_date,
  vote_average,
  genres,
  name,
}) => {
  const { genresId, isLoading } = useTypedSelector((state) => state.films);
  const [isHover, setIsHover] = useState(false);

  const genre = genresId.filter((n) => {
    return genres.indexOf(n.id) > -1;
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <article
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={style.filmItem}>
        {isHover ? (
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
                  <div>{release_date ? release_date.split(["-"])[0] : ""}</div>
                </div>
              </div>
              <div className={style.rating}>
                {vote_average}{" "}
                <img src={star} alt="star" width="14px" height="14px" />
              </div>
            </div>
          </NavLink>
        ) : (
          <FilmPoster poster_path={poster_path} />
        )}
        <figcaption className={style.title}>
          {title ?? "Name is not found"}
        </figcaption>
      </div>
    </article>
  );
};

export default FilmCard;
