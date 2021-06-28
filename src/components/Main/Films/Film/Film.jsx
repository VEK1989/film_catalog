import style from './Film.module.css';
import altImg from '../../../../assets/images/altTitle.png';
import { NavLink } from 'react-router-dom';

const Film = (props) => {
	return (
		<div onMouseOver={() =>
                       return (
                           props.setCoverItem.some(i => i === props.id) 
                           props.setCover(false, props.id)
                       )} 
                     onMouseOut={() => props.setCover(true)}>
			{!props.cover &&
                                <Navlink to='/films/${props.id}'>
				    <div className={style.filmInfo}>
					    <p>{props.properties.genres.name}/{props.properties.genres.name}</p>
					    <p>{props.properties.release_date}</p>
					    <p>{props.properties.runtime} min</p>
				    </div>
                                </Navlink>
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
