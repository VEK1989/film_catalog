import style from './Films.module.css';
import Pagination from '../../Commons/Pagination/Pagination';
import FilmContainer from './Film/FilmContainer';

const Films = (props) => {
	return (
		<section className={style.filmPage}>
			<div className={style.content} >
				{
					props.items.map(item => {
						return <FilmContainer key={item.id} poster_path={item.poster_path} title={item.title} id={item.id} />
					})
				}
			</div>
			<div className={style.paginator}>
				<Pagination {...props} />
			</div>
		</section>
	);
}

export default Films;