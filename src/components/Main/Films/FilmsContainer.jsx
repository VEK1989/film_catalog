import { connect } from "react-redux";
import Films from "./Films";
import { setItems, setPage, setTotalResults, setProperties, setHover, setFilmId } from '../../../redux/films-reduser';
import { useEffect } from "react";
import { getFilmData, getPopularFilms } from '../../../api/api'

const FilmsContainer = (props) => {
	useEffect(() => {
		getPopularFilms(props.page).then(data => {
			props.setItems(data.results)
			props.setTotalResults(data.total_results)
		})
	}, [props.page])

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

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer)

