import style from './Film.module.css';
import altImg from '../../../../assets/images/altTitle.png';
import { NavLink } from 'react-router-dom';
import star from '../../../../assets/images/star.png';
import LikeButton from '../../../Commons/LikeButton/LikeButton';

const Film = (props) => {
	return (
		<div onMouseEnter={props.isHovered} onMouseLeave={props.unHovered} >
			{props.hover.id === props.id ? (
				<div className={style.filmItem}>
					<NavLink to={`/film/${props.id}`} className={style.link}>
						<div className={style.filmInfo}>
							<LikeButton id={props.id} className={style.like} />
							<div className={style.info}>
								<div>
									{
										(props.properties.genres.length > 1) ? <span>{props.properties.genres[0].name}/{props.properties.genres[1].name}</span>
											: <span>{props.properties.genres[0].name}</span>
									}
									<div>{props.properties.runtime} min</div>
									<div>{props.properties.release_date.split(['-'])[0]}</div>
								</div>
							</div>
							<div className={style.rating}>{props.properties.vote_average} <img src={star} alt="star" width="14px" height="14px" /></div>
						</div>
					</NavLink>
					<span className={style.title}>{props.title}</span>
				</div>)

				: (<div className={style.filmItem} >
					<img src={props.poster_path ? (`https://www.themoviedb.org/t/p/original${props.poster_path}`) : altImg} alt="#" width="250px" height="330px" />
					<span className={style.title}>{props.title}</span>
				</div>)
			}
		</div >
	);

}
export default Film;