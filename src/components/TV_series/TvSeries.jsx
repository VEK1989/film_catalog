import style from "./TvSeries.module.css";
import { Pagination } from "../Pagination/Pagination";
import Film from "../FilmCard/FilmCard";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { filmActionCreator } from "../../store/action-creators/filmActionCreators.ts";
import { useTypedSelector } from "../../hooks/useTypeSelector";

export const TvSeries = () => {
  const { items, pageSize, totalResults, page } = useTypedSelector(
    (state) => state.films
  );
  const { searchName, filter } = useTypedSelector((state) => state.search);
  const name = "tv";

  const dispatch = useDispatch();

  useEffect(() => {
    if (searchName === "") {
      dispatch(filmActionCreator.getFilterPopular(page, filter, name));
    } else {
      dispatch(filmActionCreator.getSerchingFilter(searchName, page, name));
    }
  }, [page, searchName, filter, dispatch]);

  useEffect(() => {
    dispatch(filmActionCreator.getAllGenres("tv"));
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
              title={item.name}
              id={item.id}
              release_date={item.first_air_date}
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
