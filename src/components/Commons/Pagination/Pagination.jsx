import { useState } from 'react';
import style from './Pagination.module.css';
import cn from 'classnames'

const Pagination = (props) => {
	let portionSize = 5

	let pagesCount = Math.ceil(props.totalResults / props.pageSize)

	let pages = []
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let portionCount = Math.ceil(pagesCount / portionSize)
	let [portionNumber, setPortionNumber] = useState(1)
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	let rightPortionPageNumber = portionNumber * portionSize

	return (
		<div className={style.paginations}>
			{
				portionNumber > 1 &&
				<span>
					<button onClick={() => { setPortionNumber(portionNumber - 1) }} className={style.button}>{"<"}</button>
					<span className={style.points} >...</span>
				</span>
			}
			{
				pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
					.map(p => {
						return <span className={cn({ [style.selectedPage]: props.page === p }, style.pageNumber)}
							key={p} onClick={(e) => { props.setPage(p) }} >{p}</span>
					})
			}
			{
				portionCount > portionNumber &&
				<span>
					<span className={style.points} >...</span>
					<button onClick={() => { setPortionNumber(portionNumber + 1) }} className={style.button}>{">"}</button>
				</span>
			}
		</div>
	);
};

export default Pagination;