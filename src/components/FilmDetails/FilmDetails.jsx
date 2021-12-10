import style from './FilmDetails.module.css'
import { NavLink } from 'react-router-dom'
import altImg from '../../assets/images/altTitle.svg'
import altImgDark from '../../assets/images/altPhotoDark.png'
import { StarsRating } from '../Commons/StarsRating/StarsRating'
import { LikeButton } from '../Commons/LikeButton/LikeButton'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { getProperties } from '../../redux/selectors'
import { getFilmsProperty } from '../../redux/films-reduser'
import { useEffect } from 'react'

export const FilmDetails = (props) => {

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getFilmsProperty(props.filmId, props.name))
	}, [])

	const filmData = useSelector(getProperties)

	return (
		<div className={style.container}>
			<div className={style.header}>
				<NavLink to='/films' className={cn(style.back, { [style.dark]: props.theme === 'dark' })} >
					<span>{'<'} Back</span>
				</NavLink>
			</div>

			<div className={style.poster} >
				{
					filmData.poster_path ? <img src={`https://www.themoviedb.org/t/p/original${filmData.poster_path}`} alt='poster' width='380px' height='573px' className={style.poster} />
						: <div className={style.fuckYou}>
							<div>
								<img src={props.theme === 'dark' ? altImgDark : altImg} alt='Fuck you' width='100px' height='100px' />
								<p>Oops!</p>
							</div>
						</div>
				}
			</div>
			<span className={style.name}>{
				props.name === 'tv' && filmData.title
					? filmData.title
					: ''
			}</span>
			<div className={style.rating}><StarsRating rating={filmData.vote_average} id={filmData.id} /></div>
			<div className={style.props}>
				<span className={style.props_name}>Genre:</span>
				<span className={style.props_name}>Year:</span>
				<span className={style.props_name}>Running time:</span>
			</div>
			<div className={style.value}>
				<span className={style.value_name}>
					{
						(filmData.genres.length > 1) ? <span>{filmData.genres[0].name}/{filmData.genres[1].name}</span>
							: <span>{filmData.genres[0].name}</span>
					}
				</span>
				<span className={style.value_name}>
					{
						filmData.release_date
							? filmData.release_date.split(['-'])[0]
							: ''
					}
				</span>
				<span className={style.value_name}>{
					filmData.runtime
						? filmData.runtime
						: ''
				}minutes</span>
			</div>
			<span className={style.descriotion}>{filmData.overview}</span>
			<div className={style.like}>
				<LikeButton id={filmData.id} />
			</div>
		</div>
	)
}