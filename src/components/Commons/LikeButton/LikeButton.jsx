import { useState, useEffect } from 'react'
import style from './LikeButton.module.css'
import cn from 'classnames'

export const LikeButton = ({ id }) => {
	const [like, setLike] = useState(window.localStorage.getItem(`${id}-like`) || 'unLike')

	const toggleLike = (e) => {
		e.preventDefault()
		if (like === 'unLike') {
			window.localStorage.setItem(`${id}-like`, 'like')
			setLike('like')
		} else {
			window.localStorage.setItem(`${id}-like`, 'unLike')
			setLike('unLike')
		}
	};

	useEffect(() => {
		const localLike = window.localStorage.getItem(`${id}-like`)
		localLike && setLike(localLike)
	}, [id])

	return (
		<div className={cn(style.like, { [style.active]: like === 'like' })} onClick={(e) => toggleLike(e)}>&#10084;</div>
	)
}