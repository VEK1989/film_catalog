import style from './FilmDetails.module.css';
import { NavLink } from 'react-router-dom';
import altImg from '../../assets/images/altTitle.png';

const FilmDetails = (props) => {
	return (
		<div className={style.container}>
			<div className={style.header}>
				<NavLink to="/films">
					<span>Back</span>
				</NavLink>
			</div>
			<img src={props.data.poster_path ? (`https://www.themoviedb.org/t/p/original${props.data.poster_path}`) : altImg} alt="poster" width="380px" height="573px" className={style.poster} />
			<span className={style.name}>{props.data.title}</span>
			<div className={style.props}>
				<span className={style.props_name}>Genre:</span>
				<span className={style.props_name}>Year:</span>
				<span className={style.props_name}>Running time:</span>
			</div>
			<div className={style.value}>
				<span className={style.value_name}></span>
				<span className={style.value_name}></span>
				<span className={style.value_name}>minutes</span>
			</div>
			<span className={style.descriotion}></span>
			<div className={style.like}>
				<img src="" alt="like" />
			</div>
		</div>
	);
};

export default FilmDetails;