import style from './Films.module.css';
import Pagination from '../../Commons/Pagination/Pagination';
import Film from './Film/Film';

const Films = (props) => {
	const isHovered = (selected, id) => {
		props.setHover(selected)
		props.setFilmId(id)
	}

	const unHovered = () => {
		props.setHover(false)
	}

	return (
		<section className={style.filmPage}>
			<div className={style.content} >
				{
					props.items.map(item => {
						return <Film isHovered={() => isHovered(item, item.id)}
							unHovered={() => unHovered()}
							key={item.id}
							poster_path={item.poster_path}
							title={item.title}
							id={item.id}
							hover={props.hover}
							properties={props.properties} />
					})
				}
			</div>
			<div className={style.paginator}>
				<Pagination totalResults={props.totalResults}
					pageSize={props.pageSize}
					setPage={props.setPage}
					page={props.page} />
			</div>
		</section>
	);
}

export default Films;