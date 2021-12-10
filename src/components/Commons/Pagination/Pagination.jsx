import { useState } from 'react'
import style from './Pagination.module.css'
import cn from 'classnames'

export const Pagination = ({ totalResults, pageSize, page, setPage }) => {
	const portionSize = 5

	const pagesCount = Math.ceil(totalResults / pageSize)

	const pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	const portionCount = Math.ceil(pagesCount / portionSize)
	const [portionNumber, setPortionNumber] = useState(1)
	const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	const rightPortionPageNumber = portionNumber * portionSize

	return (
		<div className={style.paginations}>
			{
				portionNumber > 1 &&
				<span>
					<button onClick={() => { setPortionNumber(portionNumber - 1) }} className={style.button}>{'<'}</button>
					<span className={style.points} >...</span>
				</span>
			}
			{
				pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
					.map(p => {
						return <span className={cn({ [style.selectedPage]: page === p }, style.pageNumber)}
							key={p} onClick={(e) => { setPage(p) }} >{p}</span>
					})
			}
			{
				portionCount > portionNumber &&
				<span>
					<span className={style.points} >...</span>
					<button onClick={() => { setPortionNumber(portionNumber + 1) }} className={style.button}>{'>'}</button>
				</span>
			}
		</div>
	)
}