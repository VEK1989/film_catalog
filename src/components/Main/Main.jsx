import React from 'react';
import style from './Main.module.css';
import { Route, NavLink } from 'react-router-dom';
import FilmsContainer from './Films/FilmsContainer';
import TVSeries from './TV_series/TVSeries';
import cn from 'classnames';

const Main = (props) => {
	return (
		<div>
			<div className={style.links}>
				<NavLink to="/films" activeClassName={cn(style.active, { [style.dark]: props.theme === 'dark' })} className={style.link} >Films</NavLink>
				<NavLink to="/tv_series" activeClassName={cn(style.active, { [style.dark]: props.theme === 'dark' })} className={style.link} >TV series</NavLink>
			</div>
			<div>
				<Route path="/films" render={() => <FilmsContainer theme={props.theme} />} />
				<Route path="/tv_series" render={() => <TVSeries />} />
			</div>
		</div>
	);
};

export default Main;