import { connect } from "react-redux";
import Films from "./Films";
import { setItems, setPage, setTotalResults, setProperties, setHover, setFilmId } from '../../../redux/films-reduser';
import { setSearchName } from '../../../redux/search-reduser';
import { useEffect } from "react";
import { getFilmData, getPopularFilms, getSerchFilm } from '../../../api/api'

const FilmsContainer = (props) => {
	useEffect(() => {
		if (props.searchName === '') {
			getPopularFilms(props.page, props.filter).then(data => {
				props.setItems(data.results)
				props.setTotalResults(data.total_results)
			})
		} else {
			getSerchFilm(props.searchName, props.page).then(data => {
				props.setItems(data.results)
				props.setTotalResults(data.total_results)
			})
		}
	}, [props.page, props.searchName, props.filter])

	useEffect(() => {
		getFilmData(props.filmId).then(data => {
			props.setProperties(data)
		})
	}, [props.filmId])

	return (
		<Films {...props} />
	);
}

const mapStateToProps = (state) => {
	return {
		filmId: state.films.filmId,
		hover: state.films.hover,
		items: state.films.items,
		pageSize: state.films.pageSize,
		totalResults: state.films.totalResults,
		page: state.films.page,
		properties: state.films.properties,
		searchName: state.search.searchName,
		filter: state.search.filter
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
		},
		setSearchName: (query) => {
			dispatch(setSearchName(query))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer)

