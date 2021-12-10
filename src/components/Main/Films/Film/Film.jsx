import style from './Film.module.css'
import altImg from '../../../../assets/images/altTitle.svg'
import altImgDark from '../../../../assets/images/altPhotoDark.png'
import { NavLink } from 'react-router-dom'
import star from '../../../../assets/images/star.png'
import { LikeButton } from '../../../Commons/LikeButton/LikeButton'
import { useSelector } from 'react-redux'

export const Film = (props) => {
	const { genresId } = useSelector(state => state.films)

	const genre = genresId.filter((n) => {
		return props.genres.indexOf(n.id) > -1
	})

	return (
		<div onMouseEnter={props.isHovered} onMouseLeave={props.unHovered} >
			{props.hover.id === props.id
				? <div className={style.filmItem}>
					<NavLink to={`/details/${props.name}/${props.id}`} className={style.link}>
						<div className={style.filmInfo}>
							<LikeButton id={props.id} className={style.like} />
							<div className={style.info}>
								<div>
									{
										genre[0] ? <div>
											{
												genre.length > 1 ? <span>{genre[0].name}/{genre[1].name}</span>
													: <span>{genre[0].name}</span>
											}
										</div>
											: null
									}
									<div>{props.release_date
										? props.release_date.split(['-'])[0]
										: ''
									}</div>
								</div>
							</div>
							<div className={style.rating}>{props.vote_average} <img src={star} alt='star' width='14px' height='14px' /></div>
						</div>
					</NavLink>
					<span className={style.title}>{props.title}</span>
				</div>

				: <div className={style.filmItem} >
					{
						props.poster_path
							? <img src={`https://www.themoviedb.org/t/p/original${props.poster_path}`} alt='#' width='250px' height='330px' />
							: <div className={style.fuckYou}>
								<div>
									<img src={props.theme === 'dark' ? altImgDark : altImg} alt='Oops!' width='100px' height='100px' />
									<p>Oops!</p>
								</div>
							</div>
					}

					<span className={style.title}>{
						props.title
							? props.title
							: 'Name is not found'
					}</span>
				</div>
			}
		</div >
	)

}