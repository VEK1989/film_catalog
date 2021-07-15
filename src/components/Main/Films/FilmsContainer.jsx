import { connect } from "react-redux";
import Films from "./Films";
import { setItems, setPage, setTotalResults, setProperties, setHover, setFilmId, getFilmsProperty, getFilterPopular, getSerchingFilter } from '../../../redux/films-reduser';
import { setSearchName } from '../../../redux/search-reduser';
import { useEffect } from "react";

const FilmsContainer = (props) => {
	useEffect(() => {
		if (props.searchName === '') {
			props.getFilterPopular(props.page, props.filter)
		} else {
			props.getSerchingFilter(props.searchName, props.page)
		}
	}, [props.page, props.searchName, props.filter])

	useEffect(() => {
		props.getFilmsProperty(props.filmId)
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

export default connect(mapStateToProps, {
	getSerchingFilter,
	getFilterPopular,
	getFilmsProperty,
	setFilmId,
	setHover,
	setItems,
	setPage,
	setTotalResults,
	setProperties,
	setSearchName
}
)(FilmsContainer)

