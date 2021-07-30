import style from './Films.module.css';
import { Pagination } from '../../Commons/Pagination/Pagination';
import { Film } from './Film/Film';
import { useDispatch, useSelector } from 'react-redux';
import {
	getFilmHover,
	getItems,
	getPageSize,
	getTotalResults,
	getPage,
	getSearchName,
	getFilter
} from '../../../redux/selectors';
import { useEffect } from 'react';
import { getAllGenres, getFilterPopular, getSerchingFilter, setFilmId, setHover, setPage } from '../../../redux/films-reduser';

export const Films = (props) => {
	const hover = useSelector(getFilmHover)
	const items = useSelector(getItems)
	const pageSize = useSelector(getPageSize)
	const totalResults = useSelector(getTotalResults)
	const page = useSelector(getPage)
	const searchName = useSelector(getSearchName)
	const filter = useSelector(getFilter)
	const name = 'movie'

	const dispatch = useDispatch()

	useEffect(() => {
		if (searchName === '') {
			dispatch(getFilterPopular(page, filter, name))
		} else {
			dispatch(getSerchingFilter(searchName, page, name))
		}
	}, [page, searchName, filter])

	useEffect(() => {
		dispatch(getAllGenres('movie'))
	}, [])

	const isHovered = (selected, id) => {
		dispatch(setHover(selected))
		dispatch(setFilmId(id))
	}

	const unHovered = () => {
		dispatch(setHover(false))
	}

	const setNewPage = (p) => {
		dispatch(setPage(p))
	}

	return (
		<section className={style.filmPage}>
			<div className={style.content} >
				{
					items.map(item => {
						return <Film isHovered={() => isHovered(item, item.id)}
							unHovered={() => unHovered()}
							key={item.id}
							poster_path={item.poster_path}
							title={item.title}
							id={item.id}
							hover={hover}
							release_date={item.release_date}
							vote_average={item.vote_average}
							genres={item.genre_ids}
							theme={props.theme}
							name={name} />
					})
				}
			</div>
			<div className={style.paginator}>
				<Pagination totalResults={totalResults}
					pageSize={pageSize}
					setPage={setNewPage}
					page={page} />
			</div>
		</section>
	);
}