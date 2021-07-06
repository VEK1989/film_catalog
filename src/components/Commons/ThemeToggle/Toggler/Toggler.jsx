import style from './Toggler.module.css';
import cn from 'classnames';

const Toggle = (props) => {
	return (
		<div className={style.switch}>
			<span>Dark theme</span>
			<div className={cn(style.switch_btn, { [style.switch_on]: props.theme === 'dark' })} onClick={props.toggleTheme}></div>
		</div>
	);
};

export default Toggle;