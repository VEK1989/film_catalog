import style from "./Search.module.css";
import searchImg from "../../assets/images/header-search.png";
import { Formik, Form, Field } from "formik";
import { searchActionCreators } from "../../store/action-creators/searchActionCreators";
import { useDispatch } from "react-redux";

export const Search = () => {
  const dispatch = useDispatch();

  const submit = (values, { setSubmitting }) => {
    dispatch(searchActionCreators.setSearchName(values.term));
    dispatch(searchActionCreators.setFilterChange(values.filter));
    setSubmitting(false);
  };

  return (
    <Formik initialValues={{ term: "" }} onSubmit={submit}>
      {({ isSubmitting }) => (
        <Form>
          <div className={style.searchArea}>
            <div className={style.input}>
              <Field
                type="text"
                name="term"
                className={style.input_area}
                placeholder="Search"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={style.button}
              >
                <img src={searchImg} alt="search" width="16px" height="16px" />
              </button>
            </div>
            <Field name="filter" as="select" className={style.select_area}>
              <option value="popular">Popular</option>
              <option value="top_rated">Top rated</option>
            </Field>
          </div>
        </Form>
      )}
    </Formik>
  );
};
