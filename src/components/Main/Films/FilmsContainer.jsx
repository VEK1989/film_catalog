import { connect } from "react-redux";
import Films from "./Films";
import { setItems, setPage, setTotalResults } from '../../../redux/film-reduser';

const mapStateToProps = (state) => {
	return {
		items: state.film.items,
		pageSize: state.film.pageSize,
		totalResults: state.film.totalResults,
		page: state.film.page
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

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Films)

export default MainContainer;