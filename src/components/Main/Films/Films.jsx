import style from './Films.module.css';
import React from 'react';
import * as axios from 'axios';
import Film from './Film/Film';
import Pagination from '../../Commons/Pagination/Pagination';

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
		return (
			<section className={style.filmPage}>
				<div className={style.content} >
					{
						this.props.items.map(item => {
							return <Film key={item.id} poster_path={item.poster_path} title={item.title} />
						})
					}
				</div>
				<div className={style.paginator}>
					<Pagination {...this.props} getChangePage={this.getChangePage} />
				</div>
			</section>
		);
	}
}

export default Films;