import { useEffect } from 'react';
import * as axios from 'axios';
import Film from './Film';
import { connect } from 'react-redux';
import { setCover, setProperties, setCoverItem } from '../../../../redux/film-reduser';

const FilmContainer = (props) => {

	useEffect(() => {
		axios.get(`https://api.themoviedb.org/3/movie/${props.id}?api_key=808cfd2d723af708f7da7e18f3b10d1e&language=en-US`)
			.then(response => {
				props.setProperties(response.data)
			})
	}, [props.cover])

	return (
		<Film {...props} />
	)
}

const mapStateToProps = (state) => {
	return {
                coverItem: state.film.coverItem,
		cover: state.film.cover,
		properties: state.film.properties
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
                setCoverItem: (cover, id) => {
                        dispatch (setCoverItem (cover, id)
                },
		setCover: (cover) => {
			dispatch(setCover(cover))
		},
		setProperties: (properties) => {
			dispatch(setProperties(properties))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmContainer)
