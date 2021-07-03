import style from './Film.module.css';
import altImg from '../../../../assets/images/altTitle.png';
import { NavLink } from 'react-router-dom';

const Film = (props) => {
	return (
		<div onMouseEnter={props.isHovered} onMouseLeave={props.unHovered} >
			{props.hover.id === props.id ? (
				<div className={style.filmItem}>
					<NavLink to={`/film/${props.id}`}>
						<div className={style.filmInfo}>
							{
								(props.properties.genres.length > 1) ? <p>{props.properties.genres[0].name}/{props.properties.genres[1].name}</p>
									: <p>{props.properties.genres[0].name}</p>
							}
							<p>{props.properties.release_date}</p>
							<p>{props.properties.runtime} min</p>
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