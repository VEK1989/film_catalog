import style from './Header.module.css';
import icon from '../../assets/images/header-icon.svg';
import iconDark from '../../assets/images/logoDark.png';
import Search from './Search/Search';
import Toggle from '../Commons/ThemeToggle/Toggler/Toggler';

const Header = (props) => {
	return (
		<div className={style.header}>
			<div className={style.wrapper}>
				<div className={style.header_leftSide}>
					<img src={props.theme === 'dark' ? iconDark : icon} alt="icon" width="30px" height="30px" />
					<Search />
				</div>
				<Toggle theme={props.theme} toggleTheme={props.toggleTheme} />
			</div>
		</div>
	);
};

export default Header;