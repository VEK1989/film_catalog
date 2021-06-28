import style from './Film.module.css';
import altImg from '../../../../assets/images/altTitle.png';

const Film = (props) => {
	return (
		<div onMouseOver={() => props.setCover(false)} onMouseOut={() => props.setCover(true)}>
			{!props.cover &&
				<div className={style.filmInfo}>
					<p>{props.properties.genres.name}/{props.properties.genres.name}</p>
					<p>{props.properties.release_date}</p>
					<p>{props.properties.runtime} min</p>
				</div>
			}
			{props.cover &&
				<div className={style.filmItem} >
					<img src={props.poster_path !== null ? (`https://www.themoviedb.org/t/p/original${props.poster_path}`) : altImg} alt="#" width="250px" height="330px" />
					<span className={style.title}>{props.title}</span>
				</div>
			}
		</div>
	);

}
export default Film;