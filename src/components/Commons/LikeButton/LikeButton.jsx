import { useState, useEffect } from 'react';
import style from './LikeButton.module.css';
import cn from 'classnames';

const LikeButton = (props) => {
	const [like, setLike] = useState(false);
	const localLike = window.localStorage.getItem(`${props.id}-like`)

	useEffect(() => {
		localLike && setLike(localLike)
	}, [localLike])

	const handleOnClick = () => {
		like ? setLike(false)
			: setLike(true)
		window.localStorage.setItem(`${props.id}-like`, like)
	};

	return (
		<div className={cn(style.like, { [style.active]: like === true })} onClick={handleOnClick}>&#10084;</div>
	);
};

export default LikeButton;