import style from './TvSeries.module.css'
import { Pagination } from '../../Commons/Pagination/Pagination'
import { Film } from '../Films/Film/Film'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { filmActionCreator } from '../../../redux/action-creators/filmActionCreators'

export const TvSeries = ({ theme }) => {
	const { hover, items, pageSize, totalResults, page } = useSelector(state => state.films)
	const { searchName, filter } = useSelector(state => state.search)
	const name = 'tv'

	const dispatch = useDispatch()

	useEffect(() => {
		if (searchName === '') {
			dispatch(filmActionCreator.getFilterPopular(page, filter, name))
		} else {
			dispatch(filmActionCreator.getSerchingFilter(searchName, page, name))
		}
	}, [page, searchName, filter])

	useEffect(() => {
		dispatch(filmActionCreator.getAllGenres('tv'))
	}, [])

	const isHovered = (selected, id) => {
		dispatch(filmActionCreator.setHover(selected))
		dispatch(filmActionCreator.setFilmId(id))
	}

	const unHovered = () => {
		dispatch(filmActionCreator.setHover(false))
	}

	const setNewPage = (p) => {
		dispatch(filmActionCreator.setPage(p))
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
							title={item.name}
							id={item.id}
							hover={hover}
							release_date={item.first_air_date}
							vote_average={item.vote_average}
							genres={item.genre_ids}
							theme={theme}
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
	)
}
