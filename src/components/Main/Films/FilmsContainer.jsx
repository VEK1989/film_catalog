import { connect } from "react-redux";
import Films from "./Films";
import { setItems, setPage, setTotalResults } from '../../../redux/films-reduser';
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

	return (
		<Films {...props} />
	);
}

const mapStateToProps = (state) => {
	return {
		items: state.films.items,
		pageSize: state.films.pageSize,
		totalResults: state.films.totalResults,
		page: state.films.page
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setItems: (items) => {
			dispatch(setItems(items))
		},
		setPage: (page) => {
			dispatch(setPage(page))
		},
		setTotalResults: (totalResult) => {
			dispatch(setTotalResults(totalResult))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer)

