import style from './Switcher.module.css';

const Switcher = () => {
	return (
		<div className={style.switch}>
			<span>Dark theme</span>
			<div className={style.switch_btn}></div>
		</div>
	);
};

export default Switcher;