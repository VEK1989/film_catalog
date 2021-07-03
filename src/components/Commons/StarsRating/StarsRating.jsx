import { useState, useEffect } from 'react';
import StarRating from 'react-svg-star-rating';
import style from './StarsRating.module.css';

const StarsRating = (props) => {
	const [rating, setRating] = useState(5);
	const localId = window.localStorage.getItem(`${props.id}-rating`)

	useEffect(() => {
		localId ? setRating(localId)
			: setRating(props.rating)
	}, [props.rating])

	const handleOnClick = (rating) => {
		setRating(rating)
		window.localStorage.setItem(`${props.id}-rating`, rating)
	};

	return (
		<div className={style.rating}>
			<div className={style.rating_counter}>{rating}</div>
			<StarRating
				unit='float'
				handleOnClick={handleOnClick}
				innerRadius={20}
				size={20}
				count={10}
				activeColor='#FFB800'
				emptyColor='#E0DBDB'
				roundedCorner='false'
				initialRating={rating}
			/>
		</div>
	);
};

export default StarsRating;