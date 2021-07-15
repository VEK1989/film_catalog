import style from './Search.module.css';
import searchImg from '../../../assets/images/header-search.png';
import { Formik, Form, Field } from 'formik';
import { setFilterChange, setSearchName } from '../../../redux/search-reduser';
import { connect } from 'react-redux';
import { getSearchName } from '../../../redux/selectors';

const Search = (props) => {

	const submit = (values, { setSubmitting }) => {
		props.setSearchName(values.term)
		props.setFilterChange(values.filter)
		setSubmitting(false)
	}

	return (
		<Formik
			initialValues={{ term: '' }}
			onSubmit={submit}
		>
			{({ isSubmitting }) => (
				<Form>
					<div className={style.input}>
						<Field type='text' name='term' className={style.input_area} placeholder='Search' />
						<Field name='filter' as='select' className={style.select_area}>
							<option value='popular'>Popular</option>
							<option value='now_playing'>Now playing</option>
							<option value='top_rated'>Top rated</option>
							<option value='upcoming'>Upcoming</option>
						</Field>
						<button type='submit' disabled={isSubmitting} className={style.button}>
							<img src={searchImg} alt='search' width='16px' height='16px' />
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};

const mapStateToProps = (state) => {
	return {
		searchName: getSearchName(state)
	}
}


export default connect(mapStateToProps, { setSearchName, setFilterChange })(Search)