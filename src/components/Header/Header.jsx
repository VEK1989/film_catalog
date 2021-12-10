import style from './Header.module.css'
import icon from '../../assets/images/header-icon.svg'
import iconDark from '../../assets/images/logoDark.png'
import { Search } from './Search/Search'
import { Toggle } from '../Commons/ThemeToggle/Toggler/Toggler'

export const Header = ({ theme, toggleTheme }) => {
	return (
		<div className={style.header}>
			<div className={style.wrapper}>
				<div className={style.header_leftSide}>
					<img src={theme === 'dark' ? iconDark : icon} alt='icon' width='30px' height='30px' />
					<Search />
				</div>
				<Toggle theme={theme} toggleTheme={toggleTheme} />
			</div>
		</div>
	)
}