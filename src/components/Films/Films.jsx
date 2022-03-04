import style from "./Films.module.css";
import { Pagination } from "../Pagination/Pagination";
import Film from "../FilmCard/FilmCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { filmActionCreator } from "../../store/action-creators/filmActionCreators.ts";

export const Films = () => {
  const { items, pageSize, totalResults, page } = useSelector(
    (state) => state.films
  );
  const { searchName, filter } = useSelector((state) => state.search);
  const name = "movie";

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchName === "") {
      dispatch(filmActionCreator.getFilterPopular(page, filter, name));
    } else {
      dispatch(filmActionCreator.getSerchingFilter(searchName, page, name));
    }
  }, [page, searchName, filter, dispatch]);

  useEffect(() => {
    dispatch(filmActionCreator.getAllGenres("movie"));
  }, [dispatch]);

  const setNewPage = (p) => {
    dispatch(filmActionCreator.setPage(p));
  };

  return (
    <section className={style.filmPage}>
      <div className={style.content}>
        {items.map((item) => {
          return (
            <Film
              key={item.id}
              poster_path={item.poster_path}
              title={item.title}
              id={item.id}
              release_date={item.release_date}
              vote_average={item.vote_average}
              genres={item.genre_ids}
              name={name}
            />
          );
        })}
      </div>
      <div className={style.paginator}>
        <Pagination
          totalResults={totalResults}
          pageSize={pageSize}
          setPage={setNewPage}
          page={page}
        />
      </div>
    </section>
  );
};
