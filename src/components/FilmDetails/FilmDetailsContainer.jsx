import { withRouter } from 'react-router-dom'
import { FilmDetails } from './FilmDetails'
import { SerialsDetails } from './SerialsDetails'


const FilmDetailsContainer = (props) => {
	const filmId = props.match.params.filmId
	const name = props.match.params.film

	return (
		<div>
			{
				name === 'movie'
					? <FilmDetails filmId={filmId} name={name} theme={props.theme} />
					: <SerialsDetails filmId={filmId} name={name} theme={props.theme} />
			}
		</div>
	)
}

export default withRouter(FilmDetailsContainer)