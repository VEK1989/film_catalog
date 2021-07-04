import style from './Search.module.css';
import searchImg from '../../../assets/images/header-search.png';
import { Formik, Form, Field } from 'formik';
import { useState, useEffect } from 'react';
import { getSerchFilm } from '../../../api/api';
import { NavLink } from 'react-router-dom';
import { setItems, setPage, setTotalResults, setProperties, setHover, setFilmId } from '../../../redux/films-reduser';
import { connect } from "react-redux";
import { getFilmData } from '../../../api/api'

const Search = (props) => {

	const [term, setTerm] = useState('')

	const submit = (values, { setSubmitting }) => {
		debugger
		setTerm(values.term)
		setSubmitting(false)
	}

	useEffect(() => {
		getSerchFilm(term).then(data => {
			props.setItems(data.results)
			props.setTotalResults(data.total_results)
		})
	}, [term])

	useEffect(() => {
		getFilmData(props.filmId).then(data => {
			props.setProperties(data)
		})
	}, [props.filmId])

	return (
		<Formik
			initialValues={{ term: '' }}
			onSubmit={submit}
		>
			{({ isSubmitting }) => (
				<Form>
					<div className={style.input}>
						<Field type="text" name="term" className={style.input_area} />
						<button type="submit" disabled={isSubmitting} className={style.button}>
							<img src={searchImg} alt="search" width="16px" height="16px" />
							<NavLink to='/search'></NavLink>
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

const mapStateToProps = (state) => {
	return {
		filmId: state.films.filmId,
		hover: state.films.hover,
		items: state.films.items,
		pageSize: state.films.pageSize,
		totalResults: state.films.totalResults,
		page: state.films.page,
		properties: state.films.properties
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setFilmId: (id) => {
			dispatch(setFilmId(id))
		},
		setHover: (id) => {
			dispatch(setHover(id))
		},
		setItems: (items) => {
			dispatch(setItems(items))
		},
		setPage: (page) => {
			dispatch(setPage(page))
		},
		setTotalResults: (totalResult) => {
			dispatch(setTotalResults(totalResult))
		},
		setProperties: (properties) => {
			dispatch(setProperties(properties))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Search)