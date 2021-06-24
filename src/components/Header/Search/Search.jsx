import style from './Search.module.css'
import searchImg from '../../../assets/images/header-search.png'

const Search = () => {
	return (
		<div className={style.input}>
			<input type="text" className={style.input_area} placeholder="Search" />
			<span><img src={searchImg} alt="search" width="14px" height="14px" /></span>
		</div>
	);
};

export default Search;