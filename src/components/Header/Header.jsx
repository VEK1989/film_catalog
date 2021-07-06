import style from './Header.module.css';
import icon from '../../assets/images/header-icon.svg';
import Search from './Search/Search';
import Toggle from '../Commons/ThemeToggle/Toggler/Toggler';
import { getSerchFilm } from '../../api/api'
import { useEffect } from 'react';

const Header = (props) => {
	return (
		<div className={style.header}>
			<div className={style.wrapper}>
				<div className={style.header_leftSide}>
					<img src={icon} alt="icon" width="30px" height="30px" />
					<Search />
				</div>
				<Toggle theme={props.theme} toggleTheme={props.themeToggler} />
			</div>
		</div>
	);
};

export default Header;