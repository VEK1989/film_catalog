import { useState, useEffect } from 'react'
import style from './LikeButton.module.css'
import cn from 'classnames'

export const LikeButton = (props) => {
	const [like, setLike] = useState(window.localStorage.getItem(`${props.id}-like`) || 'unLike')

	const toggleLike = (e) => {
		e.preventDefault()
		if (like === 'unLike') {
			window.localStorage.setItem(`${props.id}-like`, 'like')
			setLike('like')
		} else {
			window.localStorage.setItem(`${props.id}-like`, 'unLike')
			setLike('unLike')
		}
	};

	useEffect(() => {
		const localLike = window.localStorage.getItem(`${props.id}-like`)
		localLike && setLike(localLike)
	}, [props.id])

	return (
		<div className={cn(style.like, { [style.active]: like === 'like' })} onClick={(e) => toggleLike(e)}>&#10084;</div>
	)
}