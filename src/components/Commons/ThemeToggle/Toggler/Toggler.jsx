import style from './Toggler.module.css'
import cn from 'classnames'

export const Toggle = ({ theme, toggleTheme }) => {
	return (
		<div className={style.switch}>
			<span>Dark theme</span>
			<div className={cn(style.switch_btn, { [style.switch_on]: theme === 'dark' })} onClick={toggleTheme}></div>
		</div>
	)
}