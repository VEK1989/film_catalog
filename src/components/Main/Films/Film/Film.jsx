import style from './Film.module.css';
import React from 'react';
import altImg from '../../../../assets/images/altTitle.png';

const Film = (props) => {


	return (
		<div className={style.filmItem}>
			<div className={style.filmInfo}>

			</div>
			<img src={props.poster_path !== null ? ('https://www.themoviedb.org/t/p/original' + props.poster_path) : altImg} alt="#" width="250px" height="330px" />
			<span className={style.title}>{props.title}</span>
		</div>
	);

}
export default Film;