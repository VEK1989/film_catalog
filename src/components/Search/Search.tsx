import style from "./Search.module.css";
import searchImg from "../../assets/images/header-search.png";
import { searchActionCreators } from "../../store/action-creators/searchActionCreators";
import { useDispatch } from "react-redux";
import { useDebouncedCallback } from "use-debounce";
import { useEffect, useRef, useState } from "react";

export const Search = () => {
  const dispatch = useDispatch();
  const searchRef = useRef<HTMLInputElement>(null);
  const [selectValue, setSelectValue] = useState<string>("popular");

  const handleOnNameChange = useDebouncedCallback(() => {
    const value = searchRef.current?.value || "";
    dispatch(searchActionCreators.setSearchName(value));
  }, 1500);

  useEffect(() => {
    dispatch(searchActionCreators.setFilterChange(selectValue));
  }, [selectValue, dispatch]);

  return (
    <div className={style.searchArea}>
      <div className={style.input}>
        <input
          value={searchRef.current?.value}
          ref={searchRef}
          type="text"
          className={style.input_area}
          placeholder="Search"
          onChange={handleOnNameChange}
        />
        <img src={searchImg} alt="search" width="16px" height="16px" />
      </div>
      <select
        className={style.select_area}
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        <option value="popular">Popular</option>
        <option value="top_rated">Top rated</option>
      </select>
    </div>
  );
};
