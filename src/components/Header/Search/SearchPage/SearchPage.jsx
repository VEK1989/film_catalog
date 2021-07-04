import style from './SearchPage.module.css';
import Films from '../../../Main/Films/Films';
import { NavLink } from 'react-router-dom';
import { setItems, setPage, setTotalResults, setProperties, setHover, setFilmId } from '../../../../redux/films-reduser';
import { connect } from "react-redux";
import left from '../../../../assets/images/left.png';

const SearchPage = (props) => {
	return (
		<div>
			<div className={style.header}>
				<NavLink to="/films" className={style.back} >
					<span className={style.back}><img src={left} alt="left" width="12px" height="12px" />  Back</span>
				</NavLink>
			</div>
			<Films {...props} />
		</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)