import React from 'react'
import style from './Main.module.css'
import { Route, NavLink } from 'react-router-dom'
import { Films } from './Films/Films'
import { TvSeries } from './TV_series/TvSeries'
import cn from 'classnames'

export const Main = ({ theme }) => {
	return (
		<div>
			<nav className={style.links}>
				<NavLink to='/films' activeClassName={cn(style.active, { [style.dark]: theme === 'dark' })} className={style.link} >Films</NavLink>
				<NavLink to='/tv_series' activeClassName={cn(style.active, { [style.dark]: theme === 'dark' })} className={style.link} >TV series</NavLink>
			</nav>
			<main>
				<Route path='/films' render={() => <Films theme={theme} />} />
				<Route path='/tv_series' render={() => <TvSeries />} />
			</main>
		</div>
	)
}