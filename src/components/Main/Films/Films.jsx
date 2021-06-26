import style from './Films.module.css';
import React from 'react';
import * as axios from 'axios';
import altImg from '../../../assets/images/altTitle.png'

class Films extends React.Component {
	componentDidMount() {
		axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=808cfd2d723af708f7da7e18f3b10d1e&language=en-US&page=${this.props.page}`)
			.then(response => {
				this.props.setItems(response.data.results)
				this.props.setTotalResults(response.data.total_results)
			})
	}

	getChangePage = (pageNumber) => {
		this.props.setPage(pageNumber)
		axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=808cfd2d723af708f7da7e18f3b10d1e&language=en-US&page=${pageNumber}`)
			.then(response => {
				this.props.setItems(response.data.results)
			})
	}

	render() {
		let pagesCount = Math.ceil(this.props.totalResults / this.props.pageSize)

		let pages = []
		for (let i = 1; i <= pagesCount; i++) {
			pages.push(i)
		}

		return (
			<section className={style.content}>
				{
					this.props.items.map(item => {
						return <div key={item.id} className={style.filmItem}>
							<img src={item.poster_path !== null ? ('https://www.themoviedb.org/t/p/original' + item.poster_path) : altImg} alt="#" width="250px" height="330px" />
							<span className={style.title}>{item.title}</span>
						</div>
					})
				}
				<div className={style.paginations}>
					{pages.map(p => {
						return <span key={p.id} onClick={(e) => { this.getChangePage(p) }} >{p}</span>
					})}
				</div>
			</section>
		);
	}
}

export default Films;