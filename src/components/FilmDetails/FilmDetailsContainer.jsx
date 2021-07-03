import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FilmDetails from "./FilmDetails";
import { useEffect, useState } from "react";
import { getFilmData } from '../../api/api';


const FilmDetailsContainer = (props) => {
	const [filmData, setFilmData] = useState({
		poster_path: "",
		original_title: "",
		overview: "",
		release_date: "",
		runtime: 95,
		vote_average: 2.2,
		genres: [
			{
				id: 16,
				name: "Animation"
			}
		]
	})

	let filmId = props.match.params.filmId

	useEffect(() => {
		getFilmData(filmId).then(data => {
			setFilmData(data)
		})
	})

	return (
		<div>
			<FilmDetails data={filmData} />
		</div>
	);
};

let withRouterComponent = withRouter(FilmDetailsContainer)

export default connect()(withRouterComponent);