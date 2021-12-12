import { withRouter } from 'react-router-dom'
import { FilmDetails } from './FilmDetails'
import { SerialsDetails } from './SerialsDetails'


const FilmDetailsContainer = ({ theme, match }) => {
	const filmId = match.params.filmId
	const name = match.params.film

	return (
		<main>
			{
				name === 'movie'
					? <FilmDetails filmId={filmId} name={name} theme={theme} />
					: <SerialsDetails filmId={filmId} name={name} theme={theme} />
			}
		</main>
	)
}

export default withRouter(FilmDetailsContainer)