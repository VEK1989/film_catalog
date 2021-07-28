import { withRouter } from 'react-router-dom';
import { FilmDetails } from './FilmDetails';
import { useEffect, useState } from 'react';
import { getFilmData } from '../../api/api';


const FilmDetailsContainer = (props) => {
	const [filmData, setFilmData] = useState({
		poster_path: '',
		original_title: '',
		overview: '',
		release_date: '',
		runtime: 95,
		vote_average: 2.2,
		genres: [
			{
				id: 16,
				name: 'Animation'
			}
		]
	})

	const filmId = props.match.params.filmId

	useEffect(() => {
		getFilmData(filmId).then(data => {
			setFilmData(data)
		})
	}, [filmId])

	return (
		<div>
			<FilmDetails data={filmData} theme={props.theme} />
		</div>
	);
};

export default withRouter(FilmDetailsContainer)