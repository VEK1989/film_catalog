import React from 'react';
import style from './Main.module.css';
import { Route, NavLink } from 'react-router-dom';
import FilmsContainer from './Films/FilmsContainer';
import TVSeries from './TV_series/TVSeries';

const Main = () => {
	return (
		<div>
			<div className={style.links}>
				<NavLink to="/films" activeClassName={style.active} className={style.link} >Films</NavLink>
				<NavLink to="/tv_series" activeClassName={style.active} className={style.link} >TV series</NavLink>
			</div>
			<div>
				<Route path="/films" render={() => <FilmsContainer />} />
				<Route path="/tv_series" render={() => <TVSeries />} />
			</div>
		</div>
	);
};

export default Main;