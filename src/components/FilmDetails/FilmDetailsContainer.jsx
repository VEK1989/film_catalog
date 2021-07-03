import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FilmDetails from "./FilmDetails";
import { useEffect, useState } from "react";
import { getFilmData } from '../../api/api';

const FilmDetailsContainer = (props) => {
	const [data, setData] = useState()

	let filmId = props.match.params.filmId

	useEffect(() => {
		getFilmData(filmId).then(data => {
			debugger
			setData(data)
		})
	}, [])

	return (
		<div>
			<FilmDetails data={data} />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

let withRouterComponent = withRouter(FilmDetailsContainer)

export default connect(mapStateToProps, mapDispatchToProps)(withRouterComponent);