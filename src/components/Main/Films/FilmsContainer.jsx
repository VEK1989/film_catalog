import { connect } from "react-redux";
import Films from "./Films";
import { setItems, setPage, setTotalResults, setProperties, setHover, setFilmId } from '../../../redux/films-reduser';
import { useEffect } from "react";
import * as axios from 'axios';

const FilmsContainer = (props) => {
	useEffect(() => {
		axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=808cfd2d723af708f7da7e18f3b10d1e&language=en-US&page=${props.page}`)
			.then(response => {
				props.setItems(response.data.results)
				props.setTotalResults(response.data.total_results)
			})
	}, [props.page])

	useEffect(() => {
		axios.get(`https://api.themoviedb.org/3/movie/${props.filmId}?api_key=808cfd2d723af708f7da7e18f3b10d1e&language=en-US`)
			.then(response => {
				props.setProperties(response.data)
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

