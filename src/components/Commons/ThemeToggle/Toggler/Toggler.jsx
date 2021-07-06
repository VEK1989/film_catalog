import React from 'react';
import style from './Toggler.module.css';

const Toggle = (props) => {
	return (
		<div className={style.switch}>
			<span>Dark theme</span>
			<div className={style.switch_btn} onClick={props.toggleTheme}></div>
		</div>
	);
};

export default Toggle;