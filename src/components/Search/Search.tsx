import style from "./Search.module.css";
import searchImg from "../../assets/images/header-search.png";
import { searchActionCreators } from "../../store/action-creators/searchActionCreators";
import { useDispatch } from "react-redux";
import { useDebouncedCallback } from "use-debounce";
import { useEffect, useState } from "react";

export const Search = () => {
  const dispatch = useDispatch();
  const [selectValue, setSelectValue] = useState<string>("popular");
  const [inputValue, setInputValue] = useState<string>("");

  const handleOnNameChange = useDebouncedCallback((value) => {
    dispatch(searchActionCreators.setSearchName(value));
  }, 1500);

  useEffect(() => {
    dispatch(searchActionCreators.setFilterChange(selectValue));
  }, [selectValue, dispatch]);

  useEffect(() => {
    handleOnNameChange(inputValue);
  }, [inputValue, handleOnNameChange]);

  return (
    <div className={style.searchArea}>
      <div className={style.input}>
        <input
          value={inputValue}
          type="text"
          className={style.input_area}
          placeholder="Search"
          onChange={(e) => setInputValue(e.target.value)}
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
