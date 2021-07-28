import React from 'react';
import style from './Main.module.css';
import { Route, NavLink } from 'react-router-dom';
import { Films } from './Films/Films';
import { TvSeries } from './TV_series/TvSeries';
import cn from 'classnames';

export const Main = (props) => {
	return (
		<div>
			<div className={style.links}>
				<NavLink to='/films' activeClassName={cn(style.active, { [style.dark]: props.theme === 'dark' })} className={style.link} >Films</NavLink>
				<NavLink to="/tv_series" activeClassName={cn(style.active, { [style.dark]: props.theme === 'dark' })} className={style.link} >TV series</NavLink>
			</div>
			<div>
				<Route path='/films' render={() => <Films theme={props.theme} />} />
				<Route path='/tv_series' render={() => <TvSeries />} />
			</div>
		</div>
	);
};