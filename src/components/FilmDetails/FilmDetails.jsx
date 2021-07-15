import style from './FilmDetails.module.css';
import { NavLink } from 'react-router-dom';
import altImg from '../../assets/images/altTitle.svg';
import altImgDark from '../../assets/images/altPhotoDark.png';
import StarsRating from '../Commons/StarsRating/StarsRating';
import LikeButton from '../Commons/LikeButton/LikeButton';
import cn from 'classnames';

const FilmDetails = (props) => {
	return (
		<div className={style.container}>
			<div className={style.header}>
				<NavLink to='/films' className={cn(style.back, { [style.dark]: props.theme === 'dark' })} >
					<span>{'<'} Back</span>
				</NavLink>
			</div>

			<div className={style.poster} >
				{
					props.data.poster_path ? <img src={`https://www.themoviedb.org/t/p/original${props.data.poster_path}`} alt='poster' width='380px' height='573px' className={style.poster} />
						: <div className={style.fuckYou}>
							<div>
								<img src={props.theme === 'dark' ? altImgDark : altImg} alt='Fuck you' width='100px' height='100px' />
								<p>fuck you</p>
							</div>
						</div>
				}
			</div>
			<span className={style.name}>{props.data.title}</span>
			<div className={style.rating}><StarsRating rating={props.data.vote_average} id={props.data.id} /></div>
			<div className={style.props}>
				<span className={style.props_name}>Genre:</span>
				<span className={style.props_name}>Year:</span>
				<span className={style.props_name}>Running time:</span>
			</div>
			<div className={style.value}>
				<span className={style.value_name}>
					{
						(props.data.genres.length > 1) ? <span>{props.data.genres[0].name}/{props.data.genres[1].name}</span>
							: <span>{props.data.genres[0].name}</span>
					}
				</span>
				<span className={style.value_name}>
					{props.data.release_date.split(['-'])[0]}
				</span>
				<span className={style.value_name}>{props.data.runtime}minutes</span>
			</div>
			<span className={style.descriotion}>{props.data.overview}</span>
			<div className={style.like}>
				<LikeButton id={props.data.id} />
			</div>
		</div>
	);
};

export default FilmDetails;